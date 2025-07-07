import React, { useState } from "react";
import { Space, Breadcrumb} from "antd";
import type { TableColumnsType } from "antd";
import {
  EditOutlined,
  FileAddOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { HeadingMd } from "../../../components/common/Text/Text";
import { BtnMdWhite, BtnSmWhite, BtnMdPurple } from "../../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import Table from "../../../components/common/Table/Table";
import { DropdownWhite, DropdownOption } from "../../../components/common/Dropdown/Dropdown";
import CustomSwitch from "../../../components/common/Switch/Switch";

interface DataType {
  key: React.Key;
  name: string;
  displayOrder: number;
  active: boolean;
  remark: string;
  action: string;
  display: boolean;
}

const ManageGroup = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const navigate = useNavigate();
  const [switchStates, setSwitchStates] = useState(
    Array.from({ length: 15 }).map((_, i) => ({
      active: i % 2 === 0,
      display: i % 3 === 0,
    }))
  );

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
      align: 'center',
    },
    { title: "Name", dataIndex: "name", align: 'center' },
    { title: "Display Order", dataIndex: "displayOrder", align: 'center' },
    {
      title: "Active",
      dataIndex: "active",
      align: 'center',
      render: (_: boolean, record: DataType, index: number) => (
        <CustomSwitch
          checked={switchStates[index].active}
          onChange={checked => {
            const newStates = [...switchStates];
            newStates[index].active = checked;
            setSwitchStates(newStates);
          }}
        />
      ),
    },
    {
      title: "Remark",
      dataIndex: "remark",
      align: 'center',
      render: () => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <BtnSmWhite style={{ minWidth: 60 }}>View</BtnSmWhite>
        </div>
      ),
    },
    {
      title: "Display",
      dataIndex: "display",
      align: 'center',
      render: (_: boolean, record: DataType, index: number) => (
        <CustomSwitch
          checked={switchStates[index].display}
          onChange={checked => {
            const newStates = [...switchStates];
            newStates[index].display = checked;
            setSwitchStates(newStates);
          }}
        />
      ),
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>Action</div>
      ),
      dataIndex: "action",
      align: 'center',
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          <BtnSmWhite>
            <DeleteOutlined style={{ fontSize: '14px', fontWeight: 'bold' }} onPointerOverCapture={undefined} onPointerLeave={undefined} />
          </BtnSmWhite>
          <BtnSmWhite onClick={() => navigate('/setting/manage-group/bulk-edit')}>Edit</BtnSmWhite>
        </div>
      ),
    },
  ];

  const tableData: DataType[] = Array.from({ length: 15 }).map((_, i) => ({
    key: `questionset-${i}`,
    name: "Form 5 (Batch 2025)",
    displayOrder: Math.floor(Math.random() * 5) + 1,
    active: switchStates[i]?.active ?? false,
    remark: "View",
    display: switchStates[i]?.display ?? false,
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
            <a href="/setting/manageGroup" style={{ color: "#222", fontWeight: 600 }}>
              Manage Group
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
            <BtnMdWhite
              onClick={() => navigate("")}
            >
              <FileAddOutlined
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Add New
            </BtnMdWhite>
          </Space>
        </div>
      </div>

      {/* Table Section */}
      <div style={{ marginTop: 34 }}>
        <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <HeadingMd style={{ marginRight: 8 }}>Sort By:</HeadingMd>
            <DropdownWhite placeholder="Select" size="large" style={{ width: 115 }} onChange={value => console.log('sort', value)}>
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
    </div>
  );
};

export default ManageGroup;
