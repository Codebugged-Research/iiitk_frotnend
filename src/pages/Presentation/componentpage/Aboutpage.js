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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";


// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import Testimonials from "pages/Presentation/sections/Testimonials";


// Images
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import BuiltByDevelopers from "../components/BuiltByDevelopers";


function Aboutpage() {

    return(
        <>
        <MKBox component="section" py={10}>
            <Container>
                <Grid
                    container
                    item
                    xs={12}
                    lg={8.2}
                    justifyContent="center"
                    sx={{ mx: "auto", textAlign: "center" }}
                >
                <MKTypography variant="h2">About LidaVerse</MKTypography>
                {/* <MKTypography variant="h2" color="info" textGradient mb={2}>
                    &nbsp;&nbsp;&nbsp;Limulator
                </MKTypography> */}
                <MKTypography variant="body1" color="text" mb={2} mt={5}>
                    LidaVerse aims at generating LiDAR data as per user specifications. The software
                    facilitates user to create terrain of his/her choice using available tools. User has
                    option for selection of either generic sensor or commercially available sensors and
                    can set their parameters accordingly. The simulator generates LiDAR data similar to
                    a real LiDAR sensor for further display and analysis. The readily available accurate
                    ground truth and the ability to produce LiDAR data with different specifications
                    make this software also suitable for algorithm testing and research.
                </MKTypography>
             </Grid>
            </Container>
        </MKBox>
        <Counters />
        <Information />
        <Container sx={{ mt: 6 }}>
            <BuiltByDevelopers />
        </Container>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={4}>
                    <FilledInfoCard
                        variant="gradient"
                        color="info"
                        icon="flag"
                        title="Getting Started"
                        description="Check the possible ways of working with our product and the necessary files for building your own project."
                        action={{
                        type: "external",
                        route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                        label: "Let's start",
                        }}
                    />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <FilledInfoCard
                        color="info"
                        icon="precision_manufacturing"
                        title="Plugins"
                        description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                        action={{
                        type: "external",
                        route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                        label: "Read more",
                        }}
                    />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <FilledInfoCard
                        color="info"
                        icon="apps"
                        title="Components"
                        description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                        action={{
                        type: "external",
                        route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                        label: "Read more",
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
        <Testimonials />
        </>
       )
    }

export default Aboutpage;
