import { FC } from "react";
import styled from "styled-components";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import checkForImage from "../../../utils/checkImage";
import getFileIcon from "./fileType";

const Attachments: FC<Props> = ({ value: attachments }) => {
  if (attachments.length < 0) return <></>;

  const renderAttachedItems = attachments.map((file) => {
    const isImage = checkForImage(file);
    if (isImage) {
      const fileName = file.split("/").pop();
      return (
        <Box
          key={file}
          display="flex"
          flexDirection="column"
          position="relative"
          className="attachment-media"
        >
          <div
            style={{
              backgroundImage: `url(${file})`,
            }}
            className="attachment-background"
          />
          <Text
            varient="body2"
            align="center"
            styles={{ position: "absolute", bottom: 0, width: "100%" }}
            classes="attchment-name"
          >
            {fileName}
          </Text>
        </Box>
      );
    }
    const extType = file.split(".").pop();
    return (
      <Box display="flex" align="center" key={file} space={0.6}>
        <Text size={24} skinColor>
          {getFileIcon(extType!)}
        </Text>
        <Text varient="caption" secondary>
          {file}
        </Text>
      </Box>
    );
  });
  return (
    <StyledAttachment
      padding={1}
      display="flex"
      flexDirection="column"
      space={1}
      mt={20}
    >
      <Text varient="body2" secondary>
        Attachments
      </Text>
      <Box display="flex" wrap="wrap" align="flex-end" space={0.8}>
        {renderAttachedItems}
      </Box>
    </StyledAttachment>
  );
};
export default Attachments;
interface Props {
  value: string[];
}

const StyledAttachment = styled(Box)`
  & .attachment-media > .attachment-background {
    height: 150px;
    width: 150px;
    background-position: center top;
    background-size: cover;
    border-radius: 8px;
    cursor: pointer;
  }

  & .attachment-media:hover > .attachment-background {
    opacity: 0.6;
    transition: 200ms;
  }
`;
