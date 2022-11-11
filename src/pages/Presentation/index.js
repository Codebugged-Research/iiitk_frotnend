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

// import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
// import Information from "pages/Presentation/sections/Information";
// import Testimonials from "pages/Presentation/sections/Testimonials";
// import authService from "services/authservice";
// import Download from "pages/Presentation/sections/Download";
// import SignInPage from "layouts/pages/authentication/sign-in";
// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
// import SignInBasic from "pages/LandingPages/SignIn";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
// Images
import bgImage from "assets/images/bg-presentation.jpg";
import AboutUs from "pages/LandingPages/AboutUs";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
import Aboutpage from "./componentpage/Aboutpage";
// import BuiltByDevelopers from "./components/BuiltByDevelopers";


function Presentation() {


  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type:  "external",
          route1: "/signin",
          route2: "/signin",
          label1: "Login",
          label2: "Data Download",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              LidaVerse{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              The simulator generates LiDAR data similar to a real LiDAR sensor for further display
              and analysis.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 1),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <section id="about">
         <Aboutpage/>
        </section>
        <section id="services">
        <AboutUs />
        </section>
        <section id="contactus">
        <Newsletter/>
        <MKBox pb={10}>
          <Container>
            <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                Thank you for your support!
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
        </section>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
