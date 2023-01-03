import React, { FC, ReactNode, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useTogglePassword from "../../hooks/useTogglePassword";
import {
  Alert,
  Button,
  Checkbox,
  DividerWithLabel,
  IconButton,
  Text,
  TextField,
} from "../../ui";
import Box from "../box/Box";
import Form from "../form/Form";
import AuthFormContainer from "./AuthFormContainer";
import ConnectionOptions from "./ConnectionOptions";
import FormHeading from "./FormHeading";

export interface LoginFormData {
  email: string;
  password: string;
  remember?: boolean;
}

interface Props {
  onSubmit: (inputs: LoginFormData) => void;
  hyperComponent?: ReactNode;
}

const Login: FC<Props> = ({ onSubmit, hyperComponent }) => {
  const { isToggle, handleTogglePassword } = useTogglePassword();
  const [inputs, setInputs] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [isRemember, setIsRemember] = useState(false);
  const [error, setError] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = () => {
    const { email, password } = inputs;
    if (!email || !password) {
      setError("Please enter email & password");
      return;
    }
    if (email.toLowerCase() !== "admin@triolo.com" || password !== "admin123") {
      setError(
        "Invalid email or password. Please enter valid email & password."
      );
      return;
    }
    onSubmit({
      email,
      password,
      remember: isRemember,
    });
    setError("");
  };

  useEffect(() => {
    return () => {
      setIsRemember(false);
    };
  }, []);

  return (
    <AuthFormContainer>
      <Box width="100%" mb={20}>
        <Form onSubmit={handleSubmit} preventDefault>
          <FormHeading
            title="Welcome to Triolo"
            subtitle="Please sign-in to your account and start the adventure"
          />
          {hyperComponent}
          <Box display="flex" flexDirection="column" space={1}>
            {error && (
              <Alert severity="error" alertTitle="Authentication Failure!">
                {error}
              </Alert>
            )}
            <TextField
              type="text"
              name="email"
              label="Email"
              value={inputs.email}
              onChange={handleChangeInput}
            />
            <Box>
              <TextField
                type={!isToggle ? "password" : "text"}
                name="password"
                label="password"
                value={inputs.password}
                onChange={handleChangeInput}
                endAdornment={
                  <IconButton
                    onClick={handleTogglePassword}
                    varient="text"
                    size={38}
                    fontSize={20}
                    contentOpacity={6}
                    styles={{ right: 8 }}
                  >
                    {isToggle ? (
                      <Icon icon="mdi:eye-outline" />
                    ) : (
                      <Icon icon="mdi:eye-off-outline" />
                    )}
                  </IconButton>
                }
              />
              <Box display="flex" align="center" justify="space-between">
                <Checkbox
                  label="Remember Me"
                  checked={isRemember}
                  onChange={() => setIsRemember((prevState) => !prevState)}
                />

                <Link to="../forget-password/" className="body2">
                  Forget Password?
                </Link>
              </Box>
            </Box>
            <Button type="submit">login</Button>
          </Box>
        </Form>
      </Box>
      <Box mb={20}>
        <Text varient="body2" align="center" secondary paragraph>
          New on platform?{" "}
          <Link to="/auth/register/" className="text-primary">
            Create an account
          </Link>
        </Text>
      </Box>
      <DividerWithLabel label="Or" />
      <ConnectionOptions />
    </AuthFormContainer>
  );
};
export default Login;
