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
import { CustomTabs, TabPane } from "../../components/common/Tabs/tabs";
import SettingQuestion from "./components/settingQuestion";
import ListQuestion from "./components/listQuestion";

const EditQuestion = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

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
      {/* Tabs Section */}
      <div style={{ padding: "0 32px", marginTop: 24 }}>
        <CustomTabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Question Setting" key="1">
            <SettingQuestion />
          </TabPane>
          <TabPane tab="Question List" key="2">
            <ListQuestion />
          </TabPane>
        </CustomTabs>
      </div>
    </div>
  );
};

export default EditQuestion;
