import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import * as React from "react";
import MKButton from "components/MKButton";
import axios from "axios";
import TimeAgo from "timeago-react";
import { Checkbox, FormControlLabel, Pagination, Typography, Grid } from "@mui/material";

/*eslint-disable */

function Main({ checked, filterParams }) {
  const [checkedBoxes, setCheckedBoxes] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const [checkList, setCheckList] = React.useState([]);
  const [filterString, setFilterString] = React.useState("");
  const handleChange = (e, index) => {
    e.preventDefault();
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckedBoxes(checkedBoxes + 1);
    } else {
      setCheckedBoxes(checkedBoxes - 1);
    }
    const newCheckList = [...checkList];
    newCheckList[index] = !newCheckList[index];
    setCheckList(newCheckList);
  };
  const handlleFilterString = (filterParam) => {
    var filter = "?filter=";
    if (filterParam.env !== "all") {
      filter = filter + "&environment=" + filterParam.env;
    }
    if (filterParam.datatype !== "all") {
      filter = filter + "&data_type=" + filterParam.datatype;
    }
    if (filterParam.pointrecord !== "all") {
      filter = filter + "&point_record=" + filterParam.pointrecord;
    }
    if (filterParam.terrain !== "all") {
      filter = filter + "&terrain=" + filterParam.terrain;
    }
    if (filterParam.sensor !== "all") {
      filter = filter + "&sensor=" + filterParam.sensor;
    }
    if (filterParam.charge !== "all") {
      filter = filter + "&charge=" + filterParam.charge;
    }
    if (filterParam.dataDensity !== "all") {
      filter = filter + "&data_density=" + filterParam.dataDensity;
    }
    if (filterParam.accuracy !== "all") {
      filter = filter + "&accuracy=" + filterParam.accuracy;
    }
    setFilterString(filter);
  };
  React.useEffect(() => {
    handlleFilterString(filterParams);
    filterData();
  }, [checked, filterParams]);

  const filterData = () => {
    axios
      .get(
        checked
          ? `https://admin.lidaverse.com/items/pcd_instance?fields=*,io_files.directus_files_id`
          : `https://admin.lidaverse.com/items/pcd_instance?fields=io_files.directus_files_id.*,io_files.pcd_instance_id.*`
      )
      .then((res) => {
        const resp = res.data.data;
        var newResults = [];
        if (checked) {
          newResults.push(...res.data.data);
          // alert(newResults.length + " Segmented files found");
        } else {
          res.data.data.forEach((item) => {
            newResults.push(...item.io_files);
          });
          // alert(newResults.length + " IO files found");
        }
        checkList.fill(false, 0, newResults.length);
        setResults(newResults);
      });
  };
  // for pagination
  const [page, setPage] = React.useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <div>
      <MKBox
        bgColor="white"
        borderRadius="xl"
        shadow="lg"
        sx={{
          height: " 800px",
          width: "350%",
          display: "block",
          position: "relative",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "6px",
            height: "0px",
            zIndex: 2,
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "30px",
            background: "#4D8CC9",
          },
        }}
        mb={10}
      >
        {/*placeholder box */}
        <MKBox
          variant="gradient"
          bgColor="none"
          maxWidth="400px"
          width="38%"
          top={0}
          zIndex={1}
          pl={6}
          py={1}
          pr={15}
          ml="70%"
          borderRadius="lg"
          position="sticky"
        >
          <Typography variant="h5" fontSize={{ xl: "1.2rem", lg: "0.8rem", md: "0.5rem" }}>
            Results &nbsp; &nbsp;: &nbsp;{results.length}
            <br />
            Selected &nbsp;: &nbsp; {checkedBoxes}
          </Typography>
        </MKBox>

        {/*filter name box */}

        <MKBox
          variant="gradient"
          bgColor="info"
          coloredShadow="info"
          pt="2%"
          pb="2%"
          pl="5%"
          ml="34%"
          mr="39%"
          zIndex={3}
          top={0}
          mt={{ xl: -16, lg: -20, md: -25, sm: -30 }}
          position="sticky"
        >
          <MKTypography
            variant="h3"
            color="white"
            fontSize={{ xl: "1.5rem", lg: "1.2rem", md: "1rem", sm: "1rem" }}
          >
            <p>Filter Results</p>
          </MKTypography>
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
                    checked={checkList[index]}
                    onChange={(e) => handleChange(e, index)}
                  />
                }
                label=""
                sx={{ position: "relative", left: "95%" }}
              />
              <h3>
                {checked
                  ? detail.name
                  : detail.pcd_instance_id.name.split("_").join(" ")}
              </h3>
              <p>
                <strong>Place:</strong> {checked ? detail.place : detail.pcd_instance_id.place}
              </p>
              <p>
                <strong>Sensor:</strong>{" "}
                {checked
                  ? detail.sensor.toUpperCase()
                  : detail.pcd_instance_id.sensor.toUpperCase()}{" "}
                <strong>Environment:</strong>{" "}
                {checked ? detail.environment : detail.pcd_instance_id.environment}{" "}
                <strong>Terrain:</strong>{" "}
                {checked ? detail.terrain : detail.pcd_instance_id.terrain}
              </p>
              {checked ? (
                <p>
                  <strong>IO FIles:</strong>
                  {detail.io_files.length}
                </p>
              ) : (
                <></>
              )}
              <p>
                <strong>Uploaded:</strong>{" "}
                <TimeAgo
                  datetime={checked ? detail.date_created : detail.pcd_instance_id.date_created}
                />
              </p>
              <br></br>
              <Grid
                display="flex"
                flexDirection={{ xs: "row", lg: "row" }}
                justifyContent="space-around"
              >
                <Grid>
                  <MKButton
                    variant="gradient"
                    color="info"
                    onClick={() => {
                      window.open("http://127.0.0.1:5500/threepcs.html", "_blank");
                    }}
                  >
                    Visualize
                  </MKButton>
                </Grid>
                {/*<MKButton
                variant="gradient"
                color="info"
                onClick={() => {
                  window.open("#", "_blank");
                }}
                >
                Details
              </MKButton>*/}
                <Grid sx={{ marginLeft: "60%" }}>
                  <MKButton
                    variant="gradient"
                    height="fit-content"
                    width="fit-content"
                    color="info"
                    onClick={() => {
                      window.open("#", "_blank");
                    }}
                  >
                    Download
                  </MKButton>
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
    </div>
  );
}
export default Main;
