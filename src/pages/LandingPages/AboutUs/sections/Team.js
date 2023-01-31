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

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image="https://www.bing.com/th?id=OIP.MfRFiDllrx7j0LN0d2XlaAHaHa&w=206&h=206&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                name="Dr. Bharat Lohani"
                position={{ color: "info", label: "Associate Professor" }}
                description="Department of Civil Engineering,
                Indian Institute of Technology Kanpur."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image="https://www.bing.com/th?id=OIP.HvKuDMuDm_VCaDd9PQ5HbQHaF-&w=133&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                name="Rakesh Kumar Mishra"
                position={{ color: "info", label: "Sr. Project Associate" }}
                description="Geoinformatics Lab,
                Indian Institute of Technology Kanpur"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
