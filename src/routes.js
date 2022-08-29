// @mui material components
import Icon from "@mui/material/Icon";
import HomeIcon from '@mui/icons-material/Home';
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Profile from "New components/profile/profile";
import Filter1 from "New components/filter/filter1";
import Presentation from "pages/Presentation";
import Pricing from "New components/pricing/pricing";

const routes = [
  {
    name: "Home",
    route: "/home",
    icon: <HomeIcon />,
    component: <Presentation />,
  },
  {
    name: "data",
    route: "/filter/segmented",
    icon: <FolderOpenOutlinedIcon />,
    component: <Filter1 />,
  },
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
