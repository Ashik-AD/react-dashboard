import styled from "styled-components";
import Box from "../../components/box/Box";
import useTheme from "../../theme/useTheme";
import { Text } from "../../ui";

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
          src={
            name === "dark"
              ? "https://i.ibb.co/z8Mx2v6/404-dark.png"
              : "https://i.ibb.co/wdsQ8YY/404-light.png"
          }
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
