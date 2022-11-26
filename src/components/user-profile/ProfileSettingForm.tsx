import { createRef, FC } from "react";
import { Avatar, Button, TextField, Select, SelectItem, Text } from "../../ui";
import Box from "../box/Box";
import Card from "../card/Card";
import Form from "../form/Form";
import { GridInnerContainer, GridItem } from "../layout";
import type { ProfileSettings } from "./type/forms";

const ProfileSettingForm: FC<ProfileSettings> = (props) => {
  const fileRef = createRef<HTMLInputElement>();
  const avatarRef = createRef<HTMLImageElement>();

  const handleClickfile = () => {
    fileRef.current?.click();
  };
  const changeAvatar = () => {
    if (fileRef.current) {
      const { 0: file } = fileRef.current.files as any;
      if (avatarRef.current) {
        avatarRef.current.src = URL.createObjectURL(file);
      }
    }
  };
  const handleRestAvatar = () => {
    if (avatarRef.current && props.avatar) {
      avatarRef.current.src = props.avatar;
    }
  };
  return (
    <Card padding="1.4rem">
      <Form>
        <Box display="flex" space={1} align="center" mb={32}>
          {props.avatar ? (
            <Avatar
              src={props.avatar}
              alt="john doe"
              size={120}
              ref={avatarRef}
            />
          ) : (
            ""
          )}
          <Box display="flex" flexDirection="column" space={1}>
            <Box display="flex" wrap="wrap" space={1}>
              <input
                type="file"
                name="user_avatar"
                accept=".png, .jpeg, .jpg"
                ref={fileRef}
                onChange={changeAvatar}
                hidden
              />
              <Button onClick={handleClickfile}>Upload New Photo</Button>
              <Button varient="outlined" onClick={handleRestAvatar}>
                Reset
              </Button>
            </Box>
            <Text varient="caption" weight="medium" secondary paragraph>
              Allowed PNG or JPEG. Max size of 1024k.
            </Text>
          </Box>
        </Box>
        <GridInnerContainer spacing={1.4}>
          <GridItem xs={12} md={6}>
            <TextField
              type="text"
              name="firstName"
              label="First Name"
              placeholder="John"
              defaultValue={props.firstName}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <TextField
              type="text"
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              defaultValue={props.lastName}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <TextField
              type="text"
              name="email"
              label="Email"
              placeholder="john.doe@email.com"
              defaultValue={props.email}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <TextField
              type="text"
              name="organization"
              label="organization"
              placeholder="Vortex"
              defaultValue={props.organization}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <TextField
              type="number"
              name="phoneNumber"
              label="Phone Number"
              placeholder="(+977)-9824965817"
              defaultValue={props.phoneNumber}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <TextField
              type="text"
              name="address"
              label="Address"
              placeholder="322 st. north"
              defaultValue={props.address}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <TextField
              type="text"
              name="state"
              label="state"
              placeholder="Calfornia"
              defaultValue={props.state}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <TextField
              type="number"
              name="zipcode"
              label="Zip Code"
              placeholder="434233"
              defaultValue={props.zipcode}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <Select
              label="Country"
              width="100%"
              defaultValue={props.country || "nepal"}
            >
              <SelectItem label="Nepal" value="nepal" />
              <SelectItem label="Japan" value="japan" />
              <SelectItem label="Thailand" value="thailand" />
              <SelectItem label="Philippines" value="philippines" />
              <SelectItem label="Turkey" value="turkey" />
            </Select>
          </GridItem>
          <GridItem xs={12} md={6}>
            <Select
              label="Language"
              width="100%"
              defaultValue={props.language || "nepali"}
            >
              <SelectItem label="Nepali" value="nepali" />
              <SelectItem label="English" value="English" />
              <SelectItem label="Arabic" value="arabic" />
              <SelectItem label="German" value="german" />
            </Select>
          </GridItem>
          <GridItem xs={12} md={6}>
            <Select
              label="Currency"
              width="100%"
              defaultValue={props.currency || "NPR"}
            >
              <SelectItem label="NPR" value="npr" />
              <SelectItem label="USD" value="usd" />
              <SelectItem label="EUR" value="euro" />
              <SelectItem label="Pound" value="pound" />
              <SelectItem label="Bitcoin" value="bitcoin" />
              <SelectItem label="Dogecoin" value="dogecoin" />
            </Select>
          </GridItem>
          <GridItem xs={12}>
            <Box width="100%" display="flex" space={1.6}>
              <Button type="submit">Save Changes</Button>
              <Button
                varient="outlined"
                color="rgb(139 139 139)"
                // onClick={handleRestForm}
                type="reset"
              >
                Reset
              </Button>
            </Box>
          </GridItem>
        </GridInnerContainer>
      </Form>
    </Card>
  );
};
export default ProfileSettingForm;
