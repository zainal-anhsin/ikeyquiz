import React, { useState } from "react";
import { Row, Col, Space, Breadcrumb } from "antd";
import {
  SaveOutlined,
  UndoOutlined,
  CloseOutlined,
  DeleteOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Form, FormItem, FormInput } from "../../../components/common/Form/Form";
import { HeadingLg, HeadingMd } from "../../../components/common/Text/Text";
import { PasswordRevealInput } from "../../../components/common/Form/Form";
import {
  DropdownWhite,
  DropdownOption,
} from "../../../components/common/Dropdown/Dropdown";
import {
  BtnMdWhite,
  BtnMdGrey,
  BtnMdPurple,
} from "../../../components/common/Button/Button";
import Switch from "../../../components/common/Switch/Switch";
import Checkbox from "../../../components/common/Checkbox/Checkbox";
import Divider from "../../../components/common/Divider/Divider";

const EditStudent = () => {
  const [isActive, setIsActive] = useState(true);
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
            <span style={{ color: "#222", fontWeight: 600 }}>Edit Student</span>
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
            <UserOutlined
              style={{ fontSize: 28, color: "#1a327f" }}
              onPointerOverCapture={undefined}
              onPointerLeave={undefined}
            />
            <span style={{ marginLeft: 8, marginRight: 8, fontWeight: "bold" }}>
              {isActive ? "Active" : "Deactivated"}
            </span>
            <Switch
              defaultChecked={isActive}
              onChange={(checked) => setIsActive(checked)}
              style={{ verticalAlign: "middle" }}
            />
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
              <FormItem label="Password" name="password">
                <PasswordRevealInput placeholder="Password" />
              </FormItem>
            </Col>
            <Col span={12}>
              <BtnMdPurple
                style={{
                  width: "50%",
                  marginTop: 50,
                }}
              >
                <MailOutlined
                  onPointerOverCapture={undefined}
                  onPointerLeave={undefined}
                  style={{ marginRight: 6, marginLeft: 6 }}
                />
                Email Password
              </BtnMdPurple>
            </Col>
          </Row>
        </Form>

        {/* Divider section */}
        <Divider />

        {/* Checkbox section */}
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            margin: "40px auto 0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          {/* Custom Group */}
          <div style={{ flex: 1 }}>
            <HeadingLg style={{ marginBottom: 16 }}>Custom Group</HeadingLg>
            <div>
              <Checkbox style={{ marginBottom: 20 }} defaultChecked={false}>
                <HeadingMd>CG1</HeadingMd>
              </Checkbox>
            </div>
            <div>
              <Checkbox style={{ marginBottom: 20 }} defaultChecked={true}>
                <HeadingMd>CG2</HeadingMd>
              </Checkbox>
            </div>
          </div>
          {/* Category */}
          <div style={{ flex: 1 }}>
            <HeadingLg style={{ marginBottom: 16 }}>Category</HeadingLg>
            <div>
              <Checkbox style={{ marginBottom: 20 }} defaultChecked={false}>
                <HeadingMd>Live Quiz</HeadingMd>
              </Checkbox>
            </div>
            <div>
              <Checkbox style={{ marginBottom: 20 }} defaultChecked={true}>
                <HeadingMd>Live QuizKosa Kata Spot+ (full)</HeadingMd>
              </Checkbox>
            </div>
            <div>
              <Checkbox style={{ marginBottom: 20 }} defaultChecked={false}>
                <HeadingMd>English Quiz 2025</HeadingMd>
              </Checkbox>
            </div>
            <div>
              <Checkbox style={{ marginBottom: 20 }} defaultChecked={true}>
                <HeadingMd>Science Quiz March</HeadingMd>
              </Checkbox>
            </div>
            <div>
              <Checkbox style={{ marginBottom: 20 }} defaultChecked={false}>
                <HeadingMd>Mathematic Quiz</HeadingMd>
              </Checkbox>
            </div>
            <div>
              <Checkbox style={{ marginBottom: 20 }} defaultChecked={true}>
                <HeadingMd>Active Sport 008</HeadingMd>
              </Checkbox>
            </div>
          </div>
        </div>

        <Divider />

        {/* Group and Classroom section */}
        <Form style={{ maxWidth: "800px", marginTop: 32 }}>
          <Row gutter={32}>
            <Col span={12}>
              <FormItem label="Group" name="group">
                <DropdownWhite placeholder="Select">
                  <DropdownOption value="A">Group A</DropdownOption>
                  <DropdownOption value="B">Group B</DropdownOption>
                  <DropdownOption value="C">Group C</DropdownOption>
                </DropdownWhite>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Classroom" name="classroom">
                <FormInput placeholder="Classroom Name" />
              </FormItem>
            </Col>
          </Row>
        </Form>

        <Divider />
      </div>
    </div>
  );
};

export default EditStudent;
