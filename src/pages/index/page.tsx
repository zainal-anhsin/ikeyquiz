import React, { useState } from "react";
import { HeadingLg, MetaText } from "../../components/common/Text/Text";
import { ButtonJoin, ButtonGrey } from "../../components/common/Button/Button";
import {
  RectangleCard,
  RectangleCardHeader,
  RectangleCardBody,
  CardAvatar,
  CardActionRow,
  RoundedCard,
} from "./style";
import JoinSchoolModal from '../../components/JoinSchoolModal';

const cardData = [
  {
    name: "Convent Ave Maria. J",
    type: "School",
    avatar: "/sidebar-image/school.png",
    headerColor: "#f7c7d3",
  },
  {
    name: "Joy Academy Int.",
    type: "Center",
    avatar: "/sidebar-image/school.png",
    headerColor: "#c7e3e9",
  },
  {
    name: "Yoga YG. Co",
    type: "Center",
    avatar: "/sidebar-image/school.png",
    headerColor: "#fbe6c7",
  },
];

const roundedCardData = [
  {
    name: "Convent Datuk. K",
    type: "School",
    avatar: "/sidebar-image/school.png",
    borderColor: "#7c5dfa",
    bgColor: "#f8f8fa",
    bold: true,
  },
  {
    name: "Swimming Academy",
    type: "Center",
    avatar: "/sidebar-image/school.png",
    borderColor: "transparent",
    bgColor: "#f5f6fa",
    bold: true,
  },
  {
    name: "Intel Training",
    type: "Tuition",
    avatar: "/sidebar-image/school.png",
    borderColor: "transparent",
    bgColor: "#fbe6c7",
    bold: true,
  },
  {
    name: "Marcus's Institution",
    type: "Center",
    avatar: "/sidebar-image/school.png",
    borderColor: "transparent",
    bgColor: "#c7e3e9",
    bold: true,
    textWhite: true,
  },
];

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 32 }}>
        {cardData.map((card, idx) => (
          <RectangleCard key={idx}>
            <RectangleCardHeader bgcolor={card.headerColor}>
              <CardAvatar src={card.avatar} alt={card.name} />
              <div>
                <HeadingLg style={{ color: "#fff" }}>{card.name}</HeadingLg>
                <MetaText style={{ color: "#fff" }}>{card.type}</MetaText>
              </div>
            </RectangleCardHeader>
            <RectangleCardBody>
              <CardActionRow style={{ width: "100%" }}>
                <ButtonGrey disabled>Decline</ButtonGrey>
                <ButtonJoin onClick={showModal}>Join</ButtonJoin>
              </CardActionRow>
            </RectangleCardBody>
          </RectangleCard>
        ))}
      </div>

      {/* Rounded Cards Section */}
      <div style={{ display: "flex", gap: 32, marginTop: 40 }}>
        {roundedCardData.map((card, idx) => (
          <RoundedCard
            key={idx}
            bordercolor={card.borderColor}
            bgcolor={card.bgColor}
            style={{
              ...(card.borderColor !== "transparent" ? { boxShadow: "0 0 0 2px #7c5dfa" } : {}),
              cursor: 'pointer',
            }}
          >
            <CardAvatar
              src={card.avatar}
              alt={card.name}
              style={{ background: card.bgColor, minWidth: 48 }}
            />
            <div>
              <HeadingLg>{card.name}</HeadingLg>
              <MetaText>{card.type}</MetaText>
            </div>
          </RoundedCard>
        ))}
      </div>
      <JoinSchoolModal 
        open={isModalOpen} 
        onCancel={handleCancel} 
        onJoin={handleOk} 
      />
    </>
  );
};

export default Index;
