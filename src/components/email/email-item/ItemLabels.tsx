import { FC } from "react";
import Box from "../../box/Box";
import { Dot } from "../../../ui";
import { labelColors, MailLabelColor } from "../EmailNav";
const ItemLabels: FC<{ labels: Array<string> }> = ({ labels }) => (
  <Box display="flex" space={1}>
    {labels.map((label, idx) => (
      <Dot
        size="small"
        styles={{ height: 8, width: 8 }}
        color={labelColors[label.toLowerCase() as keyof MailLabelColor]}
        key={idx}
      />
    ))}
  </Box>
);
export default ItemLabels;
