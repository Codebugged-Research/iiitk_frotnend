import { Grid, Input } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import FormGroup from "@mui/material/FormGroup";

/* eslint-disable */
function Cards({ name, options, selected, onChange, searchBar, placeholder }) {
  const [show, setShow] = React.useState(false);
  const [inputText, setInputText] = React.useState("");
  const handleChange = (e, option) => {
    e.preventDefault();
    onChange(option);
  };

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = options.filter((el) => {
    //if no input the return the original
    if (inputText === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.includes(inputText);
    }
  });

  React.useEffect(() => {}, [selected]);
  return (
    <div>
      <MKBox
      fontSize="1rem"
        bgColor="white"
        borderRadius="xl"
        shadow="lg"
        display="flex"
        flexDirection="column"
        justifyContent=""
        mt={5}
        mb={5}
        mx={3}
      >
        <MKBox
          variant="gradient"
          bgColor="info"
          coloredShadow="info"
          borderRadius="lg"
          p={1}
          pt={1.2}
          pb={1.2}
          mx={show ? 2 : 0}
          mt={-3}
          onClick={() => setShow(!show)}
        >
          <MKTypography variant="h5" color="white">
            {name}
            {show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </MKTypography>
        </MKBox>
        {/*hiding and unding div element*/}
        {show && (
          <>
            <MKBox
              pl={7}
              mt={2}
              sx={
                searchBar
                  ? {
                      maxHeight: "300px",
                      display: "block",
                      overflowX: "clip",
                      overflowY: "scroll",
                      "&::-webkit-scrollbar": {
                        width: "5px",
                        height: "5px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        borderRadius: "30px",
                        background: "#4D8CC9",
                      },
                    }
                  : "none"
              }
            >
              <MKBox width="100%" component="form" method="post" autocomplete="off">
                <Grid container ml={-2}>
                  <Grid item>
                    <h5>
                      <FormControl component="fieldset" variant="standard">
                        <FormGroup>
                          {searchBar && (
                            <Input
                              placeholder={placeholder}
                              onChange={inputHandler}
                            />
                          )}

                          {filteredData.map((option, index) => {
                            return (
                              <FormControlLabel
                                key={index.toString()}
                                control={
                                  <Checkbox
                                    checked={selected === option ? true : false}
                                    onChange={(e) => handleChange(e, option)}
                                  />
                                }
                                label={option.toUpperCase()}
                              />
                            );
                          })}
                        </FormGroup>
                      </FormControl>
                    </h5>
                  </Grid>
                </Grid>
              </MKBox>
            </MKBox>
          </>
        )}
      </MKBox>
    </div>
  );
}
export default Cards;
