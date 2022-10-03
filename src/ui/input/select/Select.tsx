import { ArrowDropDown } from "@mui/icons-material";
import {
  createContext,
  FC,
  ReactNode,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import useTheme from "../../../theme/useTheme";
import { InputVarient } from "../type";
import StyledSelectWrapper, { StyledSelectButton } from "./styled";

interface DefaultProps {
  handleOnChange: (value: string, name: string) => void;
  currentSelection: string;
}
interface SelectProp {
  label: string;
  defaultValue: string;
  classes?: string;
  selectId?: string;
  children: ReactNode;
  onChange?: (value: string, name?: string) => void;
  varient?: InputVarient;
  labelWidth?: string;
  width?: string;
  sizes?: "small" | "normal";
}
const SelectCtx = createContext<DefaultProps | undefined>(undefined);
const Select: FC<SelectProp> = (props) => {
  const {
    theme: { mode, primaryColor },
  } = useTheme();
  const {
    label,
    defaultValue,
    classes,
    selectId,
    children,
    onChange,
    varient,
    labelWidth,
    sizes,
    width,
  } = props;
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    label: "",
    value: "",
  });
  const handleSelectOpen = (eve: SyntheticEvent) => {
    eve.preventDefault();
    eve.stopPropagation();
    setSelectOpen(() => {
      document.addEventListener("click", handleClose);
      return true;
    });
  };
  const HandleOnChange = (value: string, label: string) => {
    setSelectedItem({ value, label });
    onChange && onChange(value, label);
  };

  const handleClose = () => {
    setSelectOpen((prevState) => {
      if (prevState) {
        document.removeEventListener("click", handleClose);
      }
      return false;
    });
  };

  const itemListShow = selectOpen ? "show-select-item" : "";
  return (
    <StyledSelectWrapper
      theme={{ mode, primaryColor }}
      varient={varient}
      className={classes ? classes : ""}
      id={selectId ? selectId : ""}
      width={width}
      sizes={sizes}
    >
      <div
        onClick={handleSelectOpen}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <StyledSelectButton
          theme={{ mode, primaryColor }}
          as="div"
          className={`select-button input-button`}
          varient={varient}
          role="select"
          width={labelWidth}
          sizes={sizes}
        >
          {selectedItem.label || defaultValue}
        </StyledSelectButton>
        <span
          className={`input-label floating-label select-label ${
            selectOpen || defaultValue || selectedItem.value
              ? "floating-label-top"
              : ""
          }`}
        >
          {label}
        </span>
        <ArrowDropDown
          className={`select-status-arrow ${
            selectOpen ? "rotateUp" : "rotateDown"
          }`}
        />
        {(varient === "standard" || varient === "filled") && (
          <span
            className={`input-border ${
              selectOpen ? "active-border-transition" : ""
            }`}
          ></span>
        )}
      </div>

      <SelectCtx.Provider
        value={{
          handleOnChange: HandleOnChange,
          currentSelection: selectedItem.value,
        }}
      >
        <ul className={`select-list-container ${itemListShow}`}>{children}</ul>
      </SelectCtx.Provider>
    </StyledSelectWrapper>
  );
};
export default Select;

export const SelectItem: FC<SelectItemProps> = ({
  label,
  value,
  textAlign,
}) => {
  const han = useContext(SelectCtx);
  return (
    <li
      onClick={() => han?.handleOnChange(value, label)}
      role="option"
      value={value}
      aria-label={label}
      className={`select-option-item ${
        han?.currentSelection === value ? "selected-item" : ""
      }`}
      style={textAlign ? { textAlign } : {}}
    >
      {label}
    </li>
  );
};

interface SelectItemProps {
  label: string;
  value: string;
  textAlign?: "center" | "left" | "right";
}