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

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import SimpleFooter from "examples/Footers/SimpleFooter";

function SignUpBasic() {
  // for showing profile
  // const [profile, setProfile] = useState(false);

  // handle text field change
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [Phone, setPhone] = useState("");
  const [Aadhar, setAadhar] = useState("");

  // post request to server
  const postSignupData = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      const response = await fetch("http://65.2.69.9/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_nbame: lastName,
          email,
          password,
          country,
          phone: Phone,
          aadhar: Aadhar,
        }),
      });
      const data = await response.json();
      console.log(data);
    } else {
      alert("Password and Confirm Password should be same")
    }
  };

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
        minHeight={{ lg: "115vh", md: "120vh", sm: "125vh", xs: "130vh", xl: "115vh" }}
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
      <MKBox
        width="100%"
        height={{ lg: "115vh", md: "120vh", sm: "125vh", xs: "130vh", xl: "115vh" }}
        mx="auto"
        position="relative"
        zIndex={2}
      >
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={{ lg: -2, xl: 1 }}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" id="signup" color="white" m={2}>
                  Sign Up
                </MKTypography>
              </MKBox>
              <MKBox pt={2} pb={0} px={3}>
                <MKBox component="form" role="form">
                  {/* inputs for signup form */}
                  {/* first name */}
                  <Grid display="flex">
                    <MKBox mb={1}>
                      <MKInput type="text" label="First Name" width={{ xl: 200, lg: 150 }}
                        onChange={(event) => setFirstName(event.target.value)}
                      />
                    </MKBox>
                    {/* last name */}
                    <MKBox mb={1}>
                      <MKInput
                        type="text"
                        onChange={(event) => setLastName(event.target.value)}
                        label="Last Name"
                        sx={{ ml: 3 }}
                        width={{ xl: 200, lg: 150 }}
                      />
                    </MKBox>
                  </Grid>
                  {/* mail */}
                  <Grid>
                    <MKBox mb={1}>
                      <MKInput type="email" label="Email" fullWidth width={{ lg: 300 }} onChange={
                        (event) => setEmail(event.target.value)
                      } />
                    </MKBox>
                  </Grid>
                  {/* password */}
                  <Grid display="flex">
                    <MKBox mb={1}>
                      <MKInput type="password" label="Password" width={{ xl: 200, lg: 150 }}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </MKBox>
                    <MKBox mb={1}>
                      <MKInput
                        type="password"
                        label="Confirm Password"
                        onChange  ={(event) => setConfirmPassword(event.target.value)}
                        width={{ xl: 200, lg: 150 }}
                        sx={{ ml: 3 }}
                      />
                    </MKBox>
                  </Grid>
                  {/* company,industry */}
                  {/* <Grid display="flex">
                    <MKBox mb={1}>
                      <MKInput
                        type="text"
                        label="Company / Organization"
                        width={{ xl: 200, lg: 150 }}
                      />
                    </MKBox>
                    <MKBox mb={1}>
                      <MKInput
                        type="text"
                        label="Industry"
                        sx={{ ml: 3 }}
                        width={{ xl: 200, lg: 150 }}
                      />
                    </MKBox>
                  </Grid> */}
                  {/* country */}
                  <Grid>
                    <MKBox mb={1}>
                      <MKInput type="country" label="Country" fullWidth 
                        onChange={(event) => setCountry(event.target.value)}
                      />
                    </MKBox>
                  </Grid>
                  {/* Phone */}
                  <Grid display="flex">
                    <MKBox mb={1}>
                      <MKInput
                        type="mobile"
                        label="Phone"
                        onChange={(event) => setPhone(event.target.value)}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        width={{ xl: 200, lg: 150 }}
                      />
                    </MKBox>
                    {/* Aadhar */}
                    <MKBox>
                      <MKInput
                        type="text"
                        onChange={(event) => setAadhar(event.target.value)}
                        label="Aadhar (Indian users Only)"
                        width={{ xl: 200, lg: 150 }}
                        sx={{ ml: 3 }}
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
                  <MKBox mt={2}>
                    <MKButton
                      variant="gradient"
                      component={Link}
                      to="/presentation"
                      color="info"
                      fullWidth
                      onClick={postSignupData}
                    >
                      Sign Up
                    </MKButton>
                  </MKBox>
                  <MKBox mt={1} mb={1} textAlign="center">
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
      <MKBox width="100%" position="absolute" zIndex={2} bottom="-4.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignUpBasic;
