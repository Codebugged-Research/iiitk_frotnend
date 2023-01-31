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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

function DefaultFooter({ content }) {
  const { brand, socials, menus } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={1} mb={10}>
          <Grid item xs={12} md={1}  sx={{ ml: "auto", mb: 1 }}>
            <MKBox>
              <Link to={brand.route}>
                <MKBox
                  component="img"
                  src={brand.image}
                  alt={brand.name}
                  maxWidth="2.5rem"
                />
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={2} mb={1} >
              <MKTypography variant="h5">{brand.name}</MKTypography>
          </Grid>
          <Grid item xs={12} md={3.5} mb={1} alignItems="center">
            <MKBox ml={0}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
            </Grid>
            <Grid item xs={10} md={3.5} >
                <MKInput type="email" label="Email..." fullWidth />
              </Grid>
            <Grid item xs={12} md={2}  >
               <MKButton variant="gradient" color="info" sx={{ height: "20%" , mb:2}}>
                Subscribe
               </MKButton>
             </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={12} md={5} sx={{ mt: 2 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_self"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          {/* <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;