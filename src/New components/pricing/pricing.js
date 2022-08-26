import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import MKTypography from "components/MKTypography";
import { Container } from "@mui/material";
import MKButton from "components/MKButton";
/* eslint-disable */
function Pricing() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route1: "/signin",
          route2: "/signup",
          label1: "Login",
          label2: "Sign up",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
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
          display: "grid",
          placeItems: "center",
        }}
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: "-20%",
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKTypography variant="h2" color="text">
          Pricing
        </MKTypography>
        {/*card container*/}
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItemsL: "center",
          }}
        >
          <Card
            sx={{
              width: "25%",
              boxShadow: ({ boxShadows: { l } }) => l,
              mr: 5,
            }}
          >
            <MKTypography variant="h5" color="text" sx={{ m: 3 }}>
              Basic
            </MKTypography>
            <MKTypography variant="h2" color="dark" ml={3}>
              Free
            </MKTypography>
            <MKTypography
              variant="h5"
              color="text"
              sx={{ marginLeft: "25%" }}
              mb={3}
              mt={3}
            >
              <ul>
                <li>download</li>
                <li>download</li>
                <li>download</li>
                <li>download</li>
                <li>download</li>
              </ul>
            </MKTypography>
            <MKButton
              variant="gradient"
              height="fit-content"
              width="fit-content"
              color="info"
              sx={{ mt: 2,mb:4, ml: 10,mr:10 , position:"relative",right:25}}
            >
              Get Started
            </MKButton>
          </Card>
          <Card
            sx={{
              width: "25%",
              backgroundColor:"primary",
              boxShadow: ({ boxShadows: { l } }) => l,
              mr: 5,
            }}
          >
            <MKTypography variant="h5" color="text" sx={{ m: 3 }}>
              Professional
            </MKTypography>
            <MKTypography variant="h2" color="dark" ml={3}>
            ₹5000
            </MKTypography>
            <MKTypography
              variant="h5"
              color="text"
              sx={{ marginLeft: "25%" }}
              mb={3}
              mt={3}
            >
              <ul>
                <li>download</li>
                <li>download</li>
                <li>download</li>
                <li>download</li>
                <li>download</li>
              </ul>
            </MKTypography>
            <MKButton
              variant="gradient"
              height="fit-content"
              width="fit-content"
              color="info"
              sx={{ mt: 2,mb:4, ml: 10,mr:10 , position:"relative",right:25}}
            >
              Get Started
            </MKButton>
          </Card>
          <Card
            sx={{
              width: "25%",
              boxShadow: ({ boxShadows: { l } }) => l,
              mr: 5,
            }}
          >
            <MKTypography variant="h5" color="text" sx={{ m: 3 }}>
              Team
            </MKTypography>
            <MKTypography variant="h2" color="dark" ml={3}>
            ₹2500
            </MKTypography>
            <MKTypography
              variant="h5"
              color="text"
              sx={{ marginLeft: "25%" }}
              mb={3}
              mt={3}
            >
              <ul>
                <li>download</li>
                <li>download</li>
                <li>download</li>
                <li>download</li>
                <li>download</li>
              </ul>
            </MKTypography>
            <MKButton
              variant="gradient"
              height="fit-content"
              width="fit-content"
              color="info"
              sx={{ mt: 2,mb:4, ml: 10,mr:10 , position:"relative",right:25}}
            >
              Get Started
            </MKButton>
          </Card>

        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Pricing;
