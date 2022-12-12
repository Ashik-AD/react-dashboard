import { useState } from "react";
import useFetch from "../../hooks/useFetch";
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
  const { data } = useFetch<Array<PricingPlanAPI>>(
    "/6395f1ff6a51bc4f704ce267/pricingPlans"
  );

  if (!data) return <></>;

  const renderPlanCards = data.map((plan) => (
    <GridItem xs={12} md={4} key={plan.title}>
      <PricingCard
        borderColor={plan.popularPlan ? "skin" : ""}
        action={
          <Button varient="outlined" width="100%">
            {plan.currentPlan ? "your current plan" : "upgrade"}
          </Button>
        }
      >
        {plan.popularPlan && (
          <PriceCardTags>
            <Chip label="Popular" skin="light" size="small" labelWeight={600} />
          </PriceCardTags>
        )}
        <PriceCardHeader
          icon={plan.imgSrc}
          cardTitle={plan.title}
          cardSlug={plan.subtitle}
        />
        <PriceTag
          price={plan.monthlyPrice}
          slug={
            plan.yearlyPlan.totalAnnual > 0 && showAnnually
              ? `USD ${plan.yearlyPlan.totalAnnual}/year`
              : ""
          }
          type="month"
        />
        <PriceCardFeatures list={plan.planBenefits} />
      </PricingCard>
    </GridItem>
  ));
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
      <GridInnerContainer spacing={1.6}>{renderPlanCards}</GridInnerContainer>
    </Box>
  );
};
export default PricingCards;
interface PricingPlanAPI {
  title: string;
  monthlyPrice: number;
  currentPlan: boolean;
  popularPlan: boolean;
  subtitle: string;
  imgSrc: string;
  yearlyPlan: {
    perMonth: number;
    totalAnnual: number;
  };
  planBenefits: Array<string>;
}
