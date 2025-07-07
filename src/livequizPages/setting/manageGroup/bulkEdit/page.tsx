import React from "react";
import { Row, Col, Space, Breadcrumb } from "antd";
import { SaveOutlined, UndoOutlined, CloseOutlined } from "@ant-design/icons";
import {
  Form,
  FormItem,
  FormInput,
} from "../../../../components/common/Form/Form";
import { HeadingLg, HeadingMd } from "../../../../components/common/Text/Text";
import Divider from "../../../../components/common/Divider/Divider";
import {
  BtnMdWhite,
  BtnMdGrey,
  BtnMdPurple,
} from "../../../../components/common/Button/Button";
import Checkbox from "../../../../components/common/Checkbox/Checkbox";
import CustomDatePicker from "../../../../components/common/DatePicker/datePicker";

const bulkEdit = () => {
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
        <HeadingMd style={{ marginRight: 8 }}>Setting</HeadingMd>
        <span style={{ fontWeight: 400, color: "black", fontSize: 14 }}>|</span>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <a href="/dashboard" style={{ color: "#8c98a4" }}>
              Home
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/" style={{ color: "#8c98a4" }}>
              Setting
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/setting/manage-group" style={{ color: "#8c98a4" }}>
              Manage Group
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span style={{ color: "#222", fontWeight: 600 }}>Bulk Edit</span>
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
          Bulk Edit
        </HeadingLg>

        <Form style={{ maxWidth: "800px" }}>
          <Row gutter={32}>
            <Col span={12}>
              <FormItem label="Effective Date Start" name="effectiveDateStart">
              <CustomDatePicker
                  showTime
                  placeholder="Select date and time"
                  onChange={(date, dateStr) => {
                    console.log("Date and time selected:", dateStr);
                  }}
                />{" "}              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Effective Date End" name="effectiveDateEnd">
                <CustomDatePicker
                  showTime
                  placeholder="Select date and time"
                  onChange={(date, dateStr) => {
                    console.log("Date and time selected:", dateStr);
                  }}
                />{" "}
              </FormItem>
            </Col>
          </Row>
          <Row gutter={32}>
            <Col span={24} style={{ marginTop: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <HeadingMd style={{ margin: 0, minWidth: 120 }}>
                  Display Order
                </HeadingMd>
                <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
                  <FormInput
                    style={{ width: 160 }}
                    placeholder="Display Order"
                    defaultValue={0}
                  />
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 24 }}
                  >
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontWeight: 500,
                        fontSize: 17,
                        margin: 0,
                      }}
                    >
                      Active <Checkbox defaultChecked />
                    </label>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontWeight: 500,
                        fontSize: 17,
                        margin: 0,
                      }}
                    >
                      Display <Checkbox defaultChecked />
                    </label>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={32}>
            <Col span={12} style={{ marginTop: "40px" }}>
              <FormItem label="Remarks" name="remarks">
                <FormInput.TextArea
                  placeholder=""
                  style={{ height: "100px", resize: "vertical" }}
                />
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

export default bulkEdit;
