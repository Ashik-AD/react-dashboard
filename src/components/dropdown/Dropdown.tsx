import { createRef } from "react";
import useTheme from "../../theme/useTheme";
import Card from "../card/Card";

import DropDownWrapper from "./styled";

import DropDownProps from "./type";

const DropDown = <T extends unknown>({
  renderItem,
  data,
  label,
  extractKey,
  className,
  styles,
}: DropDownProps<T>) => {
  const {
    theme: { mode, skin },
  } = useTheme();
  const drpItemContainer = createRef<HTMLDivElement>();
  const drpBtn = createRef<HTMLDivElement>();
  window.addEventListener("click", (eve: any) => {
    if (!eve.target) {
      return;
    }
    const { classList } = eve.target;
    if (classList.contains("dropdown-btn")) {
      drpItemContainer.current?.classList.toggle("show");
    } else if (classList.contains("dropdown-item-nothing")) {
      return;
    } else {
      drpItemContainer.current?.classList.remove("show");
    }
  });
  drpBtn.current?.addEventListener(
    "click",
    () => {
      drpItemContainer.current?.classList.toggle("show");
    },
    false
  );
  return (
    <DropDownWrapper theme={{ mode, skin }}>
      <div className="drop-btn" ref={drpBtn}>
        {label}
      </div>
      <div
        className={`dropdown-items-container fadeIn ${
          className ? className : ""
        }`}
        ref={drpItemContainer}
        style={{ ...styles }}
      >
        <Card>
          <ul>
            {data.map((item) => (
              <li key={extractKey(item)} className="dropdown-item">
                {renderItem(item)}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </DropDownWrapper>
  );
};

export default DropDown;
