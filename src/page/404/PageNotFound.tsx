import styled from "styled-components";
import Box from "../../components/box/Box";
import useTheme from "../../theme/useTheme";
import { Button, Text } from "../../ui";

const PageNotFound = () => {
  const {
    theme: {
      mode: { name },
    },
  } = useTheme();
  return (
    <StyledSection className="overflow-x-hidden">
      <Box
        display="flex"
        flexDirection="column"
        align="center"
        py={32}
        px={28}
        space={0.6}
      >
        <Text heading="h2">404</Text>
        <Text heading="h5" textTransform="capitalize">
          Page not found :(
        </Text>
        <Text varient="body1" align="center" paragraph secondary>
          We couldn't found the page you looking for.
        </Text>
      </Box>
      <Box display="flex" align="center" justify="center">
        <img
          src={`/src/image/404-${name === "dark" ? "dark" : "light"}.png`}
          alt="not found"
          className="banner"
        />
      </Box>
    </StyledSection>
  );
};
export default PageNotFound;

const StyledSection = styled("section")`
  @media (min-width: 0px) {
    .banner {
      height: 400px;
    }
  }
  @media (min-width: 600px) {
    .banner {
      height: 450px;
    }
  }
  @media (min-width: 900px) {
    .banner {
      height: 650px;
    }
  }
`;
