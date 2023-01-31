/* eslint-disable react/jsx-no-duplicate-props */
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
// import TextField from '@mui/material/TextField';



// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";


function Newsletter() {
  return (
    <MKBox component="section" my={4} sx={{ bgColor: "white" }}>
      <Container>
        <Grid container alignItems="center">
            <FormSimple />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
