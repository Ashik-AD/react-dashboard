import CardRanger from "../../card/statistics/CardRanger";
const CardRangerTotalOrder = () => {
  return (
    <CardRanger
      title="Total Orders"
      total={"45.4k"}
      growth={25}
      status="inc"
      tag="Last Month"
      color={"error"}
      ranger="https://i.ibb.co/D9Z4Dfq/jack.png.png"
    />
  );
};

export default CardRangerTotalOrder;
