import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { IconButton } from "../../ui";
import Box from "../box/Box";

const ConnectionOptions = () => {
  return (
    <Box display="flex" align="center" justify="center" wrap="wrap">
      <Link to="./">
        <IconButton varient="text" size={40} fontSize={26}>
          <Icon icon="mdi:facebook" color="#4267B2" />
        </IconButton>
      </Link>
      <Link to="./">
        <IconButton varient="text" size={40} fontSize={26}>
          <Icon icon="mdi:twitter" color="#1DA1F2" />
        </IconButton>
      </Link>
      <Link to="./">
        <IconButton varient="text" size={40} fontSize={26}>
          <Icon icon="mdi:github" />
        </IconButton>
      </Link>
      <Link to="./">
        <IconButton varient="text" size={40} fontSize={26}>
          <Icon icon="mdi:google" />
        </IconButton>
      </Link>
    </Box>
  );
};
export default ConnectionOptions;
