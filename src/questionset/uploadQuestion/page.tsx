import React from "react";
import { Space, Breadcrumb, message, Upload, Row, Col } from "antd";
import {
  SaveOutlined,
  UndoOutlined,
  CloseOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import {
  HeadingLg,
  MetaText,
  SectionTitle,
} from "../../components/common/Text/Text";
import {
  ButtonMediumWhitePurple,
  ButtonMediumGrey,
  ButtonRectangle,
} from "../../components/common/Button/Button";
import { Form, FormItem, FormInput } from "../../components/common/Form/Form";
import {
  DropdownGrey,
  DropdownOption,
} from "../../components/common/Dropdown/Dropdown";
const { Dragger } = Upload;

const uploadQuestion = () => {
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
              Upload Question Set
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
            justifyContent: "flex-end",
          }}
        >
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
            <ButtonRectangle>
              <SaveOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Save
            </ButtonRectangle>
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
            Create & Upload Question Set
          </HeadingLg>
          <Form style={{ maxWidth: "800px" }}>
            <Row gutter={32}>
              <Col span={12}>
                <FormItem label="Name" name="name">
                  <FormInput placeholder="Enter Name" />
                </FormItem>
              </Col>
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
                <FormItem label="Remarks" name="remarks">
                  <FormInput.TextArea placeholder="" style={{height: '100px', resize: 'vertical'}} />
                </FormItem>
              </Col>
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
          </Form>

          <div style={{ marginTop: 32 }}>
          <MetaText>
            <span style={{ color: "#7c3aed", cursor: "pointer" }}>
              Download & use the provided spreadsheet template file
            </span>{" "}
            for upload purpose.
            <br />
            <span>
              Using other files with different column name or format may cause
              errors on data verification on
              <br />
              the questions, or may further create unforseen bugs that may
              greatly affecting the usability or
              <br />
              accessability of the quiz system on your account.
            </span>
          </MetaText>
          </div>
          
        </div>
        {/* Dragger upload section */}
        <div
          style={{ width: "100%", maxWidth: 800, margin: "32px auto 0 auto" }}
        >
          <Dragger {...uploadProps} style={{ padding: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined
                style={{ color: "#6666FF" }}
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
            </p>
            <SectionTitle style={{ color: '#6666FF', marginBottom: 16 }}>
              Drop files to upload or
            </SectionTitle>
              <ButtonRectangle>
                Browse
              </ButtonRectangle>
            </div>
          </Dragger>
        </div>
      </div>
    </div>
  );
};

export default uploadQuestion;
