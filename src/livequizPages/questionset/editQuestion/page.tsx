import React from "react";
import { Space, Breadcrumb } from "antd";
import {
  SaveOutlined,
  UndoOutlined,
  CloseOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  HeadingMd,
} from "../../../components/common/Text/Text";
import {
  BtnMdWhite,
  BtnMdGrey,
  BtnMdPurple,
} from "../../../components/common/Button/Button";
import { CustomTabs, TabPane } from "../../../components/common/Tabs/tabs";
import ListQuestion from "./components/listQuestion";
import SettingQuestion from "./components/settingQuestion";

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
        <HeadingMd style={{ marginRight: 8 }}>Question Set</HeadingMd>
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
            <BtnMdWhite>
              <DeleteOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Delete
            </BtnMdWhite>
          </Space>
          {/* Right side: Cancel, Reset, Save */}
          <Space>
            <BtnMdGrey>
              <CloseOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Cancel
            </BtnMdGrey>
            <BtnMdWhite>
              <UndoOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Reset
            </BtnMdWhite>
            <BtnMdPurple>
              <SaveOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Save
            </BtnMdPurple>
          </Space>
        </div>
      </div>
      {/* Main Content Section with Tabs */}
      <div style={{ padding: "0 32px" }}>
        <CustomTabs defaultActiveKey="setting">
          <TabPane tab="Setting Question" key="setting">
            <SettingQuestion />
          </TabPane>
          <TabPane tab="List Question" key="list">
            <ListQuestion />
          </TabPane>
        </CustomTabs>
      </div>
    </div>
  );
};

export default EditQuestion;
