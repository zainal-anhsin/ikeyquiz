import React, { useState } from "react";
import { Space, Breadcrumb, Select } from "antd";
import type { TableColumnsType } from "antd";
import {
  EditOutlined,
  SearchOutlined,
  UploadOutlined,
  FileAddOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { SectionTitle, MetaText } from "../components/common/Text/Text";
import { ButtonMediumWhitePurple, BtnSmWhite } from "../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import Table from "../components/common/Table/Table";
import { DropdownGrey, DropdownOption } from "../components/common/Dropdown/Dropdown";
import CustomSwitch from "../components/common/Switch/Switch";

interface DataType {
  key: React.Key;
  name: string;
  displayOrder: number;
  active: boolean;
  remark: string;
  display: boolean;
  action: string;
}

const QuestionSet = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const navigate = useNavigate();

  const onSelectChange = (
    newSelectedRowKeys: React.Key[],
    selectedRows: DataType[]
  ) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    console.log("selectedRows: ", selectedRows);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "index",
      render: (_: any, __: DataType, index: number) => index + 1,
      width: 60,
    },
    { title: "Name", dataIndex: "name" },
    { title: "Display Order", dataIndex: "displayOrder" },
    {
      title: "Active",
      dataIndex: "active",
      render: (value: boolean) => <CustomSwitch checked={value} />,
    },
    {
      title: "Remark",
      dataIndex: "remark",
      render: () => (
        <BtnSmWhite style={{ minWidth: 60 }}>Edit</BtnSmWhite>
      ),
    },
    {
      title: "Display",
      dataIndex: "display",
      render: (value: boolean) => <CustomSwitch checked={value} />,
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>Action</div>
      ),
      dataIndex: "action",
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          <BtnSmWhite style={{ minWidth: 60 }}>Edit</BtnSmWhite>
        </div>
      ),
    },
  ];

  const tableData: DataType[] = Array.from({ length: 15 }).map((_, i) => ({
    key: `questionset-${i}`,
    name: "Form 5 (Batch 2025)",
    displayOrder: Math.floor(Math.random() * 5) + 1,
    active: i % 2 === 0,
    remark: "Edit",
    display: i % 3 === 0,
    action: "edit",
  }));

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
            <a href="/questionset" style={{ color: "#222", fontWeight: 600 }}>
              Question Set
            </a>
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
            <ButtonMediumWhitePurple
              style={{ background: "#7c3aed", color: "white", width: 120 }}
            >
              <EditOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Bulk Edit
            </ButtonMediumWhitePurple>
            <ButtonMediumWhitePurple style={{ width: 170 }}>
              <DeleteOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Bulk Remove
            </ButtonMediumWhitePurple>
          </Space>
          {/* Right side: Cancel, Reset, Save */}
          <Space>
            <ButtonMediumWhitePurple style={{ width: 220 }}>
              <SearchOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Search Question Set
            </ButtonMediumWhitePurple>
            <ButtonMediumWhitePurple style={{ width: 220 }}
              onClick={() => navigate("/questionset/upload-question")}
            >
              <UploadOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Upload Question Set
            </ButtonMediumWhitePurple>
            <ButtonMediumWhitePurple style={{ width: 120 }}
              onClick={() => navigate("")}
            >
              <FileAddOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Create
            </ButtonMediumWhitePurple>
          </Space>
        </div>
      </div>

      {/* Table Section */}
      <div style={{ marginTop: 34 }}>
        <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <SectionTitle style={{ marginRight: 8 }}>Filter</SectionTitle>
            <Select
              mode="tags"
              size="large"
              style={{ width: 160 }}
              placeholder="Custom Group"
              options={[
                { value: 'CG 1', label: 'CG 1' },
                { value: 'CG 2', label: 'CG 2' },
              ]}
              onChange={(value) => console.log('selected', value)}
            />
            <Select
              mode="tags"
              size="large"
              style={{ width: 220 }}
              placeholder="Category"
              options={[
                { value: 'Live Quiz', label: 'Live Quiz' },
                { value: 'Kosa Kata Spot+ (full)', label: 'Kosa Kata'},
              ]}
              onChange={(value) => console.log('selected', value)}
            />
            <DropdownGrey placeholder="Classroom" size="large" style={{ width: 140 }} onChange={value => console.log('classroom', value)}>
              <DropdownOption value="SSR">SSR</DropdownOption>
              <DropdownOption value="SER">SER</DropdownOption>
            </DropdownGrey>
            <DropdownGrey placeholder="Group" size="large" style={{ width: 130 }} onChange={value => console.log('group', value)}>
              <DropdownOption value="Standard 1">Standard 1</DropdownOption>
              <DropdownOption value="Standard 2">Standard 2</DropdownOption>
              <DropdownOption value="Standard 3">Standard 3</DropdownOption>
            </DropdownGrey>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <SectionTitle style={{ marginRight: 8 }}>Sort By:</SectionTitle>
            <DropdownGrey placeholder="Select" size="large" style={{ width: 115 }} onChange={value => console.log('sort', value)}>
              <DropdownOption value="name-asc">A - Z</DropdownOption>
              <DropdownOption value="name-desc">Z - A</DropdownOption>
            </DropdownGrey>
          </div>
        </div>
        <Table<DataType>
          rowSelection={rowSelection}
          columns={columns}
          dataSource={tableData}
          rowKey="key"
        />
      </div>
    </div>
  );
};

export default QuestionSet;
