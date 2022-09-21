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
    tag: "tech",
    date: {
      month: "Sep",
      day: 6,
      from: "12:00",
      to: "15:30",
    },
    title: "Nextjs Conf",
  },
  {
    profile:
      "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/8.png",
    tag: "sport",
    date: {
      month: "Sep",
      day: 21,
      from: "1:00",
      to: "15:30",
    },
    title: "Launch with Executive",
    color: "info",
  },
  {
    profile:
      "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/7.png",
    tag: "travel",
    date: {
      month: "Sep",
      day: 6,
      from: "12:00",
      to: "15:30",
    },
    title: "Marketing meet",
    color: "warning",
  },
  {
    profile:
      "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/1.png",
    tag: "friend",
    date: {
      month: "Sep",
      day: 6,
      from: "12:00",
      to: "15:30",
    },
    title: "Climate change",
    color: "success",
  },
  {
    profile:
      "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/8.png",
    tag: "Business",
    date: {
      month: "Sep",
      day: 6,
      from: "12:00",
      to: "15:30",
    },
    title: "Listening old songs",
    color: "info",
  },
];

export default function MeetingDummy() {
  return <AdvanceCardMeeting title="Meetings" items={meetings} />;
}
