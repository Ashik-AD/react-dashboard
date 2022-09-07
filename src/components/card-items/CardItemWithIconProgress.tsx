import { FC, ReactNode } from "react";
import { Text } from "../../ui";
import Box from "../box/Box";

const CardItemWithIconProgress: FC<Props> = (props) => {
  const { label, icon, progress, tag, total } = props;
  return (
    <Box display="flex" align="center" justify="space-between" px={20} mb={16}>
      <Box display="flex" align="center" space={0.8}>
        {icon && <Box display="flex">{icon}</Box>}
        <Box>
          <Text paragraph={true} weight="medium">
            {label}
          </Text>
          {tag && <Text size={12}>{tag}</Text>}
        </Box>
      </Box>
      <div style={{ minWidth: 75 }}>
        {total && (
          <Text
            size={15}
            paragraph={true}
            weight="bold"
            styles={{ marginBottom: 8 }}
          >
            {total}
          </Text>
        )}
        {progress}
      </div>
    </Box>
  );
};

export default CardItemWithIconProgress;

interface Props {
  icon?: ReactNode;
  label: string;
  tag?: string;
  progress: ReactNode;
  total?: string;
}
