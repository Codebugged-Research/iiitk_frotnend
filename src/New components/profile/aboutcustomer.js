/* eslint-disable */
import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import UserDetails from "./userdetails/userdetails";
import DownloadInfo from "./userdetails/downloadInfo";
import Transition from "./userdetails/transition";

function AboutCustomer({ value }) {
  /* user name */
  const username = "UserName";
  return (
    <MKBox component="section" pt={5} my={8} >
      <MKTypography variant="h4" color="text" sx={{ ml: "10%", mt: -10, mb: 4 }}>
        Welcome {username}
      </MKTypography>
      <Container>
        <Grid container position="relative" alignItems="center">
          <Grid display="flex" md={5} height={550}>
            <MKBox>
              {/* tabs */}
              <TabContext value={value} orientation="vertical">
                <Box
                  sx={{
                    flexGrow: 1,
                    bgcolor: "background.paper",
                    position: "relative",
                    height: 324,
                    width: 400,
                  }}
                >
                  <MKBox sx={{ }}>
                    {/* user details tab */}
                      <TabPanel value="0" index={0}>
                        <UserDetails />
                      </TabPanel>
                    <TabPanel value="1" index={1}>
                      {/* tansition details tab */}
                      <Transition />
                    </TabPanel>
                    <TabPanel value="2" index={2}>
                      {/* download details tab */}
                      <DownloadInfo />
                    </TabPanel>
                  </MKBox>
                </Box>
              </TabContext>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutCustomer;
