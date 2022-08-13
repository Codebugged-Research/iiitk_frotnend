/*eslint-disable */
// @mui material components
import Container from "@mui/material/Container";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import {useMediaQuery} from "@mui/material";
import { useTheme } from '@mui/material/styles';
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
// for resoponsiveness
const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.down("lg")]: {
      width:"200%",
      paddingBottom:2,
      display:"block",
    },
    [theme.breakpoints.down("md")]: {
      width:"150%",
      paddingBottom:2,
      display:"block",
    },
    [theme.breakpoints.down("sm")]: {
      width:"80%",
      paddingBottom:2,
      display:"block",
    },
  },
  text: {
    [theme.breakpoints.down("lg")]: {
      width:"80%",
      marginLeft:0,
      paddingBottom:5,
    },
    [theme.breakpoints.down("md")]: {
      width:"80%",
      marginLeft:0,
      paddingBottom:5,
    },
    [theme.breakpoints.down("sm")]: {
      width:"80%",
      marginLeft:0,
      paddingBottom:5,
    },
  },
}));


function UserDetails() {
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
  const handeleChangeUpdate = () => {
    setEnable(true);
  };
  return (
    <MKBox>
      <Container maxWidth="sm">
        <MKTypography variant="h4" color="text" pb={2}>
          User Details
        </MKTypography>
        {/* first name */}
        <Grid container spacing={isSmall?0:2} width="300%" className={classes.form}>
          <Grid item>
            <TextField
              className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="First Name"
              defaultValue="Gokul"
              variant="filled"
              sx={{ width: 400 }}
            />
            {/* second  name */}
            <TextField
            className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="Last Name"
              defaultValue="selavaraj"
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
              defaultValue="1212@gmail.com"
              variant="filled"
              type="email"
              sx={{ width: 400 }}
            />
            {/* password */}
            <TextField
            className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="password"
              defaultValue="1212@gmail.com"
              type="password"
              variant="filled"
              sx={{ width: 400, ml: 5 }}
            />
          </Grid>
          <Grid item>
            {/* company */}
            <TextField
            className={classes.text}
              disabled={enable}
              id="filled-disabled"
              label="company / orgainization"
              defaultValue="Codebugged"
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
              defaultValue="coding"
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
              defaultValue="India"
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
              defaultValue="1111111111"
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
              defaultValue="1111111111"
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
