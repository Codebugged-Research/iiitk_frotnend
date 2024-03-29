import { Grid } from "@mui/material";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
// import axios from "axios";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
/* eslint-disable */
function Downloadcard({ data, data1, data2, amount }) {
  return (
    <div height="auto">
      <MKBox bgColor="white" borderRadius="xl" shadow="lg" width="100%">
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
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormGroup>
                    Total Payable amount: Rs {amount.toFixed(2)}
                    <MKButton
                      variant="gradient"
                      height="fit-content"
                      width="fit-content"
                      color="info"
                      sx={{ mt: 2 }}
                      onClick={data1}
                    >
                      Download selected
                    </MKButton>
                    <MKButton
                      variant="gradient"
                      height="fit-content"
                      width="fit-content"
                      color="info"
                      sx={{ mt: 2 }}
                      onClick={data}
                    >
                      Download All
                    </MKButton>
                    <MKButton
                      variant="gradient"
                      height="fit-content"
                      width="fit-content"
                      color="info"
                      sx={{ mt: 2 }}
                      onClick={data2}
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
