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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";
// import {  ScrollLink } from "react-scroll";

// @mui material components
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultNavbarDropdown({
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  collapse,
  ...rest
}) {
  const linkComponent = {
    component: "a",
    href,
    target: "_self",
    rel: "noreferrer",
  };

  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <>
    {/* {(name === "About Us" || name === "Services" || name === "Contact Us") || (localStorage.getItem("email")) ? */}
      <MKBox
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={light ? "white" : "dark"}
        opacity={light ? 1 : 0.6}
        sx={{ cursor: "pointer", userSelect: "none" }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        {/* <ScrollLink activeClass="active" smooth spy to="services" underline="none"color="dark"> */}
          <MKTypography
            variant="body1"
            lineHeight={1}
            color="inherit"
            sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
          >
            {icon}
          </MKTypography>
          <MKTypography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            color={light ? "white" : "dark"}
            sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
          >
            {name}
          </MKTypography>
          <MKTypography variant="body1" color={light ? "white" : "dark"} ml="auto">
            <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
              {collapse && "keyboard_arrow_down"}
            </Icon>
          </MKTypography>
        {/* </ScrollLink> */}
      </MKBox>
      {/* //     :" "
      // }   */}
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
    )
}

// Setting default values for the props of DefaultNavbarDropdown
DefaultNavbarDropdown.defaultProps = {
  children: false,
  collapseStatus: false,
  light: false,
  href: "",
  route: "",
};

// Typechecking props for the DefaultNavbarDropdown
DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
};

export default DefaultNavbarDropdown;
