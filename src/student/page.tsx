import React, { useState } from "react";
import { Space, Breadcrumb, Select } from "antd";
import type { TableColumnsType } from "antd";
import {
  EditOutlined,
  SearchOutlined,
  UploadOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { SectionTitle } from "../components/common/Text/Text";
import { ButtonMediumWhitePurple } from "../components/common/Button/Button";
import Checkbox from "../components/common/Checkbox/Checkbox";
import { useNavigate } from "react-router-dom";
import Table from "../components/common/Table/Table";
import { tableData, DataType } from "./dataStudent";
import { DropdownGrey, DropdownOption } from "../components/common/Dropdown/Dropdown";

const Student = () => {
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
    {
      title: "Custom Group",
      dataIndex: "customGroup",
      render: (_: any, record: DataType) => (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox checked={record.customGroup.cg1} />
            <span
              style={{
                fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "#222",
              }}
            >
              CG 1
            </span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox checked={record.customGroup.cg2} />
            <span
              style={{
                fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "#222",
              }}
            >
              CG 2
            </span>
          </label>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (_: any, record: DataType) => (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox checked={record.category.liveQuiz} />
            <span
              style={{
                fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "#222",
              }}
            >
              Live Quiz
            </span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox checked={record.category.kosaKata} />
            <span
              style={{
                fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "#222",
              }}
            >
              Kosa Kata Spot+ (full)
            </span>
          </label>
        </div>
      ),
    },
    { title: "Classroom", dataIndex: "classroom" },
    { title: "Group", dataIndex: "group" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <ButtonMediumWhitePurple
          onClick={() => navigate("/student/edit-student")}
        >
          Edit
        </ButtonMediumWhitePurple>
      ),
    },
  ];

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
            <a href="/student" style={{ color: "#222", fontWeight: 600 }}>
              Student
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
              <EditOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Custom Group
            </ButtonMediumWhitePurple>
          </Space>
          {/* Right side: Cancel, Reset, Save */}
          <Space>
            <ButtonMediumWhitePurple style={{ width: 180 }}>
              <SearchOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Search Student
            </ButtonMediumWhitePurple>
            <ButtonMediumWhitePurple style={{ width: 180 }}
              onClick={() => navigate("/student/upload-student")}
            >
              <UploadOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Upload Student
            </ButtonMediumWhitePurple>
            <ButtonMediumWhitePurple style={{ width: 150 }}
              onClick={() => navigate("/student/add-student")}
            >
              <FileAddOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Add Student
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

export default Student;
