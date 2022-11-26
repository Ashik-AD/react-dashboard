import { FC, useRef, useState } from "react";
import Form from "../form/Form";
import Box from "../box/Box";
import { Text, TextField, Button } from "../../ui";
import InputErrorMsg from "../user-profile/components/InputErrorMsg";

const OneTimePassword: FC<Props> = ({ handleCancel, handleSubmit, value }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (inputRef.current) {
      if (!inputRef.current.value) {
        setError(true);
        return;
      }
      handleSubmit(+inputRef.current?.value);
    }
  };
  return (
    <Form method="POST" onSubmit={onSubmit} preventDefault>
      <Box
        display="flex"
        flexDirection="column"
        justify="center"
        align="center"
        className="content"
        padding={16}
      >
        <Text
          heading="h5"
          textTransform="capitalize"
          align="center"
          styles={{ margin: "1.2rem 0" }}
        >
          Enable one time password
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          px={8}
          pb={8}
          pt={21}
          space={0.6}
        >
          <Text heading="h6">Verify Your Mobile Number for SMS</Text>
          <Text varient="body2" styles={{ marginBottom: 8 }} secondary>
            Enter your mobile number with country code and we send you a
            verification code.
          </Text>
          <TextField
            type="number"
            name="contactNo"
            defaultValue={value}
            ref={inputRef}
            label="Mobile number with country code"
            error={error}
          />
          {error ? (
            <InputErrorMsg msg="Please enter a valid phone number" />
          ) : (
            ""
          )}
          <Box
            width="100%"
            display="flex"
            justify="flex-end"
            space={0.8}
            mt={12}
          >
            <Button
              varient="outlined"
              color="rgb(211 211 211)"
              styles={{ opacity: 0.5 }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button type="submit">Send</Button>
          </Box>
        </Box>
      </Box>
    </Form>
  );
};
export default OneTimePassword;

interface Props {
  handleSubmit: (value?: number) => void;
  handleCancel: () => void;
  value?: number | "";
}
