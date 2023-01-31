// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "LidaVerse",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "/about" },
        { name: "Contact Us", href: "#" },
        { name: "Terms & Conditions", href: "#" },
      ],
    },
    {
      name: "Contact Information",
      items: [
        { name: "Dr. Bharat Lohani", href: "mailto:blohani@iitk.ac.in" },
        { name: "Associate Professor", href: "mailto:blohani@iitk.ac.in" },
        { name: "Department of Civil Engineering", href: "mailto:blohani@iitk.ac.in" },
        { name: "Indian Institute of Technology Kanpur", href: "mailto:blohani@iitk.ac.in" },
        { name: "Kanpur-208016, INDIA.", href: "mailto:blohani@iitk.ac.in" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};
