import React from "react";
import { Card, Divider, Space, Row, Col } from "antd";
import {
  ButtonPrimary,
  ButtonRectangle,
  ButtonJoin,
  ButtonGrey,
  ButtonMediumGrey,
  ButtonMediumWhitePurple,
  BtnSmWhite,
} from "../../components/common/Button/Button";
import {
  HeadingLg,
  SubLabel,
  SectionTitle,
  TimeText,
  TabText,
  SidebarLabel,
  MetaText,
} from "../../components/common/Text/Text";
import { Form, FormItem, FormInput, PasswordRevealInput } from "../../components/common/Form/Form";
import {
  DropdownPurple,
  DropdownGrey,
  DropdownOption,
} from "../../components/common/Dropdown/Dropdown";
import Checkbox from "../../components/common/Checkbox/Checkbox";
import CustomSwitch from "../../components/common/Switch/Switch";
import CustomDatePicker from "../../components/common/DatePicker/datePicker";

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
            <SectionTitle>Button Variants</SectionTitle>
            <Divider />
            <Space wrap>
              <ButtonPrimary>Primary Button</ButtonPrimary>
              <ButtonRectangle>Rectangle Button</ButtonRectangle>
              <ButtonMediumGrey>Medium Grey</ButtonMediumGrey>
              <ButtonMediumWhitePurple>Medium White Purple</ButtonMediumWhitePurple>
              <BtnSmWhite>Small White Purple</BtnSmWhite>
              <ButtonJoin>Join Button</ButtonJoin>
              <ButtonGrey>Grey Button</ButtonGrey>
            </Space>
          </Col>

          <Col span={24}>
            <SectionTitle>Button States</SectionTitle>
            <Divider />
            <Space wrap>
              <ButtonPrimary disabled>Disabled Primary</ButtonPrimary>
              <ButtonRectangle disabled>Disabled Rectangle</ButtonRectangle>
              <ButtonJoin disabled>Disabled Join</ButtonJoin>
              <ButtonGrey disabled>Disabled Grey</ButtonGrey>
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
            <SectionTitle>Custom Checkbox</SectionTitle>
            <Divider />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <Checkbox>Live Quiz</Checkbox>
            </div>
          </Col>
          <Col span={12}>
            <SectionTitle>Custom Switch</SectionTitle>
            <Divider />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <CustomSwitch checked />
              <CustomSwitch />
            </div>
          </Col>
        </Row>
      </Card>
      {/* Text Components Section */}
      <Card title="Text Components" style={{ marginBottom: "24px" }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <SectionTitle>Text Variants</SectionTitle>
            <Divider />
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div>
                <HeadingLg>Heading Large - Main Page Titles</HeadingLg>
                <MetaText>This is how HeadingLg looks</MetaText>
              </div>

              <div>
                <SectionTitle>Section Title - For Section Headers</SectionTitle>
                <MetaText>This is how SectionTitle looks</MetaText>
              </div>

              <div>
                <SubLabel>Sub Label - For Secondary Information</SubLabel>
                <MetaText>This is how SubLabel looks</MetaText>
              </div>

              <div>
                <MetaText>Meta Text - For general paragraph content</MetaText>
                <MetaText>This is how MetaText looks</MetaText>
              </div>

              <div>
                <TimeText>Time Text - For time-related information</TimeText>
                <MetaText>This is how TimeText looks (purple color)</MetaText>
              </div>

              <div>
                <TabText>Tab Text - For tab navigation</TabText>
                <MetaText>This is how TabText looks (purple color)</MetaText>
              </div>

              <div>
                <SidebarLabel>
                  Sidebar Label - For sidebar navigation
                </SidebarLabel>
                <MetaText>
                  This is how SidebarLabel looks (purple color)
                </MetaText>
              </div>
            </Space>
          </Col>
        </Row>
      </Card>

      {/* Form Components Section */}
      <Card title="Form Components" style={{ marginBottom: "24px" }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <SectionTitle>Form Inputs</SectionTitle>
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
      <Card title="Dropdown Components" style={{ marginBottom: "24px" }}>
        <Row gutter={[16, 40]}>
          <Col span={12}>
            <SectionTitle>Purple Dropdown</SectionTitle>
            <Divider />
            <DropdownPurple placeholder="Year">
              <DropdownOption value="2024">2024</DropdownOption>
              <DropdownOption value="2023">2023</DropdownOption>
              <DropdownOption value="2022">2022</DropdownOption>
            </DropdownPurple>
          </Col>
          <Col span={12}>
            <SectionTitle>Grey Dropdown</SectionTitle>
            <Divider />
            <DropdownGrey placeholder="Select">
              <DropdownOption value="option1">Option 1</DropdownOption>
              <DropdownOption value="option2">Option 2</DropdownOption>
              <DropdownOption value="option3">Option 3</DropdownOption>
            </DropdownGrey>
          </Col>
        </Row>
      </Card>

      {/* Date Picker Components Section */}
      <Card title="Date Picker Components" style={{ marginBottom: "24px" }}>
        <Row gutter={[16, 40]}>
          <Col span={12}>
            <SectionTitle>Date Only Picker</SectionTitle>
            <Divider />
            <CustomDatePicker 
              placeholder="Select date"
              onChange={(date, dateStr) => {
                console.log('Date selected:', dateStr);
              }}
            />
          </Col>
          <Col span={12}>
            <SectionTitle>Date & Time Picker</SectionTitle>
            <Divider />
            <CustomDatePicker 
              showTime
              placeholder="Select date and time"
              onChange={(date, dateStr) => {
                console.log('Date and time selected:', dateStr);
              }}
            />
          </Col>
        </Row>
      </Card>

      {/* Color Palette Section */}
      <Card title="Color Palette" style={{ marginBottom: "24px" }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <SectionTitle>Primary Colors</SectionTitle>
            <Divider />
            <Space wrap>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#7c3aed",
                    borderRadius: "8px",
                    marginBottom: "8px",
                  }}
                ></div>
                <MetaText>Primary Purple</MetaText>
                <MetaText>#7c3aed</MetaText>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#7c64e2",
                    borderRadius: "8px",
                    marginBottom: "8px",
                  }}
                ></div>
                <MetaText>Sidebar Purple</MetaText>
                <MetaText>#7c64e2</MetaText>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#a78bfa",
                    borderRadius: "8px",
                    marginBottom: "8px",
                  }}
                ></div>
                <MetaText>Light Purple</MetaText>
                <MetaText>#a78bfa</MetaText>
              </div>
            </Space>
          </Col>

          <Col span={24}>
            <SectionTitle>Text Colors</SectionTitle>
            <Divider />
            <Space direction="vertical" size="small">
              <div style={{ color: "#222" }}>Primary Text (#222)</div>
              <div style={{ color: "#333" }}>Section Title (#333)</div>
              <div style={{ color: "#555" }}>Meta Text (#555)</div>
              <div style={{ color: "#666" }}>Sub Label (#666)</div>
            </Space>
          </Col>

          <Col span={24}>
            <SectionTitle>Background Colors</SectionTitle>
            <Divider />
            <Space wrap>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#f8f8fa",
                    borderRadius: "8px",
                    marginBottom: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                ></div>
                <MetaText>Light Grey</MetaText>
                <MetaText>#f8f8fa</MetaText>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#f5f6fa",
                    borderRadius: "8px",
                    marginBottom: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                ></div>
                <MetaText>Grey Background</MetaText>
                <MetaText>#f5f6fa</MetaText>
              </div>
            </Space>
          </Col>
        </Row>
      </Card>

      {/* Usage Examples Section */}
      <Card title="Usage Examples" style={{ marginBottom: "24px" }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <SectionTitle>Card Example</SectionTitle>
            <Divider />
            <div
              style={{
                background: "#f8f8fa",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid #e5e7eb",
              }}
            >
              <HeadingLg style={{ marginBottom: "8px" }}>Card Title</HeadingLg>
              <MetaText style={{ marginBottom: "16px" }}>
                This is an example of how components work together in a card
                layout.
              </MetaText>
              <Space>
                <ButtonJoin>Action</ButtonJoin>
                <ButtonGrey>Cancel</ButtonGrey>
              </Space>
            </div>
          </Col>

          <Col span={12}>
            <SectionTitle>Form Example</SectionTitle>
            <Divider />
            <Form layout="vertical">
              <FormItem label="Username" name="username">
                <FormInput placeholder="Enter username" />
              </FormItem>
              <FormItem label="Password" name="password">
                <FormInput.Password placeholder="Enter password" />
              </FormItem>
              <ButtonPrimary style={{ width: "100%" }}>Submit</ButtonPrimary>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ThemePage;
