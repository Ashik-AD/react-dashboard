import { useState } from "react";

const useTogglePassword = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const handleTogglePassword = () => setIsToggle((prevState) => !prevState);
  return { isToggle, handleTogglePassword } as const;
};
export default useTogglePassword;
