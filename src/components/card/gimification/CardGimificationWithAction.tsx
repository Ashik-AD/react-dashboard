import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../../theme/useTheme";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import { GridContainer, GridItem } from "../../layout";
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
  const { theme } = useTheme();
  return (
    <Card>
      <Box display="flex" flexDirection="column" padding={20}>
        <Box>
          <Text heading="h6" styles={{ fontWeight: 600 }}>
            {greet}
          </Text>
          <Text varient="body2" secondary={true}>
            {message}
          </Text>
        </Box>
        <GridContainer>
          <GridItem xs={6}>
            <Box display="flex" flexDirection="column">
              <Text
                heading="h5"
                color={theme.primaryColor.color}
                styles={{ fontWeight: 600, marginTop: 12 }}
              >
                {total}
              </Text>
              <Text
                varient="body2"
                secondary={true}
                styles={{ marginBottom: 18 }}
              >
                {description}
              </Text>
              {actionHandler}
            </Box>
          </GridItem>
          <GridItem xs={6}>
            <Box display="flex" align="center" justify="center">
              <Image src={banner} {...bannerOption} />
            </Box>
          </GridItem>
        </GridContainer>
      </Box>
    </Card>
  );
};

interface Props {
  greet: string;
  message: string;
  stat: {
    total: number | string;
    description: string;
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
  z-index: 2;
`;

export default CardGimificationWithAction;
