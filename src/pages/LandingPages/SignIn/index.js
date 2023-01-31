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
import axios from "axios";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
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

import AuthService from "../../../services/authservice";

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valueError, setValueError] = useState("")
  const [valueSuccess, setValueSuccess] = useState("")

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          setValueSuccess("true")
          localStorage.setItem("email", email)
          navigate("/filter/segmented");
          window.location.reload();
        },
        (error) => {
          setValueError("true")
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      try {
        await AuthService.login(email, password).then(
          () => {
            setValueSuccess("true")
            localStorage.setItem("email", email)
            navigate("/filter/segmented");
            window.location.reload();
          },
          (error) => {
            setValueError("true")
            console.log(error);
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  }

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
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
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
                <MKTypography variant="h4" fontWeight="medium" color="white" m={2}>
                  Login
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  {/* email */}
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth error={valueError} success={valueSuccess}
                      onChange={(e) => setEmail(e.target.value)} />
                  </MKBox>
                  {/* password */}
                  <MKBox>
                    <MKInput type="password" label="Password" fullWidth error={valueError} success={valueSuccess}
                      onChange={(e) => setPassword(e.target.value)} onKeyPress={handleKeyPress} />
                  </MKBox>
                  {/* remember me */}
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={2} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth onClick={handleLogin}>
                      Login
                    </MKButton>
                  </MKBox>
                  <MKBox mt={1} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/signup"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                  <MKBox
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                    mb={1}
                    onClick={async () => {
                      if (email === "") {
                        alert("Please enter your email address");
                      } else {
                        await axios.post("https://cms.lidaverse.com/auth/password/request", { email })
                          .then((response) => {
                            console.log(response);
                            alert("Please check your email to reset your password");
                          }
                          ).catch((error) => {
                            alert(error);
                          });
                      }
                    }}
                    textAlign="center"
                  >
                    <MKTypography variant="button" fontWeight="medium" color="white" m={2}>
                      Forget password?
                    </MKTypography>
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


export default SignInBasic;
