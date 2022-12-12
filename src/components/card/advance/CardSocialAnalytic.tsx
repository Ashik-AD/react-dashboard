import { Icon } from "@iconify/react";
import { CustomAvatar } from "../../../ui";
import genRandomColor from "../../../utils/genRandomColor";
import Box from "../../box/Box";
import CardItemAnalyticsWithIcon from "../../card-items/CardItemAnalyticsWithIcon";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";

const data = [
  {
    icon: <Icon icon="bi:chat-square-heart-fill" />,
    total: "42.8k",
    slug: "Number of like",
  },
  {
    icon: <Icon icon="ri:account-pin-circle-fill" />,
    total: "21.2k",
    slug: "Number of Followers",
  },
  {
    icon: <Icon icon="material-symbols:comment-rounded" />,
    total: "2.4k",
    slug: "Number of Comments",
  },
  {
    icon: <Icon icon="ic:sharp-person-pin-circle" />,
    total: "389.50k",
    slug: "Number of Visits",
  },
];

const CardSocialAnalytic = () => {
  const renderData = data.map((item, index) => (
    <CardItemAnalyticsWithIcon
      key={index}
      icon={
        <CustomAvatar
          fontSize={21}
          size={40}
          skin="light"
          color={genRandomColor()}
        >
          {item.icon}
        </CustomAvatar>
      }
      label={item.total}
      tag={item.slug}
    />
  ));
  return (
    <Card>
      <CardTitle title="Social Analytics" />
      <Box display="flex" flexDirection="column">
        {renderData}
      </Box>
    </Card>
  );
};

export default CardSocialAnalytic;
