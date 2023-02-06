import { useEffect } from "react";

// react-router components
import { Routes, Route,Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";

// Material Kit 2 React routes
import routes from "routes";
import Filter1 from "New components/filter/filter1";
import Filter2 from "New components/filter/filter2";
import SignInPage from "layouts/pages/authentication/sign-in";
import SignUpBasic from "New components/singnup/singnup";
import AboutUs from "pages/LandingPages/AboutUs";
import Profile from "New components/profile/profile";
import Presentation from "pages/Presentation";
import PasswordReset from "pages/LandingPages/Password";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/filter/segmented" element={<Filter1/>} />
        <Route path="/filter/io" element={<Filter2 />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/change-password" element={<PasswordReset />} />
        <Route path="/signup" element={<SignUpBasic />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" component={<Profile />} />
        <Route path="/home" component={<Presentation />} exact="true"/>
        <Route path="*" component={<Navigate to="/home" />} />
        {/* <Route path="https://lidaverse.com/" component={<Navigate to="/home" />} /> */}
      </Routes>
    </ThemeProvider>
  );
}
