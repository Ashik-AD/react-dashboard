import CardRanger from "../../card/statistics/CardRanger";
const CardRangerSession = () => {
  return (
    <CardRanger
      title="Session"
      total={23000}
      growth={12}
      status="desc"
      tag="Last Week"
      color="warning"
      ranger="/src/image/john-pose-1.png"
    />
  );
};

export default CardRangerSession;
