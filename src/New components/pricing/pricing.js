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
          p: 2 ,
          mx: { xs: 2, lg: 3 },
          mt: "-20%",
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKTypography variant="h2" color="text" sx={{display:"flex",justifyContent:"center",alignItem:"center"}}>
          Pricing
        </MKTypography>
        {/*card container*/}
        <Container
          sx={{
            display: "flex",
            justifyContent: "spaceAround",
            flexFlow:"wrap",
          }}
        >
          <Card
            sx={{
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              m: 3,
              flex:"1 1 150px",
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
              sx={{mb:3, ml: 10,mr:10 , position:"relative",right:25}}
            >
              Get Started
            </MKButton>
          </Card>
          <Card
            sx={{
              backgroundImage: `linear-gradient(to bottom left,#49a3f1, #1A73E8)`,
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              m: 3,
              flex:"1 1 150px",
            }}
          >
            <MKTypography variant="h5" sx={{ m: 3 , color:"#f0f2f5"}}>
              Professional
            </MKTypography>
            <MKTypography variant="h2" sx={{color:""}} ml={3}>
            ₹5000
            </MKTypography>
            <MKTypography
              variant="h5"
              sx={{ marginLeft: "25%" , color:"#f8f9fa"}}
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
              color="light"
              sx={{mb:3, ml: 10,mr:10 , position:"relative",right:25}}
            >
              Get Started
            </MKButton>
          </Card>
          <Card
            sx={{
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              m: 3,
              flex:"1 1 150px",
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
              sx={{mb:3, ml: 10,mr:10 , position:"relative",right:25}}
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
