import React, { useCallback, useEffect, useState } from "react";
import { Button, Text, TextField } from "../../ui";
import Card from "../card/Card";
import Form from "../form/Form";
import { GridInnerContainer, GridItem } from "../layout";
import PasswordRequirement from "./components/change-password/PasswordRequirement";
import TogglePasswordVisibility from "./components/change-password/TogglePasswordVisibility";
import InputErrorMsg from "./components/InputErrorMsg";
import { PasswordErrors, PwdSwitch } from "./type/forms";

const pwdRegx =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const ChangePassword = () => {
  const [pwds, setPwds] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [togglePwd, setTogglePwd] = useState<Record<PwdSwitch, boolean>>({
    P1: false,
    P2: false,
    P3: false,
  });

  const handleChangePwdVisibility = useCallback((fieldId: PwdSwitch) => {
    setTogglePwd((prevState) => ({
      ...prevState,
      [fieldId]: !prevState[fieldId],
    }));
  }, []);

  const handleChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setPwds((prevState) => ({ ...prevState, [name]: value }));
    },
    []
  );

  const handleError = useCallback((key: PasswordErrors, msg: string) => {
    setErrors((prevState) => ({ ...prevState, [key]: msg }));
  }, []);

  const clearError = useCallback((key: PasswordErrors) => {
    setErrors((prevState) => ({ ...prevState, [key]: "" }));
  }, []);

  const handleReset = useCallback(() => {
    setPwds({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setErrors({ currentPassword: "", newPassword: "", confirmPassword: "" });
  }, []);

  useEffect(() => {
    if (pwds.newPassword.length >= 8) {
      if (!pwds.newPassword.match(pwdRegx)) {
        handleError(
          "newPassword",
          "Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character"
        );
        return;
      }
      clearError("newPassword");
    }
  }, [pwds.newPassword]);

  useEffect(() => {
    if (pwds.newPassword !== pwds.confirmPassword) {
      handleError("confirmPassword", "Passwrod Must match to new password");
      return;
    }
    clearError("confirmPassword");
  }, [pwds.confirmPassword]);

  const handleSubmit = useCallback(() => {
    const { currentPassword, newPassword, confirmPassword } = pwds;
    if (!currentPassword) {
      handleError(
        "currentPassword",
        "Current passwrod must be at least 8 characters"
      );
    }
    if (!newPassword) {
      handleError("newPassword", "New password must be at least 8 characters");
    }
    if (!confirmPassword) {
      handleError("confirmPassword", "Confirm password is required field");
    }

    if (
      errors.currentPassword ||
      errors.newPassword ||
      errors.confirmPassword
    ) {
      return false;
    }
  }, []);

  return (
    <Card padding="1.4rem">
      <Text heading="h6" styles={{ marginBottom: 26 }}>
        Change Password
      </Text>
      <Form autcomplete="OFF" onSubmit={handleSubmit} preventDefault>
        <GridInnerContainer spacing={1.6}>
          <GridItem xs={12} md={6}>
            <TextField
              name="currentPassword"
              type={togglePwd.P1 ? "text" : "password"}
              value={pwds.currentPassword}
              onChange={handleChangePassword}
              endAdornment={
                <TogglePasswordVisibility
                  id="P1"
                  isSwitch={togglePwd.P1}
                  handleTogglePwd={handleChangePwdVisibility}
                />
              }
              label="Current Password"
              error={errors.currentPassword ? true : false}
            />
            {errors.currentPassword ? (
              <InputErrorMsg msg={errors.currentPassword} />
            ) : (
              ""
            )}
          </GridItem>
          <GridItem xs={12} md={6}>
            <TextField
              name="newPassword"
              type={togglePwd.P2 ? "text" : "password"}
              value={pwds.newPassword}
              onChange={handleChangePassword}
              label="New Password"
              endAdornment={
                <TogglePasswordVisibility
                  id="P2"
                  isSwitch={togglePwd.P2}
                  handleTogglePwd={handleChangePwdVisibility}
                />
              }
              error={errors.newPassword ? true : false}
            />
            {errors.newPassword ? (
              <InputErrorMsg msg={errors.newPassword} />
            ) : (
              ""
            )}
          </GridItem>
          <GridItem xs={12} md={6}>
            <TextField
              name="confirmPassword"
              type={togglePwd.P3 ? "text" : "password"}
              value={pwds.confirmPassword}
              onChange={handleChangePassword}
              label="Confirm New Password"
              endAdornment={
                <TogglePasswordVisibility
                  id="P3"
                  isSwitch={togglePwd.P3}
                  handleTogglePwd={handleChangePwdVisibility}
                />
              }
              error={errors.confirmPassword ? true : false}
            />
            {errors.confirmPassword ? (
              <InputErrorMsg msg={errors.confirmPassword} />
            ) : (
              ""
            )}
          </GridItem>
          <GridItem xs={12}>
            <PasswordRequirement />
          </GridItem>
          <GridItem xs={12}>
            <Button type="submit">Save changes</Button>
            <Button
              type="reset"
              varient="outlined"
              styles={{ marginLeft: 12 }}
              onClick={handleReset}
            >
              reset
            </Button>
          </GridItem>
        </GridInnerContainer>
      </Form>
    </Card>
  );
};
export default ChangePassword;
