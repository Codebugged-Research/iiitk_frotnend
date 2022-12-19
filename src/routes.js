// @mui material components
import Profile from "New components/profile/profile";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactsIcon from "@mui/icons-material/Contacts";
import Presentation from "pages/Presentation";
import { Person } from "@mui/icons-material";

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
  localStorage.getItem("email")
    ? {
        name: "Profile",
        description: "User Profile",
        dropdown: true,
        icon: <Person />,
        collapse: [
          {
            name: "User Details",
            route: "/profile/user",
            component: <Profile value="0" />,
          },
          {
            name: "Download Details",
            route: "/profile/download",
            component: <Profile value="2" />,
          },
        ],
      }
    : {},
];

export default routes;
