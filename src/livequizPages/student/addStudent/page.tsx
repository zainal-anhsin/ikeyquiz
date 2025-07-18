import React from "react";
import { Row, Col, Space, Breadcrumb } from "antd";
import { SaveOutlined, UndoOutlined, CloseOutlined } from "@ant-design/icons";
import { Form, FormItem, FormInput } from "../../../components/common/Form/Form";
import { HeadingLg, HeadingMd } from "../../../components/common/Text/Text";
import Divider from "../../../components/common/Divider/Divider";
import {
  DropdownGrey,
  DropdownOption,
} from "../../../components/common/Dropdown/Dropdown";
import {
  BtnMdWhite,
  BtnMdGrey,
  BtnMdPurple,
} from "../../../components/common/Button/Button";

const addStudent = () => {
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
        <HeadingMd style={{ marginRight: 8 }}>Student</HeadingMd>
        <span style={{ fontWeight: 400, color: "black", fontSize: 14 }}>
          |
        </span>
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
            <span style={{ color: "#222", fontWeight: 600 }}>Add Student</span>
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
      {/* Add student form section*/}
      <div style={{ display: "grid", placeItems: "center", marginTop: 24 }}>
        <HeadingLg
          style={{
            marginBottom: 22,
            justifyContent: "flex-start",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          Add New Student
        </HeadingLg>

        <Form style={{ maxWidth: "800px" }}>
          <Row gutter={32}>
            <Col span={12}>
              <FormItem label="Student Name as per IC" name="name">
                <FormInput placeholder="Name" />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Email" name="email">
                <FormInput placeholder="Email Address" />
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
            <Col span={12}>
              <FormItem label="Classroom" name="classroom">
                <FormInput placeholder="Classroom Name" />
              </FormItem>
            </Col>
          </Row>
        </Form>

        {/* Divider section */}
        <Divider />
      </div>
    </div>
  );
};

export default addStudent;
