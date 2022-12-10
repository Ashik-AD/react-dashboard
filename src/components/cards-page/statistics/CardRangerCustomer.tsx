import CardRanger from "../../card/statistics/CardRanger";
const CardRangerCustomer = () => {
  return (
    <CardRanger
      title="Customers"
      total={"2,563"}
      growth={59}
      status="inc"
      tag="last quater"
      color={"info"}
      ranger="https://i.ibb.co/KGPV91p/mike.png"
    />
  );
};

export default CardRangerCustomer;
