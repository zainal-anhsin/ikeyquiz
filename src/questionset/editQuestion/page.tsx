import React from "react";
import { Space, Breadcrumb } from "antd";
import {
  SaveOutlined,
  UndoOutlined,
  CloseOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  SectionTitle,
} from "../../components/common/Text/Text";
import {
  ButtonMediumWhitePurple,
  ButtonMediumGrey,
} from "../../components/common/Button/Button";
import ListQuestion from "./components/listQuestion";

const EditQuestion = () => {
  return (
    <div>
      {/* Breadcrumb section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 24,
        }}
      >
        <SectionTitle style={{ marginRight: 8 }}>Question Set</SectionTitle>
        <span style={{ fontWeight: 400, color: "black", fontSize: 14 }}>|</span>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <a href="/dashboard" style={{ color: "#8c98a4" }}>
              Home
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/questionset" style={{ color: "#8c98a4" }}>
              Question Set
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span style={{ color: "#222", fontWeight: 600 }}>
              Edit Question Set
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* Buttons Section */}
      <div style={{ background: "#f2f6fe", minHeight: "2vh", padding: 32 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            justifyContent: "space-between",
          }}
        >
          {/* Left side: Remove, Profile, Switch */}
          <Space>
            <ButtonMediumWhitePurple>
              <DeleteOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Delete
            </ButtonMediumWhitePurple>
          </Space>
          {/* Right side: Cancel, Reset, Save */}
          <Space>
            <ButtonMediumGrey>
              <CloseOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Cancel
            </ButtonMediumGrey>
            <ButtonMediumWhitePurple>
              <UndoOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Reset
            </ButtonMediumWhitePurple>
            <ButtonMediumWhitePurple
              style={{ background: "#7c3aed", color: "white" }}
            >
              <SaveOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Save
            </ButtonMediumWhitePurple>
          </Space>
        </div>
      </div>
      {/* Main Content Section */}
      <ListQuestion />
    </div>
  );
};

export default EditQuestion;
