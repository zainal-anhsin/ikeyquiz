import React from "react";
import { Space, Breadcrumb, message, Upload } from "antd";
import {
  SaveOutlined,
  UndoOutlined,
  CloseOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { HeadingLg, SectionTitle, MetaText } from "../../components/common/Text/Text";
import Divider from "../../components/common/Divider/Divider";
import {
  ButtonMediumWhitePurple,
  ButtonMediumGrey,
  ButtonRectangle,
} from "../../components/common/Button/Button";
import Checkbox from '../../components/common/Checkbox/Checkbox';
const { Dragger } = Upload;

const uploadStudent = () => {
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
        <SectionTitle style={{ marginRight: 8 }}>Student</SectionTitle>
        <span style={{ fontWeight: 400, color: "black", fontSize: 14 }}>|</span>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <a href="/dashboard" style={{ color: "#8c98a4" }}>
              Home
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/student" style={{ color: "#8c98a4" }}>
              Student
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span style={{ color: "#222", fontWeight: 600 }}>
              Upload Student Profile
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
            Upload Student Profile
          </HeadingLg>
          <MetaText>
            <span style={{ color: "#6666FF", cursor: "pointer" }}>
              Download & use the provided spreadsheet template file
            </span>{" "}
            for upload purpose.
            <br />
            <span>
              Using other files with different column name or format will cause
              errors during data validation.
            </span>
          </MetaText>
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
        {/* Checkbox section */}
        <div
          style={{
            width: "100%",
            maxWidth: 800,
            margin: "32px auto 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 16,
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox />
            <SectionTitle style={{ fontWeight: 400 }}>
              Send email after upload
            </SectionTitle>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox defaultChecked />
            <SectionTitle style={{ fontWeight: 400 }}>
              Reset Password after upload
            </SectionTitle>
          </label>
        </div>
        {/* Divider section */}
        <Divider />
      </div>
    </div>
  );
};

export default uploadStudent;
