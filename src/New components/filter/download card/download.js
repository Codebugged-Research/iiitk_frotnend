import { Grid, Slider } from "@mui/material";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup"; 
// import axios from "axios";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
/* eslint-disable */
function Downloadcard({ data ,data1 , data2 , amount}) {
  const [show,setShow] = React.useState(false);

  const [downloadInput, setDownloadInput] = React.useState(20);

  const inputHandler = (e) => {
    const downloadNumber = e.target.value.toString();
    if (downloadNumber >100){
      setDownloadInput(100);
    }
    else if(downloadNumber < 10 || downloadNumber === ""){

      setDownloadInput(10);
    }
    else{
      setDownloadInput(downloadNumber);
    }
  };
  return (
    <div height="auto">
      <MKBox
        bgColor="white"
        borderRadius="xl"
        shadow="lg"
        width="100%"
      >
        <MKBox
          variant="gradient"
          bgColor="info"
          coloredShadow="info"
          p={2}
          mx="20%"
          pl={3}
        >
          <MKTypography variant="h5" color="white">
            Download Options
          </MKTypography>
        </MKBox>
        <MKBox>
          <MKBox width="100%" component="form" method="post" autocomplete="off">
              <Grid>
                <h5>
                  <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormGroup>
                      {/*selection download*/}
                      Total Payable amount: Rs {amount}
                      <MKButton
                        variant="gradient"
                        height="fit-content"
                        width="fit-content"
                        color="info"
                        onClick={() => setShow(!show)}
                        sx={{ mt: 2}}
                      >
                        Download Top {downloadInput}% {show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                      </MKButton>
                      {show &&
                      <Slider
                        color="secondary"
                        defaultValue={20}
                        valueLabelDisplay="auto"
                        aria-labelledby="discrete-slider"
                        sx={{ '& .MuiSlider-valueLabel':{backgroundColor:"#39F",color:"#fff"}}}
                        step={10}
                        min={10}
                        onChange={inputHandler}
                        max={100}
                      />}
                      {/* {btnName.map((btnName, index) => { */}
                         {/* return ( */}
                          <MKButton
                            variant="gradient"
                            height="fit-content"
                            width="fit-content"
                            color="info"
                            sx={{ mt: 2 }}
                            onClick = {data1}
                          >
                            Download selected
                          </MKButton>
                         {/* ); */}
                      {/* })} */}
                          <MKButton
                            variant="gradient"
                            height="fit-content"
                            width="fit-content"
                            color="info"
                            sx={{ mt: 2 }}
                            onClick = {data}
                          >
                            Download All
                          </MKButton>
                          <MKButton
                            variant="gradient"
                            height="fit-content"
                            width="fit-content"
                            color="info"
                            sx={{ mt: 2 }}
                            onClick = {data2}
                          >
                            Download in this page
                          </MKButton>
                    </FormGroup>
                  </FormControl>
                </h5>
              </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
    </div>
  );
}
export default Downloadcard;
