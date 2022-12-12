import { Menu } from "@mui/icons-material";
import React, { createRef, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Box from "../../components/box/Box";
import Card from "../../components/card/Card";
import EmailSideNav from "../../components/email/EmailNav";
import EmailToolbar from "../../components/email/EmailToolbar";
import SearchEmailList from "../../components/email/SearchEmailList";
import { GridInnerContainer, GridItem } from "../../components/layout";
import { filterChanged } from "../../features/emails/creator";
import { fetchEmail } from "../../features/emails/emailsSlice";
import { useAppDispatch } from "../../hooks";
import { Divider, IconButton } from "../../ui";
import EmailContent from "./chunk/EmailContent";
import ReadEmail from "./chunk/ReadEmail";
const Email = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchEmail);
  }, []);

  useEffect(() => {
    const urlArr = location.pathname.split("/");
    let currentPathName = urlArr[urlArr.length - 2];
    if (currentPathName === "email") {
      currentPathName = "inbox";
    }
    dispatch(filterChanged(currentPathName));
  }, []);

  const navRef = createRef<HTMLDivElement>();

  const handleNavIconClick = (eve: React.MouseEvent) => {
    eve.stopPropagation();
    navRef.current?.classList.add("active");
    window.addEventListener("click", hideNav);
  };

  const hideNav = () => {
    navRef.current?.classList.toggle("active");
    window.removeEventListener("click", hideNav);
  };
  return (
    <Card
      height="calc(100% - 1rem)"
      position="relative"
      className="overflow-hidden"
    >
      <GridInnerContainer>
        <GridItem xs={5} md={3}>
          <EmailSideNav ref={navRef} />
        </GridItem>
        <GridItem xs={12} md={9}>
          <Box display="flex" style={{ height: "100%" }} position="relative">
            <Divider vertical />
            <Box display="flex" flexDirection="column" flex={1}>
              <ReadEmail />
              <Box display="flex" align="center" flex={1}>
                <IconButton
                  varient="text"
                  roundness="square"
                  size={25}
                  fontSize={30}
                  className="xs-visible md-hidden"
                  onClick={handleNavIconClick}
                  styles={{ marginLeft: 24 }}
                >
                  <Menu />
                </IconButton>
                <SearchEmailList />
              </Box>
              <EmailToolbar />
              <Routes>
                <Route index element={<EmailContent />} />
                <Route path="/inbox/" element={<EmailContent />} />
                <Route path="/sent/" element={<EmailContent />} />
                <Route path="/starred/" element={<EmailContent />} />
                <Route path="/draft/" element={<EmailContent />} />
                <Route path="/spam/" element={<EmailContent />} />
                <Route path="/trash/" element={<EmailContent />} />
                <Route path="/label/personal" element={<EmailContent />} />
                <Route path="/label/company" element={<EmailContent />} />
                <Route path="/label/important" element={<EmailContent />} />
                <Route path="/label/private" element={<EmailContent />} />
              </Routes>
            </Box>
          </Box>
        </GridItem>
      </GridInnerContainer>
    </Card>
  );
};

export default Email;
