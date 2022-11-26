import useModal from "../../hooks/useModal";
import { Button, Select, SelectItem, Divider, Text } from "../../ui";
import Box from "../box/Box";
import Modal from "../modal/Modal";
import ModalContentLayout from "../users/layout/ModalContentLayout";
import styled from "styled-components";
import CancelPlanModal from "./CancelPlanModal";

const UpgradePlanModal = ({ plan }: { plan: string }) => {
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
                  <CancelPlanModal />
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
export default UpgradePlanModal;

const StyledSelectPlanWrp = styled(Box)`
  @media (max-width: 599px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
