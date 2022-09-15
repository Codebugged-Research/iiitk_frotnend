import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import * as React from "react";
import MKButton from "components/MKButton";
import axios from "axios";
import TimeAgo from "timeago-react";
import { Checkbox, FormControlLabel, Pagination,Typography , Grid } from "@mui/material";

/*eslint-disable */
 let newCheckList = []
function Main({ checked, filterParams }) {
  const [checkedBoxes, setCheckedBoxes] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const [checkList, setCheckList] = React.useState([]);
  const [checkBoxValue , setCheckBoxValue] = React.useState(false)
  // const [filterString, setFilterString] = React.useState("");
  const handleChange = (e, index) => {
    e.preventDefault();
    setCheckBoxValue(true)
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckedBoxes(checkedBoxes + 1);
    } else {
      setCheckedBoxes(checkedBoxes - 1);
    }
    for(let i=0;i<index;i++)
    {
      if(newCheckList[i] === undefined){
      newCheckList[i] = false;}
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
          ? `https://admin.lidaverse.com/items/pcd_instance?fields=*,io_files.directus_files_id&filter[status][_eq]=published${filter}`
          : `https://admin.lidaverse.com/items/pcd_instance?fields=io_files.directus_files_id.*,io_files.pcd_instance_id.*&filter[status][_eq]=published${filter}`
      )
      .then((res) => {
        var newResults = [];
        if (checked) {
          newResults.push(...res.data.data);
        } else {
          res.data.data.forEach((item) => {
            newResults.push(...item.io_files);
          });
        }
        console.log("newResults");
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
          height: " 600px",
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
          <MKBox
           pt={1}
           pl={1.5}
           ml="20%"
          >
          <Typography variant="h5" fontSize={{ xl: "1.2rem", lg: "0.8rem", md: "0.5rem" }}>
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
             <Grid item md={10} container spacing={2} >
                <Grid item md={12}mb={3}>
                <h3>
                  {checked
                    ? detail.name
                    : detail.pcd_instance_id.name.split("_").join(" ")}
                </h3>
              </Grid>
              <Grid item ml={1.5}>
                <p >
                  <strong >Place : </strong> {checked ? detail.place : detail.pcd_instance_id.place}
                </p>
              </Grid>
              <Grid item  ml={1.5}>
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
                  {checked ? detail.environment : detail.pcd_instance_id.environment}
                </p>
              </Grid>
              <Grid item  ml={1.5}>
                <p>  
                  <strong>Terrain : </strong>
                  {checked ? detail.terrain : detail.pcd_instance_id.terrain}
                </p>
              </Grid>
                {checked ? (
                  <Grid item  ml={1.5}>
                  <p>
                    <strong>IO FIles : </strong>
                    {detail.io_files.length}
                  </p>
                </Grid>
                ) : (
                  <></>
                )}
                <Grid item  ml={1.5} >
                <p>
                  <strong>Uploaded : </strong>
                  <TimeAgo
                    datetime={checked ? detail.date_created : detail.pcd_instance_id.date_created}
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
                      checked={(checkBoxValue ? checkList[(((page-1)*10)+index)]:false)}
                      onChange={(e) => handleChange(e, (((page-1)*10)+index))}
                  />
                  }
                  label=""
                  sx={{ position: "relative", left: "85%" ,top:"2%"}}
              />
                  <MKButton
                    variant="gradient"
                    color="info"
                    onClick={() => {
                    window.open("http://127.0.0.1:5500/threepcs.html", "_blank");
                    }}
                    sx={{mt:5}}
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
                    onClick={() => {
                      window.open("#", "_blank");
                    }}
                    sx={{mt:3}}
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
    </div>
  );
}
export default Main;
