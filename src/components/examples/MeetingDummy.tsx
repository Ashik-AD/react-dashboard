import useFetch from "../../hooks/useFetch";
import CardMeetingList from "../card/advance/CardMeetingList";

export default function MeetingDummy() {
  const { data, loading } = useFetch<MeetingAPI>(
    "/6395f168c5b3a64f1bc90862/meetingSchedule"
  );
  if (loading || !data) return <></>;
  return <CardMeetingList title="Meeting Schedule" items={data} />;
}
type MeetingAPI = {
  title: string;
  profile: string;
  tag: string;
  color?: string;
  date: {
    month: string;
    day: number;
    from: string;
    to: string;
  };
}[];
