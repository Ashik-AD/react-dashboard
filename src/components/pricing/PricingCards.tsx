import { useState } from "react";
import { Button, Chip, Toggle } from "../../ui";
import Box from "../box/Box";
import { GridInnerContainer, GridItem } from "../layout";
import PriceCardFeatures from "./components/PriceCardFeatures";
import PriceCardHeader from "./components/PriceCardHeader";
import PriceCardTags from "./components/PriceCardTags";
import PriceTag from "./components/PriceTag";
import PricingCard from "./PricingCard";

const PricingCards = () => {
  const [showAnnually, setShowAnnually] = useState<boolean>(true);

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box
        display="flex"
        align="center"
        justify="center"
        className="toggle__annual_subscription"
        mb={34}
      >
        <Toggle
          onToggle={() => setShowAnnually((prevState) => !prevState)}
          toggled={showAnnually}
          label2="Monthly"
          label="Annually"
        />
      </Box>
      <GridInnerContainer spacing={1.6}>
        <GridItem xs={12} md={4}>
          {/* Basic Plan */}
          <PricingCard
            action={
              <Button varient="outlined" width="100%">
                your current plan
              </Button>
            }
          >
            <PriceCardHeader
              icon="/src/image/basic.png"
              cardTitle="Basic"
              cardSlug="A simple start for everyone"
            />
            <PriceTag price={0} type="month" />
            <PriceCardFeatures
              list={[
                "1000 response a month",
                "Unlimited forms and surveyes",
                "Unlimited fields",
                "Basic form creation tools",
                "Up to 2 subdomains",
              ]}
            />
          </PricingCard>
        </GridItem>

        <GridItem xs={12} md={4}>
          {/* Standard Plan */}
          <PricingCard
            borderColor="skin"
            action={<Button width="100%">Upgrade</Button>}
          >
            <PriceCardTags>
              <Chip
                label="Popular"
                skin="light"
                size="small"
                styles={{ fontWeight: 600 }}
              />
            </PriceCardTags>
            <PriceCardHeader
              icon="/src/image/standard.png"
              cardTitle="Standard"
              cardSlug="For small to medium businesses"
            />
            <PriceTag
              price={showAnnually ? 40 : 49}
              type="month"
              slug={showAnnually ? "USD 480/year" : ""}
            />
            <PriceCardFeatures
              list={[
                "1000 response a month",
                "Unlimited forms and surveyes",
                "UInstagram profile page",
                "Google Docs integration",
                "Custom “Thank you” page",
              ]}
            />
          </PricingCard>
        </GridItem>

        <GridItem xs={12} md={4}>
          {/* Enterprise Plan */}
          <PricingCard
            action={
              <Button varient="outlined" width="100%">
                Upgrade
              </Button>
            }
          >
            <PriceCardHeader
              icon="/src/image/enterprise.png"
              cardTitle="Enterprise"
              cardSlug="Solution for big organizations"
            />
            <PriceTag
              price={showAnnually ? 80 : 99}
              type="month"
              slug={showAnnually ? "USD 960/year" : ""}
            />

            <PriceCardFeatures
              list={[
                "PayPal payments",
                "PayPal payments",
                "File upload with 5GB storage",
                "Custom domain support",
                "Stripe integration",
              ]}
            />
          </PricingCard>
        </GridItem>
      </GridInnerContainer>
    </Box>
  );
};
export default PricingCards;
