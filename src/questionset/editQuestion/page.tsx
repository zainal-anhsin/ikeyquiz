import React from "react";
import { Space, Breadcrumb, message, Upload, Row, Col } from "antd";
import {
  SaveOutlined,
  UndoOutlined,
  CloseOutlined,
  InboxOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  HeadingLg,
  MetaText,
  SectionTitle,
} from "../../components/common/Text/Text";
import {
  ButtonMediumWhitePurple,
  ButtonMediumGrey,
} from "../../components/common/Button/Button";
import { Form, FormItem, FormInput } from "../../components/common/Form/Form";
import {
  DropdownGrey,
  DropdownOption,
} from "../../components/common/Dropdown/Dropdown";
const { Dragger } = Upload;

const editQuestion = () => {
  const uploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info: any) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: React.DragEvent<HTMLDivElement>) {
      console.log("Dropped files", e.dataTransfer.files);
    },
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
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Delete
            </ButtonMediumWhitePurple>
          </Space>
          {/* Right side: Cancel, Reset, Save */}
          <Space>
            <ButtonMediumGrey>
              <CloseOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Cancel
            </ButtonMediumGrey>
            <ButtonMediumWhitePurple>
              <UndoOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Reset
            </ButtonMediumWhitePurple>
            <ButtonMediumWhitePurple
              style={{ background: "#7c3aed", color: "white" }}
            >
              <SaveOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Save
            </ButtonMediumWhitePurple>
          </Space>
        </div>
      </div>
      <div style={{ display: "grid", placeItems: "center", marginTop: 24 }}>
        <div
          style={{
            justifyContent: "flex-start",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <HeadingLg style={{ marginBottom: 22, marginTop: 22 }}>
            Edit Question Set
          </HeadingLg>
          <Form style={{ maxWidth: "800px" }}>
            <Row gutter={32}>
              <Col span={12}>
                <FormItem label="Name" name="name">
                  <FormInput placeholder="Enter Name" />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="Display Order" name="displayOrder">
                  <FormInput placeholder="0" />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <FormItem label="Remarks (Public)" name="remarks">
                  <FormInput.TextArea
                    placeholder=""
                    style={{ height: "100px", resize: "vertical" }}
                  />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="Total Question" name="totalQuestion">
                  <FormInput
                    type="number"
                    defaultValue={30}
                    placeholder="Enter number"
                  />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
              <FormItem label="Group" name="group">
                <DropdownGrey placeholder="Select">
                  <DropdownOption value="A">Group A</DropdownOption>
                  <DropdownOption value="B">Group B</DropdownOption>
                  <DropdownOption value="C">Group C</DropdownOption>
                </DropdownGrey>
              </FormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
              <FormItem label="Subject" name="subject">
                <DropdownGrey placeholder="Select">
                  <DropdownOption value="A">Subject A</DropdownOption>
                  <DropdownOption value="B">Subject B</DropdownOption>
                  <DropdownOption value="C">Subject C</DropdownOption>
                </DropdownGrey>
              </FormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <FormItem label="Remarks (Hidden)" name="remarksHidden">
                  <FormInput.TextArea
                    placeholder=""
                    style={{ height: "100px", resize: "vertical" }}
                  />
                </FormItem>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default editQuestion;
