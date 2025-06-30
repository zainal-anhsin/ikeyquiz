import React, { useState } from "react";
import { Space, Breadcrumb, Select } from "antd";
import type { TableColumnsType } from "antd";
import {
  FileAddOutlined,
  DownloadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { SectionTitle } from "../../components/common/Text/Text";
import { ButtonMediumWhitePurple, BtnSmWhite } from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import Table from "../../components/common/Table/Table";
import { DropdownGrey, DropdownOption } from "../../components/common/Dropdown/Dropdown";
import { MetaText } from "../../components/common/Text/Text";

interface DataType {
  key: React.Key;
  createdDate: string;
  info: string;
  action: string;
}

const RoomResult = () => {
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
    {
      title: "Created Date",
      dataIndex: "createdDate",
      render: (value: string) => (
        <div style={{ textAlign: 'left' }}>
          <div>{value}</div>
          <MetaText style={{ fontSize: 12, marginTop: '2px' }}>
            4:29:37 AM
          </MetaText>
        </div>
      ),
    },
    {
      title: "Info",
      dataIndex: "info",
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>Action</div>
      ),
      dataIndex: "action",
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22 }}>
          <DownloadOutlined style={{ color: '#7c3aed', fontSize: 22, cursor: 'pointer' }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
          <DeleteOutlined style={{ color: '#7c3aed', fontSize: 22, cursor: 'pointer' }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
          <BtnSmWhite>View</BtnSmWhite>
        </div>
      ),
    },
  ];

  const tableData: DataType[] = Array.from({ length: 15 }).map((_, i) => ({
    key: `room-result-${i}`,
    createdDate: "May 29, 2025",
    info: "Sample File Name: RoomsResultReport_(Demo-School)_(2025-03-08_09-59-38)",
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
        <SectionTitle style={{ marginRight: 8 }}>Report</SectionTitle>
        <span style={{ fontWeight: 400, color: "black", fontSize: 14 }}>|</span>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <a href="/dashboard" style={{ color: "#8c98a4" }}>
              Home
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/" style={{ color: "#8c98a4" }}>
              Report
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/report/roomResult" style={{ color: "#222", fontWeight: 600 }}>
              Room Result
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
            justifyContent: "flex-end",
          }}
        >
          {/* Right side: Cancel, Reset, Save */}
          <Space>
            <ButtonMediumWhitePurple style={{ width: 200 }}
              onClick={() => navigate("")}
            >
              <FileAddOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              Generate Report
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

export default RoomResult;
