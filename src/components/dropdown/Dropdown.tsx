import { FC, memo, useEffect, useState } from "react";
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
  useEffect(() => {
    window.addEventListener("click", windowHandler);
    return () => {
      window.removeEventListener("click", windowHandler);
    };
  }, []);
  const windowHandler = (eve: any) => {
    if (!eve.target.classList.contains(dropdownId)) {
      setShow(false);
    }
  };
  return (
    <DropDownWrapper theme={{ mode, skin }}>
      <div
        className="drop-btn"
        onClick={(eve) => {
          eve.stopPropagation();
          document
            .querySelectorAll(".dropdown-items-container")
            .forEach((el) => el.classList.replace("show", "hide"));
          setShow((prevShow) => !prevShow);
        }}
      >
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
