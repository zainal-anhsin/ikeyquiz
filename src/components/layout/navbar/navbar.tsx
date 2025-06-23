import React from "react";
import {
  NavbarContainer,
  LeftSection,
  SchoolIcon,
  SchoolInfo,
  RightSection,
  IconCircle,
  UserInfo,
  UserAvatar,
} from "./navbar.styles";
import {
  SectionTitle,
  MetaText,
  SubLabel,
} from "../../common/Text/Text";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LeftSection>
        <SchoolIcon src="/sidebar-image/school.png" alt="School" />
        <SchoolInfo>
          <SectionTitle>Convent Datuk. K</SectionTitle>
          <SubLabel>School</SubLabel>
        </SchoolInfo>
      </LeftSection>
      <RightSection>
        <IconCircle>
          <img
            src="/sidebar-image/lang.png"
            alt="Language"
            style={{ width: 52, height: 52 }}
          />
        </IconCircle>
        <IconCircle>
          <img
            src="/sidebar-image/noti.png"
            alt="Notification"
            style={{ width: 52, height: 52 }}
          />
        </IconCircle>
        <UserInfo>
          <UserAvatar>
            {/* Placeholder for user icon, you can replace with an actual image if available */}
            <span role="img" aria-label="user" style={{ fontSize: 32 }}>
              😇
            </span>
          </UserAvatar>
          <div>
            <div>
              <SectionTitle>Jasper Lim</SectionTitle>
            </div>
            <div>
              <MetaText>Student</MetaText>
            </div>
          </div>
        </UserInfo>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;
