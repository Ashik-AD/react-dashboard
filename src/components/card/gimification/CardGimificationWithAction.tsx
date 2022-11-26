import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../Card";

const CardGimificationWithAction: FC<Props> = (props) => {
  const {
    greet,
    message,
    stat: { total, description },
    actionHandler,
    banner,
    bannerOption,
  } = props;
  return (
    <Card className="overflow-unset-important">
      <Box display="flex" flexDirection="column" padding={20}>
        <Text heading="h6" weight="medium">
          {greet}
        </Text>
        <Text varient="body2" secondary paragraph>
          {message}
        </Text>
        <Box width="100%" position="relative">
          <Text
            heading="h5"
            weight="medium"
            styles={{ margin: `12px 0` }}
            skinColor
          >
            {total}
          </Text>
          <Text varient="body2" secondary styles={{ marginBottom: 18 }}>
            {description}
          </Text>
          {actionHandler}
          <Image src={banner} {...bannerOption} />
        </Box>
      </Box>
    </Card>
  );
};

interface Props {
  greet: string;
  message: string;
  stat: {
    total: number | string;
    description?: string;
  };
  banner: string;
  bannerOption?: BannerOptions;
  actionHandler?: ReactNode;
}

interface BannerOptions {
  height?: string;
  width?: string;
  position?: "absolute" | "relative";
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

const Image = styled("img")<BannerOptions>`
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && `{height}`};
  position ${({ position }) => (position ? position : "relative")};
  top: ${({ top }) => top && `${top}px`};
  right: ${({ right }) => right && `${right}px`};
  bottom: ${({ bottom }) => bottom && `${bottom}px`};
  left: ${({ left }) => left && `${left}px`};
  object-fit: contain;
`;

export default CardGimificationWithAction;
