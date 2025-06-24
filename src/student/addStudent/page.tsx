import React from "react";
import { Row, Col, Space, Breadcrumb } from "antd";
import { SaveOutlined, UndoOutlined, CloseOutlined } from "@ant-design/icons";
import { Form, FormItem, FormInput } from "../../components/common/Form/Form";
import { HeadingLg, SectionTitle } from "../../components/common/Text/Text";
import {
  DropdownGrey,
  DropdownOption,
} from "../../components/common/Dropdown/Dropdown";
import {
  ButtonMediumWhitePurple,
  ButtonMediumGrey,
} from "../../components/common/Button/Button";

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
        <SectionTitle style={{ marginRight: 8 }}>Student</SectionTitle>
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
      <div style={{ background: "#f2f6fe", minHeight: "2vh", padding: 32 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            justifyContent: "flex-end",
          }}
        >
          {/* Buttons Section */}
          <Space>
            <ButtonMediumWhitePurple>
              <UndoOutlined
                style={{ marginRight: 8 }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Reset
            </ButtonMediumWhitePurple>
            <ButtonMediumGrey>
              <CloseOutlined
                style={{ marginRight: 8 }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Cancel
            </ButtonMediumGrey>
            <ButtonMediumWhitePurple
              style={{ background: "#7c3aed", color: "white" }}
            >
              <SaveOutlined
                style={{ marginRight: 8 }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Save
            </ButtonMediumWhitePurple>
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
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: 4,
            background: "#f2f6fe",
            margin: "40px auto 0 auto",
            border: "none",
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
};

export default addStudent;
