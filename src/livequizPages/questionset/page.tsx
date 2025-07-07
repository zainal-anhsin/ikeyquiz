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
import { HeadingMd, MetaText } from "../../components/common/Text/Text";
import {
  BtnMdWhite,
  BtnSmWhite,
  BtnMdPurple,
} from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import Table from "../../components/common/Table/Table";
import {
  DropdownOption,
  DropdownWhite,
} from "../../components/common/Dropdown/Dropdown";
import QuestionSetModal from './modal';

interface DataType {
  key: React.Key;
  name: string;
  group: string;
  subject: string;
  question: number;
  remark: string;
  createdBy: string;
  action: string;
}

const QuestionSet = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const navigate = useNavigate();
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

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
    { title: "Group", dataIndex: "group", align: 'center', render: (text: string) => <div style={{ textAlign: 'center' }}>{text}</div> },
    { title: "Subject", dataIndex: "subject", align: 'center', render: (text: string) => <div style={{ textAlign: 'center' }}>{text}</div> },
    { title: "Question", dataIndex: "question", align: 'center', render: (text: number) => <div style={{ textAlign: 'center' }}>{text}</div> },
    {
      title: (
        <div style={{ textAlign: "center" }}>
          <div>Remark</div>
          <div>(Public/Hidden)</div>
        </div>
      ),
      dataIndex: "remark",
      render: (value: string) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BtnSmWhite onClick={() => navigate("")}>Edit</BtnSmWhite>
        </div>
      ),
    },
    {
      title: <div style={{ textAlign: "center" }}>Created By</div>,
      dataIndex: "createdBy",
      render: (value: string) => (
        <div style={{ textAlign: "center" }}>
          <div>{value}</div>
          <MetaText style={{ fontSize: 12, marginTop: "2px" }}>
            (May 29, 2025 4:29 PM)
          </MetaText>
        </div>
      ),
    },
    {
      title: <div style={{ textAlign: "center" }}>Action</div>,
      dataIndex: "action",
      render: () => (
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          <BtnSmWhite
            style={{ width: 40 }}
            onClick={() => setIsPreviewModalOpen(true)}
          >
            Preview
          </BtnSmWhite>
          <BtnSmWhite
            style={{ width: 40 }}
            onClick={() => navigate("/questionset/edit-question")}
          >
            Edit
          </BtnSmWhite>
        </div>
      ),
    },
  ];

  const tableData: DataType[] = Array.from({ length: 15 }).map((_, i) => ({
    key: `questionset-${i}`,
    name: "2025 English Year 6 (Test 1)",
    group: "Standard 1",
    subject: "English",
    question: 40,
    remark: "N/A",
    createdBy: "iKEY Support",
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
        <HeadingMd style={{ marginRight: 8 }}>Question Set</HeadingMd>
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
            <BtnMdPurple>
              <EditOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Bulk Edit
            </BtnMdPurple>
            <BtnMdWhite>
              <DeleteOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Bulk Remove
            </BtnMdWhite>
          </Space>
          {/* Right side: Cancel, Reset, Save */}
          <Space>
            <BtnMdWhite>
              <SearchOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Search Question Set
            </BtnMdWhite>
            <BtnMdWhite
              onClick={() => navigate("/questionset/upload-question")}
            >
              <UploadOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Upload Question Set
            </BtnMdWhite>
            <BtnMdWhite
              onClick={() => navigate("")}
            >
              <FileAddOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Create
            </BtnMdWhite>
          </Space>
        </div>
      </div>

      {/* Table Section */}
      <div style={{ marginTop: 34 }}>
        <div
          style={{
            marginBottom: 18,
            display: "flex",
            alignItems: "center",
            gap: 16,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <HeadingMd style={{ marginRight: 8 }}>Filter</HeadingMd>
            <Select
              mode="tags"
              size="large"
              style={{ width: 160 }}
              placeholder="Custom Group"
              options={[
                { value: "CG 1", label: "CG 1" },
                { value: "CG 2", label: "CG 2" },
              ]}
              onChange={(value) => console.log("selected", value)}
            />
            <Select
              mode="tags"
              size="large"
              style={{ width: 220 }}
              placeholder="Category"
              options={[
                { value: "Live Quiz", label: "Live Quiz" },
                { value: "Kosa Kata Spot+ (full)", label: "Kosa Kata" },
              ]}
              onChange={(value) => console.log("selected", value)}
            />
            <DropdownWhite
              placeholder="Classroom"
              size="large"
              style={{ width: 140 }}
              onChange={(value) => console.log("classroom", value)}
            >
              <DropdownOption value="SSR">SSR</DropdownOption>
              <DropdownOption value="SER">SER</DropdownOption>
            </DropdownWhite>
            <DropdownWhite
              placeholder="Group"
              size="large"
              style={{ width: 130 }}
              onChange={(value) => console.log("group", value)}
            >
              <DropdownOption value="Standard 1">Standard 1</DropdownOption>
              <DropdownOption value="Standard 2">Standard 2</DropdownOption>
              <DropdownOption value="Standard 3">Standard 3</DropdownOption>
            </DropdownWhite>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <HeadingMd style={{ marginRight: 8 }}>Sort By:</HeadingMd>
            <DropdownWhite
              placeholder="Select"
              size="large"
              style={{ width: 115 }}
              onChange={(value) => console.log("sort", value)}
            >
              <DropdownOption value="name-asc">A - Z</DropdownOption>
              <DropdownOption value="name-desc">Z - A</DropdownOption>
            </DropdownWhite>
          </div>
        </div>
        <Table<DataType>
          rowSelection={rowSelection}
          columns={columns}
          dataSource={tableData}
          rowKey="key"
        />
      </div>
      <QuestionSetModal open={isPreviewModalOpen} onCancel={() => setIsPreviewModalOpen(false)} />
    </div>
  );
};

export default QuestionSet;
