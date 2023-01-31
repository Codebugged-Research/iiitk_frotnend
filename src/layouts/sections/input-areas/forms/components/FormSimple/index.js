/**
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
import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";


function FormSimple() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handlePress = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://cms.lidaverse.com/contact", { firstName, lastName, email, message, to:"lidaverse@gmail.com" })
        .then((response) => {
          console.log(response);
          alert("Message Sent Successfully!");
        }
        ).catch((error) => {
          alert(error);
        });
    } catch (err) {
      console.log(err);
    }
    console.log("Pressed");
  };

  return (
    <MKBox component="section">
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
            Contact Us
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autocomplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="First Name" fullWidth onChange={(event) => setFirstName(event.target.value)} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Last Name" fullWidth onChange={(event) => setLastName(event.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" type="email" label="Email Address" fullWidth onChange={(event) => setEmail(event.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Your Message" multiline fullWidth rows={6} onChange={(event) => setMessage(event.target.value)} />
                </Grid>
                {/* <Grid item xs={12} alignItems="center" ml={-1}>
                  <Switch checked={checked} onChange={handleChecked} />
                  <MKTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    ml={-1}
                    sx={{ cursor: "pointer", userSelect: "none" }}
                    onClick={handleChecked}
                  >
                    &nbsp;&nbsp;I agree the&nbsp;
                  </MKTypography>
                  <MKTypography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="regular"
                    color="dark"
                  >
                    Terms and Conditions
                  </MKTypography>
                </Grid> */}
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton variant="gradient" color="dark" fullWidth onClick={handlePress}>
                  Send Message
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FormSimple;
