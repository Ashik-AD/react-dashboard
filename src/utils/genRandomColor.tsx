import { colorPallets } from "../theme/colors";

const genRandomColor = () =>
  colorPallets[Math.ceil(Math.random() * colorPallets.length - 1)].color;

export default genRandomColor;
