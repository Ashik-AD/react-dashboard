import type { InputOptions } from "../type";
const InputLabelBorder = ({ varient }: Pick<InputOptions, "varient">) => {
  if (varient === "regular") return <></>;
  return <span className="input-border"></span>;
};

export default InputLabelBorder;
