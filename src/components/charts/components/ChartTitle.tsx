import Box from "../../box/Box";
import { Text } from "../../../ui";
const ChartTitle = ({title, subtitle}:{title: string; subtitle?: string;}) => (
    <Box display="flex" flexDirection="column" mb={16}>
        <Text heading="h6" textTransform="capitalize">{title}</Text>
        {
            subtitle ? 
            <Text varient="body2" secondary paragraph>{subtitle}</Text>
            : ""
        }
    </Box>
)
export default ChartTitle;