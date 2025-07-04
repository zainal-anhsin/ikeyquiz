import React from "react";
import { Row, Col } from "antd";
import {
  HeadingLg,
} from "../../../../components/common/Text/Text";
import { Form, FormItem, FormInput } from "../../../../components/common/Form/Form";
import {
  DropdownWhite,
  DropdownOption,
} from "../../../../components/common/Dropdown/Dropdown";

const SettingQuestion = () => {
  return (
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
              <DropdownWhite placeholder="Select">
                <DropdownOption value="A">Group A</DropdownOption>
                <DropdownOption value="B">Group B</DropdownOption>
                <DropdownOption value="C">Group C</DropdownOption>
              </DropdownWhite>
            </FormItem>
            </Col>
          </Row>
          <Row gutter={32}>
            <Col span={12}>
            <FormItem label="Subject" name="subject">
              <DropdownWhite placeholder="Select">
                <DropdownOption value="A">Subject A</DropdownOption>
                <DropdownOption value="B">Subject B</DropdownOption>
                <DropdownOption value="C">Subject C</DropdownOption>
              </DropdownWhite>
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
  );
};

export default SettingQuestion;
