// segmented files page
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import { Grid,Tabs, Tab ,Box } from "@mui/material";
// import MKBox from "components/MKBox";
import routes from "routes";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import Cards from "./card/card";
import Main from "./maincard/main";
// import Downloadcard from "./download card/download";


function Filter1() {
  const navigate = useNavigate();
  const checked = true;
  const [env, setEnv] = React.useState("all");
  const [datatype, setDatatype] = React.useState("all");
  const [pointrecord, setPointrecord] = React.useState("all");
  const [terrain, setTerrain] = React.useState("all");
  const [sensor, setSensor] = React.useState("all");
  const [charge, setCharge] = React.useState("all");
  const [dataDensity, setDataDensity] = React.useState("all");
  const [accuracy, setAccuracy] = React.useState("all");

  console.log(charge)
  React.useEffect(() => {}, [
    checked,
    env,
    datatype,
    pointrecord,
    terrain,
    sensor,
    charge,
    dataDensity,
    accuracy,
  ]);

  const handleChange = (e) => {
    e.preventDefault();
    navigate("/filter/io")
  };

  // const downloadall = (data) =>{
  //   () => downloadAll()
  // }
  
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route1: "/signin",
          label1: "Logout",
          color: "info",
        }}
        sticky
      />
      <Grid container spacing={0}>
        <Grid
          mt={17}
          xs={2.2}
          sx={{
            height: " 800px",
            overflowX: "clip",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "30px",
              background: "#4D8CC9",
            },
          }}
        >
          <Box
            p={0}
            pt={0.5}
            pb={0.5}
            mx={2}
            mt={2}
          >
          <Tabs value="one" onChange={handleChange} >
            <Tab value="one" label="Segemented files" wrapped/>
            <Tab value="two" label="IO files" wrapped/>
          </Tabs>
          </Box>
          <Grid
            sx={{
              height: " 700px",
              overflowX: "clip",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "5px",
                height: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "30px",
              },
            }}
          >
            <Cards
              name="  Environment"
              options={["clear", "rainy", "foggy", "dusty", "all"]}
              selected={env}
              onChange={setEnv}
            />
            <Cards
              name="  Datatype"
              options={["field", "simulated", "all"]}
              selected={datatype}
              onChange={setDatatype}
            />
            <Cards
              name="  Point Record"
              options={["xyz", "xyzl", "xyzrgb", "xyzlrgb", "all"]}
              selected={pointrecord}
              onChange={setPointrecord}
            />
            <Cards
              name="  Terrain"
              options={["urban", "semi-urban", "rural", "forest", "all"]}
              selected={terrain}
              onChange={setTerrain}
            />
            <Cards
              name="  Sensor types"
              options={["als", "mls", "tls", "uls", "all"]}
              selected={sensor}
              onChange={setSensor}
            />
            <Cards
              name="  Charge"
              options={["Free", "Paid", "all"]}
              selected={charge}
              onChange={setCharge}
            />
            <Cards
              name="  Accuracy"
              options={["0-5cm", "5-10cm", "10-15cm", "15-20cm", "20-above", "all"]}
              selected={accuracy}
              onChange={setAccuracy}
            />
            <Cards
              name="  Data Density"
              options={["<1", "1-5", "5-10", "10-15", "15-25", "25-50", "above50", "all"]}
              selected={dataDensity}
              onChange={setDataDensity}
            />
          </Grid>
        </Grid>
        <Grid mt={20} xs={9}  ml="2%">
          <Main
            checked={checked}
            filterParams={{
              env,
              datatype,
              pointrecord,
              terrain,
              sensor,
              charge,
              dataDensity,
              accuracy,
            }}
          />
        </Grid>
        {/* <Grid mt={20} ml="44%">
          <Downloadcard
            // name="Download Options"
            // btnName={["Download selected", "Download All", "Download in this page","Total amount"]}
            // onclick = {downloadAll}
          />
        </Grid> */}
      </Grid>
    </>
  );
}
export default Filter1;
