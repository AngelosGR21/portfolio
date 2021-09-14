import ipTracker from "../images/IPTracker.png";
import portfolio from "../images/portfolio.png";
import swordShop from "../images/swordShop.png";

const data = [
  {
    name: "IP Address Tracker",
    github: "https://github.com/AngelosGR21/ip-address-tracker",
    liveWebsite: "https://angelosgr21.github.io/ip-address-tracker/",
    description:
      "Users should be able to introduce a domain/ipv4/ipv6 address and view the location, timezone and internet service provider. If no IP/domain was introduced or the address cannot be found it will automatically take your ip and display the details.",
    image: ipTracker,
    builtWith: ["React", "Material-UI"],
  },
  {
    name: "Portfolio",
    github: "https://github.com/AngelosGR21/portfolio",
    liveWebsite: "https://agrigoriu.netlify.app/",
    description:
      "The portfolio is the first project i started implementing Framer-Motion and styling more in-depth Material-UI components. ",
    image: portfolio,
    builtWith: ["React", "Material-UI", "Framer Motion", "EmailJS"],
  },
  {
    name: "Sword Shop",
    github: "https://github.com/AngelosGR21/anime-swords-shop",
    liveWebsite: "https://anime-swords-shop.herokuapp.com/",
    description:
      "Users should be able to add/remove items, as well as increase or decrement the number of items in the cart page. The app is hosted on heroku so please wait 1-2 minutes until it loads.",
    image: swordShop,
    builtWith: ["React", "Material-UI"],
  },
];

export default data;
