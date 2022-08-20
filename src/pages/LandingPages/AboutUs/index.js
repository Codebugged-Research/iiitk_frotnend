/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// About Us page sections
// import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";

// Images
import Featuring from "./sections/Featuring";
import Newsletter from "./sections/Newsletter";

function AboutUs() {
  return (
    <>
      <Grid mb={20}>
        <MKBox component="section" py={10}>
          <Container>
            <Grid xs={12} lg={4} sx={{ mx: "auto", textAlign: "left" }}>
              <MKTypography variant="h2">Mission</MKTypography>
              {/* <MKTypography variant="h2" color="info" textGradient mb={2}>
                &nbsp;&nbsp;&nbsp;Limulator
              </MKTypography> */}
              <MKTypography variant="body1" color="text" mb={2} mt={5}>
                <ul>
                  <li>Sharing labelled data for free and commercially</li>
                  <li>Letting people run Limulator and generate data </li>
                  <li>Letting people test their DL models on data available on site</li>
                </ul>
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
        <Team />
        <Featuring />
        <Newsletter />
      </Grid>
    </>
  );
}

export default AboutUs;
