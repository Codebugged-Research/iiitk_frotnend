import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import * as React from "react";
import MKButton from "components/MKButton";
import TimeAgo from "timeago-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  FormControlLabel,
  Pagination,
  Typography,
  Grid,
} from "@mui/material";
import Downloadcard from "../download card/download"

/*eslint-disable */
let newCheckList = [];

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function Main({ checked, filterParams }) {
  const [checkedBoxes, setCheckedBoxes] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const [downloadLinkList, setDownloadLinkList] = React.useState([]);
  const [checkList, setCheckList] = React.useState([]);
  const [charge, setCharge] = React.useState(0);
  const [checkBoxValue, setCheckBoxValue] = React.useState(false);
  // const [filterString, setFilterString] = React.useState("");

  const navigate = useNavigate();
  const handleChange = (e, index, link) => {
    e.preventDefault();
    setCheckBoxValue(true);
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckedBoxes(checkedBoxes + 1);
    } else {
      setCheckedBoxes(checkedBoxes - 1);
    }
    for (let i = 0; i < index; i++) {
      if (newCheckList[i] === undefined) {
        newCheckList[i] = 0;
      }
    }
    newCheckList = [...checkList];
    newCheckList[index] = !newCheckList[index];
    setCheckList(newCheckList);
  };
  const handlleFilterString = (filterParam) => {
    var filter = "";
    if (filterParam.env !== "all") {
      filter = filter + "&filter[environment][_eq]=" + filterParam.env;
    }
    if (filterParam.datatype !== "all") {
      filter = filter + "&filter[data_type][_eq]=" + filterParam.datatype;
    }
    if (filterParam.pointrecord !== "all") {
      filter = filter + "&filter[point_record][_eq]=" + filterParam.pointrecord;
    }
    if (filterParam.terrain !== "all") {
      filter = filter + "&filter[terrain][_eq]=" + filterParam.terrain;
    }
    if (filterParam.sensor !== "all") {
      filter = filter + "&filter[sensor][_eq]=" + filterParam.sensor;
    }
    if (filterParam.charge !== "all") {
      filter = filter + "&filter[charge][_eq]=" + filterParam.charge;
    }
    if (filterParam.dataDensity !== "all") {
      filter = filter + "&filter[data_density][_eq]=" + filterParam.dataDensity;
    }
    if (filterParam.accuracy !== "all") {
      filter = filter + "&filter[accuracy][_eq]=" + filterParam.accuracy;
    }
    // setFilterString(filter);
    filterData(filter);
  };
  React.useEffect(() => {
    handlleFilterString(filterParams);
  }, [checked, filterParams]);

  const filterData = (filter) => {
    axios
      .get(
        checked
          ? `https://cms.lidaverse.com/items/pcd_instance?fields=*,io_files.directus_files_id,segmented_file.*&filter[status][_eq]=published${filter}`
          : `https://cms.lidaverse.com/items/pcd_instance?fields=io_files.directus_files_id.*,io_files.pcd_instance_id.*&filter[status][_eq]=published${filter}`
      )
      .then((res) => {
        let newResults = [];
        if (checked) {
          newResults.push(...res.data.data);
        } else {
          res.data.data.forEach((item) => {
            newResults.push(...item.io_files);
          });
        }
        console.log("newResults: ", newResults);
        checkList.fill(false, 0, newResults.length);
        setResults(newResults);
      });
  };

  // for pagination
  const [page, setPage] = React.useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  async function displayRazorpay(amount, pid, oid, downloadfilelist) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("https://cms.lidaverse.com/razorpay/order/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount === 0 ? charge : amount,
      }),
    }).then((t) => t.json());

    const options = {
      key: "rzp_test_U8AAmUy9CGfkfh",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Lidar Data Payment",
      description: "Thank you",
      image: "my image",
      handler: async function (response) {
        await createDownloadRecord(amount, response.razorpay_payment_id, response.razorpay_order_id, downloadfilelist)
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const user = JSON.parse(localStorage.getItem("auth"));

  const createDownloadRecord = async (amount, pid, oid, downloadfilelist) => {
    console.log("Bearer " + JSON.parse(localStorage.getItem("auth")).data.access_token);
    var response = await fetch("https://cms.lidaverse.com/items/data_download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("auth")).data.access_token,
      },
      body: JSON.stringify({
        destination_url: "zip/" + Date.now().toString() + ".zip",
        total_price: amount === 0 ? charge : amount,
        download_file_list: downloadfilelist,
        filter_type: checked ? "segmented" : "io",
        payment_id: pid,
        order_id: oid
      }),
      Authorization: 'Bearer ' + user.access_token,
    })
    console.log(response.status);
    var res = await response.json();
    console.log(res);
    if (response.status === 200) {
      navigate("/home");
    }
  }


  const downloadAll = async () => {
    // check this
    let downloadList = [];
    let c = 0;
    for (let i = 0; i < results.length; i++) {
      checkList[i] = true;
      if (results[i]) {
        downloadList.push({
          url: checked ? `https://cms.lidaverse.com/assets/${results[i].segmented_file.id}.pcd` : `https://cms.lidaverse.com/assets/${results[i].directus_files_id.id}.pcd`,
          filename: checked ? `${results[i].segmented_file.filename_download}` : `${results[i].directus_files_id.filename_download}`,
          type: "url",
        });
        c += checked ? parseFloat(results[i].charge) : ((parseFloat(results[i].pcd_instance_id.charge)) / (results[i].pcd_instance_id.io_files.length));
      }
    }
    setCharge(c);
    setCheckList(...checkList);
    if (downloadList.length > 0) {
      if (c > 0) {
        await displayRazorpay(c, "paid", "paid", downloadList)
      } else {
        await createDownloadRecord(c, "free", "free", downloadList)
      }
    } else {
      alert("No files in filter!")
    }
  };

  const downloadSelected = async () => {
    let downloadList = [];
    let c = 0;
    if (checkList.length === 0) {
      alert("Please select card")
    }
    for (let i = 0; i < checkList.length; i++) {
      // if (checkList[i]) {
      console.log("yes")
      if (results[i]) {
        downloadList.push({
          url: checked ? `https://cms.lidaverse.com/assets/${results[i].segmented_file.id}.pcd` : `https://cms.lidaverse.com/assets/${results[i].directus_files_id.id}.pcd`,
          filename: checked ? `${results[i].segmented_file.filename_download}` : `${results[i].directus_files_id.filename_download}`,
          type: "url",
        });
        c += checked ? parseFloat(results[i].charge) : ((parseFloat(results[i].pcd_instance_id.charge)) / (results[i].pcd_instance_id.io_files.length));
      }
      // }
    }
    if (downloadList.length > 0) {
      if (c > 0) {
        await displayRazorpay(c, "paid", "paid", downloadList)
      } else {
        await createDownloadRecord(c, "free", "free", downloadList)
      }
    } else {
      alert("No files in filter!")
    }
  };

  const downloadInpage = async () => {
    let downloadList = [];
    let c = 0;
    for (let i = 0; i < (results.length < 10 ? results.length : 10); i++) {
      checkList[i] = true
      downloadList.push({
        url: checked ? `https://cms.lidaverse.com/assets/${results[i].segmented_file.id}.pcd` : `https://cms.lidaverse.com/assets/${results[i].directus_files_id.id}.pcd`,
        filename: checked ? `${results[i].segmented_file.filename_download}` : `${results[i].directus_files_id.filename_download}`,
        type: "url",
      });
      c += checked ? parseFloat(results[i].charge) : ((parseFloat(results[i].pcd_instance_id.charge)) / (results[i].pcd_instance_id.io_files.length));

    }
    setCharge(c);
    setCheckList(...checkList);
    if (downloadList.length > 0) {
      if (c > 0) {
        await displayRazorpay(c, "paid", "paid", downloadList)
      } else {
        await createDownloadRecord(c, "free", "free", downloadList)
      }
    } else {
      alert("No files in filter!")
    }
  };

  const genTerrain = (terrain) => {
    switch(terrain) {
      case "urban":
        return "Urban";
      case "semiurban":
        return "Semi-Urban";
      case "rural":
        return "Rural";
      case "forest":
        return "Forest";
      default:
        return terrain;
    }
  }
  const genEnv = (env) => {
    switch(env) {
      case "clear":
        return "Clear";
      case "rainy":
        return "Rainy";
      case "foggy":
        return "Foggy";
      case "dusty":
        return "Dusty";
      default:
        return env;
    }
  }

  return (
    <div>
      <MKBox display="flex">
        <MKBox
          bgColor="white"
          borderRadius="xl"
          shadow="lg"
          sx={{
            height: "630px",
            width: "105%",
            display: "block",
            position: "relative",
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "6px",
              height: "0px",
              zIndex: 2,
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "20px",
              background: "#4D8CC9",
            },
          }}
          mb={10}
        >
          {/*placeholder box */}
          {/*filter name box */}
          <MKBox
            variant="gradient"
            bgColor="none"
            display="flex"
            height="75px"
            top={0}
            zIndex={1}
            borderRadius="lg"
            position="sticky"
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              alignItems="center"
              pt={2}
              pl={1}
              pr={1}
              ml="40%"
            >
              <MKTypography
                variant="h3"
                bgColor="blue"
                color="white"
                fontSize={{ xl: "1.5rem", lg: "1.2rem", md: "1rem", sm: "1rem" }}
              >
                <p>Filter Results</p>
              </MKTypography>
            </MKBox>
            <MKBox pt={1} pl={1.5} ml="20%">
              <Typography 
                variant="h6"
                fontSize={{ xl: "1.0rem", lg: "0.6rem", md: "0.4rem" }}
              >
                Results &nbsp; &nbsp;: &nbsp;{results.length}
                <br />
                Selected &nbsp;: &nbsp; {checkedBoxes}
              </Typography>
            </MKBox>
          </MKBox>

          {/*main card elements box */}
          <MKBox marginTop={10}>
            {results.slice(page * 10 - 10, page * 10).map((detail, index) => (
              <MKBox
                key={index.toString()}
                variant="gradient"
                bgColor="grey"
                coloredShadow="info"
                borderRadius="lg"
                p={2}
                mx={10}
                mt={3}
                mb={3}
                fontSize={{ xl: "1rem", lg: "0.8rem" }}
              >
                <Grid display="flex">
                  <Grid item md={10} container spacing={2}>
                    <Grid item md={12} mb={3}>
                      <h3>
                        {checked
                          ? detail.name
                          : detail.directus_files_id.title + ` from (${detail.pcd_instance_id.name})`}
                      </h3>
                    </Grid>
                    <Grid item ml={1.5}>
                      <p>
                        <strong>Place : </strong>{" "}
                        {checked ? detail.place : detail.pcd_instance_id.place}
                      </p>
                    </Grid>
                    <Grid item ml={1.5}>
                      <p>
                        <strong>Sensor : </strong>
                        {checked
                          ? detail.sensor.toUpperCase()
                          : detail.pcd_instance_id.sensor.toUpperCase()}
                      </p>
                    </Grid>
                    <Grid item ml={1.5}>
                      <p>
                        <strong> Environment : </strong>
                        {checked
                          ? genEnv(detail.environment)
                          : genEnv(detail.pcd_instance_id.environment)}
                      </p>
                    </Grid>
                    <Grid item ml={1.5}>
                      <p>
                        <strong>Terrain : </strong>
                        {checked
                          ? genTerrain(detail.terrain)
                          : genTerrain(detail.pcd_instance_id.terrain)}
                      </p>
                    </Grid>
                    {/* {checked ? (
                      <Grid item ml={1.5}>
                        <p>
                          <strong>IO FIles : </strong>
                          {detail.io_files.length}
                        </p>
                      </Grid>
                    ) : (
                      <></>
                    )} */}
                    <Grid item ml={1.5}>
                      <p>
                        <strong>Uploaded : </strong>
                        <TimeAgo
                          datetime={
                            checked
                              ? detail.date_created
                              : detail.pcd_instance_id.date_created
                          }
                        />
                      </p>
                    </Grid>
                  </Grid>
                  <Grid md={3}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            border: "2px solid #92aed4",
                            borderRadius: "0.35rem",
                            width: "1rem",
                            height: "1rem",
                          }}
                          className="ckb"
                          checked={
                            checkBoxValue
                              ? checkList[(page - 1) * 10 + index]
                              : false
                          }
                          onChange={(e) =>
                            handleChange(e, (page - 1) * 10 + index, checked
                              ? "https://cms.lidaverse.com/assets/" + detail.segmented_file
                              : "https://cms.lidaverse.com/assets/" + detail.directus_files_id)
                          }
                        />
                      }
                      label=""
                      sx={{ position: "relative", left: "85%", top: "2%" }}
                    />
                    <MKButton
                      variant="gradient"
                      color="info"
                      onClick={() => {
                        let u = `https://cms.lidaverse.com/visualize?fileid=${checked
                          ? detail.segmented_file.id : detail.directus_files_id.id}`;
                        console.log(u);
                        window.open(u, "_self");
                      }}
                      sx={{ mt: 5 }}
                    >
                      Visualize
                    </MKButton>
                    {/*<MKButton
                    variant="gradient"
                    color="info"
                    onClick={() => {
                      window.open("#", "_blank");
                    }}
                    >
                    Details
                  </MKButton>*/}
                    {/* <Grid sx={{ mt: "20%" }}> */}
                    <MKButton
                      variant="gradient"
                      height="fit-content"
                      width="fit-content"
                      color="info"
                      onClick={async () => {
                        var d = [
                          {
                            "url": checked ? `https://cms.lidaverse.com/assets/${detail.segmented_file.id}.pcd` : `https://cms.lidaverse.com/assets/${detail.directus_files_id.id}.pcd`,
                            "filename": checked ? `${detail.segmented_file.filename_download}` : `${detail.directus_files_id.filename_download}`,
                            "type": "url"
                          }
                        ]
                        await displayRazorpay(1, "paid", "paid", d);
                      }
                      }
                      sx={{ mt: 3 }}
                    >
                      Download
                    </MKButton>
                    {/* </Grid> */}
                  </Grid>
                </Grid>
              </MKBox>
            ))}
          </MKBox>
          <MKBox
            width="100%"
            display="flex"
            flexDirection={{ xs: "column", lg: "column" }}
            justifyContent="space-between"
            alignItems="center"
            pb={5}
            pt={5}
          >
            <Pagination
              width="100%"
              position="absolute"
              count={results.length < 10 ? 1 : Math.ceil(results.length / 10)}
              page={page}
              onChange={handleChangePage}
              color="info"
            />
          </MKBox>
        </MKBox>
        <MKBox ml="3%" width="31%">
          <Downloadcard
            // name="Download Options"
            // btnName={["Download selected", "Download All", "Download in this page","Total amount"]}
            data={async () => {
              await downloadAll()
            }}
            data1={() => downloadSelected()}
            data2={() => downloadInpage()}
            amount={charge}
          />
        </MKBox>
      </MKBox>
    </div>
  );
}
export default Main;
