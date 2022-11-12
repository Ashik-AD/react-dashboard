import { ReactNode } from "react";
import styled from "styled-components";
import useModal from "../../../hooks/useModal";
import { Button, Chip, Divider, Select, SelectItem, Text } from "../../../ui";
import ProgressLinear from "../../../ui/progress/Progress";
import Box from "../../box/Box";
import ColorBox from "../../box/ColorBox";
import Card from "../../card/Card";
import { GridInnerContainer, GridItem } from "../../layout";
import Modal from "../../modal/Modal";
import ModalContentLayout from "../layout/ModalContentLayout";

import {
  CancelOutlined,
  CheckCircleOutline,
  ErrorOutline,
} from "@mui/icons-material";

const CurrentPlan = ({ currentPlan }: { currentPlan?: string }) => {
  return (
    <Card padding="1.2rem 1.4rem">
      <Box display="flex" flexDirection="column" space={2.25}>
        <Text heading="h6">Current Plan</Text>
        <GridInnerContainer spacing={1.6}>
          <GridItem xs={12} md={6}>
            <Box display="flex" flexDirection="column" space={1}>
              <Text varient="body2" paragraph>
                Your current plan is <b>{currentPlan?.toLocaleUpperCase()}</b>{" "}
                <br />A simple start for everyone
              </Text>
              <Box>
                <Text varient="body2" weight="bold" paragraph>
                  Active until Feb 13, 2023
                </Text>
                <Text varient="body2" paragraph secondary>
                  We will send you a notification upon Subscription expiration
                </Text>
              </Box>
              <Box>
                <Box display="flex" align="center" space={0.6}>
                  <Text varient="body2" weight="bold">
                    $99 Per Month
                  </Text>
                  <Chip label="Fabulous" size="small" skin="light" />
                </Box>
                <Text varient="body2" paragraph secondary>
                  Standard plan for whatever your needs
                </Text>
              </Box>
            </Box>
          </GridItem>

          <GridItem xs={12} md={6}>
            <ColorBox
              color="warning"
              padding={12}
              transparency={2}
              border={{ show: true, size: "0px", radius: "6px" }}
            >
              <Text varient="body1" color="warning" weight="bold" paragraph>
                We need your attention!
              </Text>
              <Text varient="body2" color="warning" lineHeight="26px" paragraph>
                Your plan requires updates
              </Text>
            </ColorBox>
            <Box display="flex" justify="space-between" mt={12} mb={6}>
              <Text varient="body2" weight="bold">
                Days
              </Text>
              <Text varient="body2" weight="bold">
                23 of 30 Days
              </Text>
            </Box>
            <ProgressLinear start={89} size="small" varient="rounded" />
            <Text varient="caption" lineHeight="26px" paragraph secondary>
              Your plan requires update
            </Text>
          </GridItem>
        </GridInnerContainer>
        <Box display="flex" space={1}>
          <UpgradePlan plan={currentPlan} />
          <CancelSubscription />
        </Box>
      </Box>
    </Card>
  );
};
export default CurrentPlan;

const UpgradePlan = ({ plan }: { plan: string }) => {
  const { show, toggleModal } = useModal();
  plan?.toLowerCase();
  const subscriptionAmt =
    plan === "basic"
      ? 0
      : plan === "standard"
      ? 99
      : plan === "enterprise"
      ? 449
      : 999;
  return (
    <>
      <Button onClick={toggleModal}>Upgrade plan</Button>
      {show ? (
        <Modal handleOutClick={toggleModal}>
          <ModalContentLayout>
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              justify="center"
              align="center"
              space={2}
              padding={20}
            >
              <Text heading="h5">Upgrade Plan</Text>
              <Text varient="body2" paragraph secondary>
                Choose the best plan for the user
              </Text>
              <StyledSelectPlanWrp
                display="flex"
                wrap="nowrap"
                width="100%"
                space={1}
              >
                <Select
                  defaultValue={plan.toLowerCase()}
                  label="Choose plan"
                  sizes="small"
                  width="100%"
                  containerWidth="100%"
                  labelWidth="100%"
                >
                  <SelectItem value="basic" label="Basic - $0/month" />
                  <SelectItem value="standard" label="Standard - $99/month" />
                  <SelectItem
                    value="enterprise"
                    label="Enterprise - $449/month"
                  />
                  <SelectItem value="company" label="Company - $999/month" />
                </Select>
                <Button>upgrade</Button>
              </StyledSelectPlanWrp>
              <Divider
                styles={{ width: `calc(100% + 20px + 0.75rem + 1rem)` }}
              />
              <Box
                display="flex"
                wrap="wrap"
                width="100%"
                justify="space-between"
                align="flex-end"
              >
                <Box>
                  <Text varient="body2" weight="medium" paragraph>
                    User current plan is {plan}
                  </Text>
                  <Box display="flex" align="baseline">
                    <Text heading="h3" skinColor>
                      <sup
                        style={{ fontSize: 12, position: "relative", top: -8 }}
                      >
                        $
                      </sup>
                      {subscriptionAmt}
                    </Text>
                    <sub> / month</sub>
                  </Box>
                </Box>
                <Box>
                  <CancelSubscription />
                </Box>
              </Box>
            </Box>
          </ModalContentLayout>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

const CancelSubscription = () => {
  const { show, toggleModal, hideModal } = useModal();
  return (
    <>
      <Button varient="outlined" color="error" onClick={toggleModal}>
        cancel subscription
      </Button>
      {show ? (
        <Modal handleOutClick={toggleModal}>
          <ModalContentLayout maxWidth="520px">
            <Box
              display="flex"
              flexDirection="column"
              align="center"
              justify="center"
              space={1}
              padding={20}
            >
              <Text size={86} color="warning">
                <ErrorOutline />
              </Text>
              <Text align="center">
                Are you sure you would like to cancel your subscription?
              </Text>
              <Box display="flex" justify="center" space={1}>
                <ConfirmCancelSubscription onConfirmDone={hideModal} />
                <UnconfirmCancelSubsciption onConfirmDone={hideModal} />
              </Box>
            </Box>
          </ModalContentLayout>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

type ConfirmDone = {
  onConfirmDone?: () => void;
};
const ConfirmCancelSubscription = ({ onConfirmDone }: ConfirmDone) => {
  const { show, toggleModal } = useModal();
  const handelDone = () => {
    toggleModal();
    onConfirmDone && onConfirmDone();
  };
  return (
    <>
      <Button onClick={toggleModal}>Yes</Button>
      {show ? (
        <Modal handleOutClick={toggleModal}>
          <ConfirmationFinish
            title="Unsubscribed!"
            subtitle="Your subscription cancelled successfully."
            icon={<CheckCircleOutline />}
            iconColor="success"
            onConfirmDone={handelDone}
          />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

const UnconfirmCancelSubsciption = ({ onConfirmDone }: ConfirmDone) => {
  const { show, toggleModal } = useModal();
  const handleDone = () => {
    toggleModal();
    onConfirmDone && onConfirmDone();
  };
  return (
    <>
      <Button
        varient="outlined"
        color="rgba(239, 239, 240, 1)"
        styles={{ opacity: 0.6 }}
        onClick={toggleModal}
      >
        cancel
      </Button>
      {show ? (
        <Modal handleOutClick={toggleModal}>
          <ConfirmationFinish
            title="Cancelled"
            subtitle="Unsubscription Cancelled"
            icon={<CancelOutlined />}
            iconColor="error"
            onConfirmDone={handleDone}
          />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

interface ConfirmationProps {
  icon: ReactNode;
  iconColor: string;
  title: string;
  subtitle: string;
  onConfirmDone: () => void;
}
const ConfirmationFinish = (props: ConfirmationProps) => {
  const { icon, iconColor, title, subtitle, onConfirmDone } = props;
  return (
    <ModalContentLayout maxWidth="520px">
      <Box
        display="flex"
        flexDirection="column"
        align="center"
        justify="center"
        space={1}
      >
        <Text size={86} color={iconColor}>
          {icon}
        </Text>
        <Text
          size={28}
          weight="medium"
          styles={{ letterSpacing: 1.5, margin: "2rem 0rem" }}
          paragraph
        >
          {title}
        </Text>
        <Text>{subtitle}</Text>
        <Button onClick={onConfirmDone}>Ok</Button>
      </Box>
    </ModalContentLayout>
  );
};

const StyledSelectPlanWrp = styled(Box)`
  @media (max-width: 599px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
