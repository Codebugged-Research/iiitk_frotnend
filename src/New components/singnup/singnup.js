import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

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

function SignUpBasic() {
  // for showing profile
  // const [profile, setProfile] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

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
          <Grid item xl="auto">
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" id="signup" color="white" m={2}>
                  Sign Up
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  {/* inputs for signup form */}
                  {/* first name */}
                  <Grid display="flex">
                    <MKBox mb={2}>
                      <MKInput type="text" label="First Name" sx={{ width: 200 }} />
                    </MKBox>
                    {/* last name */}
                    <MKBox mb={2}>
                      <MKInput type="text" label="Last Name" sx={{ width: 200, ml: 3 }} />
                    </MKBox>
                  </Grid>
                  {/* mail */}
                  <Grid>
                    <MKBox mb={2}>
                      <MKInput type="email" label="Email" fullWidth />
                    </MKBox>
                  </Grid>
                  {/* password */}
                  <Grid display="flex">
                    <MKBox mb={2}>
                      <MKInput type="password" label="Password" sx={{ width: 200 }} />
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        type="password"
                        label="Confirm Password"
                        sx={{ width: 200, ml: 3 }}
                      />
                    </MKBox>
                  </Grid>
                  {/* company,industry */}
                  <Grid display="flex">
                    <MKBox mb={2}>
                      <MKInput type="text" label="Company / Organization" sx={{ width: 200 }} />
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput type="text" label="Industry" sx={{ width: 200, ml: 3 }} />
                    </MKBox>
                  </Grid>
                  {/* country */}
                  <Grid>
                    <MKBox mb={2}>
                      <MKInput type="country" label="Country" fullWidth />
                    </MKBox>
                  </Grid>
                  {/* Phone */}
                  <Grid display="flex">
                    <MKBox mb={2}>
                      <MKInput
                        type="mobile"
                        label="Phone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        sx={{ width: 200 }}
                      />
                    </MKBox>
                    {/* Aadhar */}
                    <MKBox mb={2}>
                      <MKInput
                        type="text"
                        label="Aadhar (Indian users Only)"
                        sx={{ width: 200, ml: 3 }}
                      />
                    </MKBox>
                  </Grid>

                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;<b style={{ color: "red" }}>* </b>I Agree to the{" "}
                      <a href="#t&c">Terms and Conditions</a>
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      variant="gradient"
                      component={Link}
                      to="/presentation"
                      color="info"
                      fullWidth
                    >
                      Sign Up
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Already have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/signin"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Login
                      </MKTypography>
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

export default SignUpBasic;
