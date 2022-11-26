import { useState } from "react";
import { Button, Checkbox, Text, TextField } from "../../../ui";
import Box from "../../box/Box";
import ColorBox from "../../box/ColorBox";
import Card from "../../card/Card";
import { GridInnerContainer, GridItem } from "../../layout";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPwd = () => setShowPassword((prevState) => !prevState);
  return (
    <Card padding="1.4rem">
      <Box display="flex" flexDirection="column" space={1.6}>
        <Text heading="h6">Change Password</Text>
        <ColorBox
          color="warning"
          transparency={1}
          padding={16}
          border={{ radius: `0.5rem`, show: true, size: "0px" }}
        >
          <Text
            varient="body1"
            weight="bold"
            color="warning"
            lineHeight="30px"
            paragraph
          >
            Ensure that these requirements are met
          </Text>
          <Text varient="body2" color="warning" paragraph>
            Minimum 8 characters long, uppercase & symbol
          </Text>
        </ColorBox>
        <Box>
          <GridInnerContainer
            columnSpacing={1.6}
            rowSpacing={{ xs: 1, md: 0.4 }}
          >
            <GridItem xs={12} md={6}>
              <TextField
                type={!showPassword ? "password" : "text"}
                name="new_passwrod"
                label="New Password"
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                type={!showPassword ? "password" : "text"}
                name="con_passwrod"
                label="Confirm New Password"
              />
            </GridItem>
          </GridInnerContainer>
          <Checkbox
            label={`${showPassword ? "Hide" : "Show"} Password`}
            onChange={handleToggleShowPwd}
            checked={showPassword}
          />
          <Button styles={{ marginTop: 8, display: "flex" }}>
            Change password
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
export default ChangePassword;
