import React from "react";
import {Space} from "antd";
import { DownloadOutlined, UndoOutlined } from "@ant-design/icons";
import { ButtonRectangle, ButtonMediumGrey } from "../components/common/Button/Button";
import {
  DropdownPurple,
  DropdownOption,
} from "../components/common/Dropdown/Dropdown";
import Chart1 from './charts/chart1';
import Chart2 from './charts/chart2';
import Chart3 from './charts/chart3';

const yearOptions = [
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
];
const monthOptions = [
  { value: "", label: "Month" },
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];
const groupOptions = [
  { value: "classA", label: "Class A" },
  { value: "classB", label: "Class B" },
];
const subjectOptions = [
  { value: "english", label: "English" },
  { value: "japan", label: "Japan" },
];

const page = () => {
  return (
    <div>
      <div style={{ background: "#f2f6fe", minHeight: "2vh", padding: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <DropdownPurple placeholder="Year" style={{ width: 140 }}>
            {yearOptions.map((opt) => (
              <DropdownOption key={opt.value} value={opt.value}>
                {opt.label}
              </DropdownOption>
            ))}
          </DropdownPurple>
          <DropdownPurple placeholder="Month" style={{ width: 140 }}>
            {monthOptions.map((opt) => (
              <DropdownOption key={opt.value} value={opt.value}>
                {opt.label}
              </DropdownOption>
            ))}
          </DropdownPurple>
          <DropdownPurple placeholder="Group" style={{ width: 180 }}>
            {groupOptions.map((opt) => (
              <DropdownOption key={opt.value} value={opt.value}>
                {opt.label}
              </DropdownOption>
            ))}
          </DropdownPurple>
          <DropdownPurple placeholder="Subject" style={{ width: 260 }}>
            {subjectOptions.map((opt) => (
              <DropdownOption key={opt.value} value={opt.value}>
                {opt.label}
              </DropdownOption>
            ))}
          </DropdownPurple>
          <div style={{ flex: 1 }} />
          <Space>
            <ButtonMediumGrey>
              <UndoOutlined
                style={{ marginRight: 8 }}
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Reset
            </ButtonMediumGrey>
            <ButtonRectangle>
              <DownloadOutlined
                style={{ marginRight: 8, fontSize: 16, fontWeight: 'bold' }}
                onPointerOverCapture={undefined}
                onPointerLeave={undefined}
              />
              Download Report
            </ButtonRectangle>
          </Space>
        </div>
      </div>
      {/* Charts Row */}
      <div style={{ display: 'flex', gap: 40, marginTop: 48, justifyContent: 'center', alignItems: 'stretch' }}>
        <div style={{ width: 340, height: 260 }}><Chart1 /></div>
        <div style={{ width: 340, height: 260 }}><Chart2 /></div>
        <div style={{ width: 340, height: 260 }}><Chart3 /></div>
      </div>
    </div>
  );
};

export default page;
