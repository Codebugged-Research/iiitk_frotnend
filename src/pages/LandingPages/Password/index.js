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

import { useState } from "react";
// import axios from "axios";
// react-router-dom components
import { useSearchParams } from "react-router-dom";
import axios from "axios";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function PasswordReset() {
  const [password, setPassword] = useState("");
  const [valueError, setValueError] = useState("");
  const [valueSuccess, setValueSuccess] = useState("");
  const [searchParams] = useSearchParams();

  // const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    if(searchParams.get("token") === null) {
      alert("Invalid token");
      return;
    }
    if (password.length < 8) {
      setValueError("true");
      alert("Password must be at least 8 characters long");
      return;
    }
    try {
      console.log("password", password);
      await axios
        .post(`https://cms.lidaverse.com/auth/password/reset`, {
          password,
          token: searchParams.get("token"),
        })
        .then((response) => {
          console.log("Refresh response", response);
          if (window.confirm("Password reset successful")) {
            window.location.href = "/sign";
          }
          setValueSuccess("true");
        });
    } catch (err) {
      console.log(err);
      alert("Password reset failed");
      setValueError("true");
    }
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      try {
        console.log("password", password);
      } catch (err) {
        console.log(err);
      }
    }
  };
  console.log("token", searchParams.get("token"));
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox
        px={1}
        width="100%"
        height="100vh"
        mx="auto"
        position="relative"
        zIndex={2}
      >
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={10} sm={8} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={{ lg: 1, xl: 2 }}
                mb={1}
                textAlign="center"
              >
                <MKTypography
                  variant="h4"
                  fontWeight="medium"
                  color="white"
                  m={2}
                >
                  Password Reset
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  {/* password */}
                  <MKBox>
                    <MKInput
                      type="password"
                      label="Password"
                      fullWidth
                      error={valueError}
                      success={valueSuccess}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </MKBox>
                  <MKBox mt={2} mb={1}>
                    <MKButton
                      variant="gradient"
                      color="info"
                      fullWidth
                      onClick={handleReset}
                    >
                      Reset
                    </MKButton>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default PasswordReset;
