// @mui material components
import Icon from "@mui/material/Icon";
// import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactsIcon from '@mui/icons-material/Contacts';
// import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Profile from "New components/profile/profile";
// import Filter1 from "New components/filter/filter1";
// import AboutUs from "pages/LandingPages/AboutUs";
 import Presentation from "pages/Presentation";
//  import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import Pricing from "New components/pricing/pricing";
// import Aboutpage from "pages/Presentation/componentpage/Aboutpage";
// import SignInBasic from "pages/LandingPages/SignIn";

const routes = [
  {
    // name: "Home",
    route: "/",
    // icon: <HomeIcon />,
    component: <Presentation />,
  },
  {
    // name: "Home",
    route: "/home",
    // icon: <HomeIcon />,
    component: <Presentation />,
  },
  {
    name: "About Us",
    route: "/about",
    icon: <InfoIcon />,
    component: <Presentation />,
  },
  {
    name: "Services",
    route: "#services",
    icon: <MiscellaneousServicesIcon />,
    // component: <Presentation />,
  },
  {
    name: "Contact Us",
    route: "#contactus",
    icon: <ContactsIcon />,
    // component: <Presentation />,
  },

   // const routes = [
  // {
  //   name: "data",
  //   route: "/siginin",
  //   icon: <FolderOpenOutlinedIcon />,
  //   component: <SignInBasic />,
  // },
  {
    name: "pricing",
    route: "/pricing",
    icon: <CurrencyRupeeIcon />,
    component: <Pricing />,
  },
  {
    name: "Profile",
    description: "User Profile",
    dropdown: true,
    icon: <Icon>person</Icon>,
    collapse: [
      {
        name: "User Details",
        route: "/profile/user",
        component: <Profile value="0" />,
      },
      {
        name: "Transaction Details",
        route: "/profile/transaction",
        component: <Profile value="1" />,
      },
      {
        name: "Download Details",
        route: "/profile/download",
        component: <Profile value="2" />,
      },
    ],
  },
];

export default routes;
