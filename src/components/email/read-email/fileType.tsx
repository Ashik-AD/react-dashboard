import {
  FaFileCsv,
  VscFilePdf,
  FaFileWord,
  FaFileExcel,
  FaHtml5,
  FaCss3Alt,
  SiJavascript,
  FcAudioFile,
  FcClapperboard,
  IoLogoAppleAr,
} from "react-icons/all";

const fileType = {
  pdf: <VscFilePdf />,
  csv: <FaFileCsv />,
  docs: <FaFileWord />,
  docx: <FaFileWord />,
  xls: <FaFileExcel />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <SiJavascript />,
  mp3: <FcAudioFile />,
  mp4: <FcClapperboard />,
};

type FileType = typeof fileType;

const getFileIcon = (ext: string) =>
  fileType[ext.toLowerCase() as keyof FileType] ? (
    fileType[ext.toLowerCase() as keyof FileType]
  ) : (
    <IoLogoAppleAr />
  );
export default getFileIcon;
