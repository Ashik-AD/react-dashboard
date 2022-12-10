import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import { Button, Text } from "../../ui";
import genColorShades from "../../utils/genColorShades";
import CardContent from "../card/CardContent";
import { GridInnerContainer, GridItem } from "../layout";

const TrialBanner = () => {
  const {
    theme: {
      primaryColor: { color },
    },
  } = useTheme();
  return (
    <CardContent
      style={{
        backgroundColor: `${genColorShades(color, {
          total: 1,
          intensity: 1,
        })}`,
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
      }}
    >
      <StyledGridContainer rowSpacing={1} direction="column-reverse">
        <GridItem xs={12} md={8}>
          <Text heading="h5" skinColor>
            Still not convinced? Start with a 14-day FREE trial!
          </Text>
          <Text
            varient="body1"
            styles={{ margin: "0.6rem 0 1.6rem 0" }}
            paragraph
            secondary
          >
            You will get full access to with all the features for 14 days.
          </Text>
          <Button>Start 14-day free trial</Button>
        </GridItem>
        <GridItem xs={12} md={4}>
          <img
            src="https://i.ibb.co/7NwgRc8/saly.png"
            alt="saly"
            className="trial__banner_img"
          />
        </GridItem>
      </StyledGridContainer>
    </CardContent>
  );
};
export default TrialBanner;

const StyledGridContainer = styled(GridInnerContainer)`
  @media (min-width: 600px) {
    flex-direction: column;
  }
  & .trial__banner_img {
    bottom: 0;
    width: 100%;
    @media (min-width: 600px) {
      position: absolute;
      width: auto;
      right: 0;
    }
  }
`;
