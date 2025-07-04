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
} from "./newNavbar.styles";
import {
  HeadingMd,
  MetaText,
} from "../../common/Text/Text";

const NewNavbar = () => {
  return (
    <NavbarContainer>
      <LeftSection>
        <IconCircle style={{marginRight: 24}}>
          <img src="/sidebar-image/menu.png" alt="Menu" style={{ width: 34, height: 34 }} />
        </IconCircle>
        <IconCircle style={{marginRight: 24}}>
          <img src="/sidebar-image/lang.png" alt="Language" style={{ width: 48, height: 48 }} />
        </IconCircle>
        <IconCircle>
          <img src="/sidebar-image/noti.png" alt="Notification" style={{ width: 48, height: 48 }} />
        </IconCircle>
      </LeftSection>
      <RightSection>
        <SchoolIcon src="/sidebar-image/school.png" alt="School" />
        <SchoolInfo>
          <HeadingMd>Rivendell School</HeadingMd>
          <MetaText>School</MetaText>
        </SchoolInfo>
        <UserInfo>
          <UserAvatar>
            <img src="/sidebar-image/profile2.png" alt="User" style={{ width: 48, height: 48, objectFit: 'cover' }} />
          </UserAvatar>
          <div>
            <div>
              <HeadingMd>Gandalf. LTR</HeadingMd>
            </div>
            <div>
              <MetaText>Wizard</MetaText>
            </div>
          </div>
        </UserInfo>
      </RightSection>
    </NavbarContainer>
  );
};

export default NewNavbar;
