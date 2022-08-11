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

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

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
        <Route path="/filter/segmented" element={<Filter1 />} />
        <Route path="/filter/io" element={<Filter2 />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpBasic />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </ThemeProvider>
  );
}
