/*eslint-disable */
// @mui material components
import Container from "@mui/material/Container";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Material Kit 2 React components
import axios from "axios";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import authService from "services/authservice";
// for resoponsiveness
const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.down("lg")]: {
      width: "200%",
      paddingBottom: 2,
      display: "block",
    },
    [theme.breakpoints.down("md")]: {
      width: "150%",
      paddingBottom: 2,
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      paddingBottom: 2,
      display: "block",
    },
  },
  text: {
    [theme.breakpoints.down("lg")]: {
      width: "80%",
      marginLeft: 0,
      paddingBottom: 5,
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
      marginLeft: 0,
      paddingBottom: 5,
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginLeft: 0,
      paddingBottom: 5,
    },
  },
}));

function UserDetails() {
  authService.getCurrentUser();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
  const classes = useStyles();
  // for enable/disable inputs
  const [enable, setEnable] = useState(true);
  // for enable inputs
  const handeleChangeEdit = () => {
    setEnable(false);
  };
  // for disable inputs
  const handeleChangeUpdate = async () => {
    await axios
      .patch(
        `https://admin.lidaverse.com/users/${user.id}`,
        {
          "first_name": firstName,
          "last_name": lastName,
          "email": email,
          "phone": phone,
          "country": country,
          "phone": phone,
          "industry": industry,
          "company": company,
        },
        {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("auth")).access_token
          }`,
        }
      )
      .then((response2) => {
        console.log("User response", response2);
        if (response2.data) {
          localStorage.setItem("user", JSON.stringify(response2.data.data[0]));
        }
        setEnable(true);
      });
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [phone, setPhone] = useState(user.phone);
  const [industry, setIndustry] = useState(user.industry);
  const [country, setCountry] = useState(user.country);
  const [company, setCompany] = useState(user.company);
  const [aadhar, setAadhar] = useState(user.aadhar);

  return (
    <MKBox>
      <Container maxWidth="sm">
        <MKTypography variant="h4" color="text" pb={2}>
          User Details {user.first_name}
        </MKTypography>
        {/* first name */}
        <Grid
          container
          spacing={isSmall ? 0 : 2}
          width="300%"
          className={classes.form}
        >
          <Grid item>
            <TextField
              className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="First Name"
              defaultValue={firstName}
              variant="filled"
              sx={{ width: 400 }}
            />
            {/* second  name */}
            <TextField
              className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="Last Name"
              defaultValue={lastName}
              variant="filled"
              sx={{ width: 400, ml: 5 }}
            />
          </Grid>
          <Grid item>
            {/* email */}
            <TextField
              className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="email"
              defaultValue={email}
              variant="filled"
              type="email"
              sx={{ width: 400 }}
            />
            {/* password */}
            {/* <TextField
            className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="password"
              defaultValue={password}
              type="password"
              variant="filled"
              sx={{ width: 400, ml: 5 }}
            /> */}
          </Grid>
          <Grid item>
            {/* company */}
            <TextField
              className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="company / orgainization"
              defaultValue={company}
              type="text"
              variant="filled"
              sx={{ width: 400 }}
            />
            {/* industry */}
            <TextField
              className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="industry"
              defaultValue={industry}
              type="text"
              variant="filled"
              sx={{ width: 400, ml: 5 }}
            />
          </Grid>
          <Grid item>
            {/* country */}
            <TextField
              className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="country"
              defaultValue={country}
              type="text"
              variant="filled"
              sx={{ width: 400 }}
            />
            {/* phone */}
            <TextField
              className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="phone"
              defaultValue={phone}
              type="tel"
              variant="filled"
              sx={{ width: 400, ml: 5 }}
            />
          </Grid>
          <Grid item>
            {/* AADHAR */}
            <TextField
              className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="aadhar"
              defaultValue={aadhar}
              type="text"
              variant="filled"
              sx={{ width: 400 }}
            />
          </Grid>
        </Grid>
        {/* edit button */}
        <MKButton
          onClick={handeleChangeEdit}
          variant="gradient"
          height="fit-content"
          width="fit-content"
          color="info"
          sx={{ mt: 2 }}
        >
          &nbsp; &nbsp;Edit &nbsp; &nbsp;
        </MKButton>
        {/* update button */}
        <MKButton
          onClick={handeleChangeUpdate}
          variant="gradient"
          height="fit-content"
          width="fit-content"
          color="info"
          sx={{ mt: 2, ml: 2 }}
        >
          Update
        </MKButton>
      </Container>
    </MKBox>
  );
}
export default UserDetails;
