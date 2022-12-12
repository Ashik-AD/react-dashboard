import { FC, memo, useState } from "react";
import useTheme from "../../theme/useTheme";
import Card from "../card/Card";

import DropDownWrapper from "./styled";

import DropDownProps from "./type";

const DropDown: FC<DropDownProps> = ({
  data,
  label,
  className,
  styles,
  visible,
  dropdownId,
}) => {
  const [show, setShow] = useState(visible);

  const {
    theme: { mode, skin },
  } = useTheme();
  const showMenu = (eve: React.MouseEvent) => {
    eve.stopPropagation();
    setShow((prevState) => {
      document.addEventListener("click", handleCloseMenu);
      return !prevState;
    });
  };
  const handleCloseMenu = () => {
    setShow(() => {
      document.removeEventListener("click", handleCloseMenu);
      return false;
    });
  };
  return (
    <DropDownWrapper theme={{ mode, skin }}>
      <div className="drop-btn" onClick={showMenu}>
        {label}
      </div>
      <div
        className={`dropdown-items-container ${className ? className : ""} ${
          show ? "show" : "hide"
        }`}
        style={{ ...styles }}
      >
        <Card>
          <ul>
            {data.map((item, index) => (
              <li
                key={item.id ? item.id : index}
                className="dropdown-item body2"
                onClick={(eve) => {
                  eve.stopPropagation();
                  item.handler && item.handler(eve);
                  setShow(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </DropDownWrapper>
  );
};

export default memo(DropDown);
