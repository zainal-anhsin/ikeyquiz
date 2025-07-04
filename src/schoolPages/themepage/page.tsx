import React from "react";
import { Card, Divider, Space, Row, Col } from "antd";
import {
  BtnPrimary,
  BtnLgPurple,
  BtnSmPurple,
  BtnSmGrey,
  BtnMdGrey,
  BtnMdWhite,
  BtnSmWhite,
} from "../../components/common/Button/Button";
import {
  HeadingLg,
  MetaText,
  HeadingMd,
  MetaTextPurple,
  SidebarLabel,
} from "../../components/common/Text/Text";
import { Form, FormItem, FormInput, PasswordRevealInput } from "../../components/common/Form/Form";
import {
  DropdownPurple,
  DropdownGrey,
  DropdownWhite,
  DropdownOption,
} from "../../components/common/Dropdown/Dropdown";
import Checkbox from "../../components/common/Checkbox/Checkbox";
import CustomSwitch from "../../components/common/Switch/Switch";

const ThemePage = () => {
  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <HeadingLg style={{ marginBottom: "32px", textAlign: "center" }}>
        Component Library - Theme Page
      </HeadingLg>

      {/* Buttons Section */}
      <Card title="Buttons" style={{ marginBottom: "24px" }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <HeadingMd>Button Variants</HeadingMd>
            <Divider />
            <Space wrap>
              <BtnPrimary>BtnPrimary</BtnPrimary>
              <BtnLgPurple>BtnLgPurple</BtnLgPurple>
              <BtnMdGrey>BtnMdGrey</BtnMdGrey>
              <BtnMdWhite>BtnMdWhite</BtnMdWhite>
              <BtnSmWhite>BtnSmWhite</BtnSmWhite>
              <BtnSmPurple>BtnSmPurple</BtnSmPurple>
              <BtnSmGrey>BtnSmGrey</BtnSmGrey>
            </Space>
          </Col>


        </Row>
      </Card>

      {/* Text Components Section */}
      <Card title="Text Components" style={{ marginBottom: "24px" }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <HeadingMd>Text Variants</HeadingMd>
            <Divider />
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div>
                <HeadingLg>HeadingLg - Main Page Titles</HeadingLg>
                <MetaText>This is how HeadingLg looks</MetaText>
              </div>

              <div>
                <HeadingMd>HeadingMd - Section Headers</HeadingMd>
                <MetaText>This is how HeadingMd looks</MetaText>
              </div>

              <div>
                <MetaText>MetaText - For general paragraph content</MetaText>
                <MetaText>This is how MetaText looks</MetaText>
              </div>

              <div>
                <MetaTextPurple>MetaTextPurple - Purple colored text</MetaTextPurple>
                <MetaText>This is how MetaTextPurple looks (purple color)</MetaText>
              </div>

              <div>
                <SidebarLabel>SidebarLabel - For sidebar navigation</SidebarLabel>
                <MetaText>This is how SidebarLabel looks (blue color)</MetaText>
              </div>

              <div>
                <MetaText>TextTable - Table text styling</MetaText>
                <MetaText>This is how TextTable looks (object with font properties)</MetaText>
              </div>
            </Space>
          </Col>
        </Row>
      </Card>

      {/* Custom Form Example Section */}
      <Card title="Custom Form Example" style={{ marginBottom: "24px" }}>
        <Form>
          <FormItem label="First Name" name="firstName">
            <FormInput placeholder="Enter first name" />
          </FormItem>
          <FormItem label="Last Name" name="lastName">
            <FormInput placeholder="Enter last name" />
          </FormItem>
          <FormItem label="Nickname" name="nickname">
            <FormInput placeholder="Enter nickname" />
          </FormItem>
        </Form>
      </Card>

      {/* Password Reveal Example Section */}
      <Card title="Password Reveal Example" style={{ marginBottom: "24px" }}>
        <Form layout="vertical" style={{ maxWidth: 500 }}>
          <FormItem label="Password" name="password">
            <PasswordRevealInput placeholder="Password" />
          </FormItem>
        </Form>
      </Card>

      {/* Checkbox & Switch Components Section */}
      <Card
        title="Checkbox & Switch Components"
        style={{ marginBottom: "24px" }}
      >
        <Row gutter={[16, 40]}>
          <Col span={12}>
            <HeadingMd>Custom Checkbox</HeadingMd>
            <Divider />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <Checkbox>Live Quiz</Checkbox>
            </div>
          </Col>
          <Col span={12}>
            <HeadingMd>Custom Switch</HeadingMd>
            <Divider />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <CustomSwitch checked />
              <CustomSwitch />
            </div>
          </Col>
        </Row>
      </Card>

      {/* Form Components Section */}
      <Card title="Form Components" style={{ marginBottom: "24px" }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <HeadingMd>Form Inputs</HeadingMd>
            <Divider />
            <Form layout="vertical" style={{ maxWidth: "400px" }}>
              <FormItem label="Regular Input" name="regular">
                <FormInput placeholder="Enter text here..." />
              </FormItem>

              <FormItem label="Password Input" name="password">
                <FormInput.Password placeholder="Enter password..." />
              </FormItem>

              <FormItem label="Email Input" name="email">
                <FormInput type="email" placeholder="Enter email..." />
              </FormItem>

              <FormItem label="Number Input" name="number">
                <FormInput type="number" placeholder="Enter number..." />
              </FormItem>
            </Form>
          </Col>
        </Row>
      </Card>

      {/* Dropdown Components Section */}
      <Card title="Dropdown Components" style={{ marginBottom: "40px" }}>
        <Row gutter={[16, 40]}>
          <Col span={8}>
            <HeadingMd>Purple Dropdown</HeadingMd>
            <Divider />
            <DropdownPurple placeholder="Year">
              <DropdownOption value="2024">2024</DropdownOption>
              <DropdownOption value="2023">2023</DropdownOption>
              <DropdownOption value="2022">2022</DropdownOption>
            </DropdownPurple>
          </Col>
          <Col span={8}>
            <HeadingMd>Grey Dropdown</HeadingMd>
            <Divider />
            <DropdownGrey placeholder="Select option">
              <DropdownOption value="option1">Option 1</DropdownOption>
              <DropdownOption value="option2">Option 2</DropdownOption>
              <DropdownOption value="option3">Option 3</DropdownOption>
            </DropdownGrey>
          </Col>
          <Col span={8}>
            <HeadingMd>White Dropdown</HeadingMd>
            <Divider />
            <DropdownWhite placeholder="Choose option">
              <DropdownOption value="choice1">Choice 1</DropdownOption>
              <DropdownOption value="choice2">Choice 2</DropdownOption>
              <DropdownOption value="choice3">Choice 3</DropdownOption>
            </DropdownWhite>
          </Col>
        </Row>
      </Card>


    </div>
  );
};

export default ThemePage;
