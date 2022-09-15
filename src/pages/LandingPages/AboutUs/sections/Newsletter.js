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


// Images
import macbook from "assets/images/macbook.png";

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={4} sx={{bgColor:"white"}}>
       <Container>
         <Grid container alignItems="center">
            <Grid item sx={12} md={6}>
             {/* <MKTypography variant="h4">Be the first to see the news</MKTypography> }
             <MKTypography variant="h4">Contact form</MKTypography>
             <MKTypography variant="body2" color="text" mb={3}>
               Your company may not be in the software business, but eventually, a software company
               will be in your business.
             </MKTypography>
            <Grid container spacing={2}>
            <Grid item xs={10}>
                <MKInput type="name" label="Name..." fullWidth />
              </Grid>
              <Grid item xs={10}>
                <MKInput type="email" label="Email..." fullWidth />
              </Grid>
              <Grid item xs={10}>
                <MKInput type="company" label="Company..." fullWidth />
              </Grid>
              <Grid item xs={10}>
                <TextField type="message" label="Message..." fullWidth multiline="true"rows={3} maxRows={Infinity}/>
              </Grid>
              <Grid item xs={7} mb={10}>
               <MKButton variant="gradient" color="info" sx={{ height: "100%" }}>
                Send Message
               </MKButton>
             </Grid>
           </Grid> */}
           <FormSimple />
         </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
         </Grid>
       </Container>
    </MKBox>
  );
}

export default Newsletter;
