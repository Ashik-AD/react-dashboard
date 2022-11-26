import { FC, ReactNode } from "react";
import { Text } from "../../ui";
import Box from "../box/Box";

const CardItemWithIconProgress: FC<Props> = (props) => {
  const { label, icon, progress, tag, total } = props;
  return (
    <Box display="flex" align="center" px={20} mb={16} space={0.8}>
      {icon && <Box display="flex">{icon}</Box>}
      <Box
        display="flex"
        align="center"
        justify="space-between"
        wrap="wrap"
        flex={1}
      >
        <Box>
          <Text weight="medium" paragraph>
            {label}
          </Text>
          {tag && <Text size={12}>{tag}</Text>}
        </Box>
        <Box style={{ minWidth: 75 }}>
          {total && (
            <Text
              size={15}
              weight="bold"
              styles={{ marginBottom: 8 }}
              paragraph
            >
              {total}
            </Text>
          )}
          {progress}
        </Box>
      </Box>
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
