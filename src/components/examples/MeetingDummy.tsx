import AdvanceCardMeeting from "../card/advance/AdvCardMeeting";

const meetings = [
  {
    profile:
      "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/4.png",
    tag: "Business",
    date: {
      month: "Sep",
      day: 5,
      from: "09:00",
      to: "10:30",
    },
    title: "Call with Deamon",
    color: "error",
  },
  {
    profile:
      "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/2.png",
    tag: "Dinner",
    date: {
      month: "Sep",
      day: 6,
      from: "12:00",
      to: "15:30",
    },
    title: "Dinner with my gf",
  },
];

export default function MeetingDummy() {
  return <AdvanceCardMeeting title="Meetings" items={meetings} />;
}
