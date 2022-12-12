import { Icon } from "@iconify/react";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTogglePassword from "../../hooks/useTogglePassword";
import {
  Button,
  Checkbox,
  DividerWithLabel,
  IconButton,
  Text,
  TextField,
} from "../../ui";
import Box from "../box/Box";
import Form from "../form/Form";
import InputErrorMsg from "../user-profile/components/InputErrorMsg";
import AuthFormContainer from "./AuthFormContainer";
import ConnectionOptions from "./ConnectionOptions";
import FormHeading from "./FormHeading";

type Errors = "username" | "password" | "email";
export interface FormData {
  username: string;
  password: string;
  email: string;
}

interface SubmitForm {
  onSubmit: (formdata: FormData) => void;
}

const validEmail = (email: string) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
const validPassword = (password: string) =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
    password
  );

const validUsername = (value: string) => /^[A-Za-z0-9_]+$/.test(value);

const Register = ({ onSubmit }: SubmitForm) => {
  const { isToggle, handleTogglePassword } = useTogglePassword();
  const [isAgreeTnC, setIsAgreeTnC] = useState(false);

  const [inputs, setInputs] = useState<FormData>({
    email: "",
    password: "",
    username: "",
  });

  const [errors, setErrors] = useState<{
    email: string;
    password: string;
    username: string;
  }>({
    email: "",
    password: "",
    username: "",
  });

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInputs((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

  const handleError = useCallback(
    (key: Errors, message: string) =>
      setErrors((prevState) => ({ ...prevState, [key]: message })),
    []
  );
  const clearError = useCallback(
    (key: Errors) => setErrors((prevState) => ({ ...prevState, [key]: "" })),
    []
  );

  useEffect(() => {
    if (!inputs.password) return;
    const isValidPassword = validPassword(inputs.password);
    if (!isValidPassword) {
      handleError(
        "password",
        "Invalid password. Password must contains at least one capital, small letter, number & special character."
      );
      return;
    }
    clearError("password");
  }, [inputs.password]);

  useEffect(() => {
    if (!inputs.username) return;
    const isValidUsername = validUsername(inputs.username);
    if (!isValidUsername) {
      handleError("username", "Invalid username!");
      return;
    }
    clearError("username");
  }, [inputs.username]);

  const handleSubmit = useCallback(() => {
    const { username, password, email } = inputs;
    let hasError: boolean = false;
    if (!username) {
      hasError = true;
      handleError("username", "Please enter username");
    }

    if (!email) {
      hasError = true;
      handleError("email", "Please enter your email");
    }
    if (!password) {
      hasError = true;
      handleError("password", "Please enter your password");
    }
    if (hasError) {
      return false;
    }

    const isValideEmail = validEmail(inputs.email);
    if (!isValideEmail) {
      handleError("email", "Invalid email address. Please enter valid email!");
      return;
    }
    onSubmit({ ...inputs });
  }, []);
  return (
    <AuthFormContainer>
      <Form autcomplete="OFF" onSubmit={handleSubmit} preventDefault>
        <FormHeading
          title="Adventure starts here 🥳"
          subtitle="Make your app management easy and fun!"
        />
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          space={1}
          mb={28}
        >
          <Box display="block">
            <TextField
              type="text"
              name="username"
              label="Username"
              value={inputs.username}
              onChange={handleChangeInput}
              error={errors.username ? true : false}
            />
            {errors.username && <InputErrorMsg msg={errors.username} />}
          </Box>
          <Box>
            <TextField
              type="text"
              name="email"
              label="Email"
              value={inputs.email}
              onChange={handleChangeInput}
              error={errors.email ? true : false}
            />
            {errors.email && <InputErrorMsg msg={errors.email} />}
          </Box>
          <Box>
            <TextField
              type={!isToggle ? "password" : "text"}
              name="password"
              label="Password"
              value={inputs.password}
              onChange={handleChangeInput}
              error={errors.password ? true : false}
              endAdornment={
                <IconButton varient="text" onClick={handleTogglePassword}>
                  {isToggle ? (
                    <Icon icon="mdi:eye-outline" />
                  ) : (
                    <Icon icon="mdi:eyey-off-outline" />
                  )}
                </IconButton>
              }
            />
            {errors.password && <InputErrorMsg msg={errors.password} />}
          </Box>
          <Checkbox
            label={`I agree to privacy policy & terms`}
            checked={isAgreeTnC}
            onChange={() => setIsAgreeTnC((prevState) => !prevState)}
          />
          <Button type="submit">Sing up</Button>
        </Box>
      </Form>
      <Text varient="body2" align="center">
        Already have an account? <Link to="/auth/login/">Sign in instead</Link>
      </Text>
      <DividerWithLabel label="or" />
      <ConnectionOptions />
    </AuthFormContainer>
  );
};
export default Register;
