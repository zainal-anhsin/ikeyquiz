import React, { useState } from "react";
import { Space, Breadcrumb, Table, Button } from "antd";
import type { TableColumnsType, TableProps } from 'antd';
import {
  EditOutlined,
  SearchOutlined,
  UploadOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { SectionTitle } from "../components/common/Text/Text";
import {
  ButtonMediumWhitePurple,
} from "../components/common/Button/Button";

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string;
  customGroup: string;
  category: string;
  classroom: string;
  group: string;
  email: string;
  action: string;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Custom Group', dataIndex: 'customGroup' },
  { title: 'Category', dataIndex: 'category' },
  { title: 'Classroom', dataIndex: 'classroom' },
  { title: 'Group', dataIndex: 'group' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Action', dataIndex: 'action' },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: 'alibaba',
  customGroup: 'class A',
  category: 'live quiz',
  classroom: 'ssr',
  group: 'standard 1',
  email: 'ali@gmail.com',
  action: 'edit',
}));

const Student = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

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
              style={{ background: "#7c3aed", color: "white" }}
            >
              <EditOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Bulk Edit
            </ButtonMediumWhitePurple>
            <ButtonMediumWhitePurple>
              <EditOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Custom Group
            </ButtonMediumWhitePurple>
          </Space>
          {/* Right side: Cancel, Reset, Save */}
          <Space>
            <ButtonMediumWhitePurple>
              <SearchOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Search Student
            </ButtonMediumWhitePurple>
            <ButtonMediumWhitePurple>
              <UploadOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Upload Student
            </ButtonMediumWhitePurple>
            <ButtonMediumWhitePurple>
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
      <div style={{ padding: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
              Reload
            </Button>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
          </div>
          <Table<DataType> rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
        </div>
      </div>
    </div>
  );
};

export default Student;
