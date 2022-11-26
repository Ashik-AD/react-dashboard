import { createRef, useMemo, useState } from "react";
import { GridInnerContainer, GridItem } from "../layout";
import Card from "../card/Card";
import Box from "../box/Box";
import Form from "../form/Form";
import { Button, Select, SelectItem, Text, TextField } from "../../ui";
import Jenny from "../../image/jenny.png";
import InputErrorMsg from "./components/InputErrorMsg";

const permission = [
  {
    name: "Full Control",
    type: "full-control",
  },
  {
    name: "Modify",
    type: "modify",
  },
  {
    name: "Read Execute",
    type: "read-execute",
  },
  {
    name: "List folder contents",
    type: "list-folder-contents",
  },
  {
    name: "Read Only",
    type: "read-only",
  },
  {
    name: "Read Write",
    type: "read-write",
  },
];

const CreateAPIkey = () => {
  const [error, setError] = useState(false);
  const apikeyRef = createRef<HTMLInputElement>();
  const renderSelectItem = useMemo(() => {
    return permission.map((item) => (
      <SelectItem key={item.type} value={item.type} label={item.name} />
    ));
  }, []);

  const handleChangeKeyName = () => {
    if (apikeyRef.current?.value) {
      setError(false);
      return;
    }
    setError(true);
  };

  const handleSubmit = () => {
    if (!apikeyRef.current?.value) {
      setError(true);
    }
  };

  return (
    <Card padding="1.6rem" pb="0rem">
      <Box display="flex" flexDirection="column" space={1.2}>
        <Text heading="h6">Create an API key</Text>
        <GridInnerContainer spacing={1.6}>
          <GridItem xs={12} md={6}>
            <Form autcomplete="OFF" onSubmit={handleSubmit} preventDefault>
              <Box display="flex" flexDirection="column" space={1.6}>
                <Select width="100%" defaultValue="full-control">
                  {renderSelectItem}
                </Select>
                <Box display="flex" flexDirection="column">
                  <TextField
                    type="text"
                    name="APIkeyName"
                    label="Name The API Key"
                    placeholder="Ex: Cat & Mouse"
                    error={error}
                    ref={apikeyRef}
                    onChange={handleChangeKeyName}
                  />
                  {error ? (
                    <InputErrorMsg msg="Please enter API key name" />
                  ) : (
                    ""
                  )}
                </Box>
                <Button type="submit">Create Key</Button>
              </Box>
            </Form>
          </GridItem>
          <GridItem xs={12} md={6}>
            <Box display="flex" align="center" justify="center">
              <img src={Jenny} alt="jenny" height={250} />
            </Box>
          </GridItem>
        </GridInnerContainer>
      </Box>
    </Card>
  );
};
export default CreateAPIkey;
