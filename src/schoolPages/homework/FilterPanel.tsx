import React, { useState } from 'react';
import { Button, Divider} from 'antd';
import { SectionTitle, MetaText } from '../../components/common/Text/Text';
import { ReloadOutlined } from '@ant-design/icons';

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'A - Z', value: 'az' },
  { label: 'Z - A', value: 'za' },
];

const subjects = [
  { label: 'All', value: 'all' },
  { label: 'BM', value: 'bm' },
  { label: 'EN', value: 'en' },
  { label: 'CN', value: 'cn' },
  { label: 'Scn', value: 'scn' },
  { label: 'Math', value: 'math' },
  { label: 'Moral', value: 'moral' },
  { label: 'Music', value: 'music' },
];

const years = [
  { label: '2025', value: '2025' },
  { label: '2024', value: '2024' },
  { label: '2023', value: '2023' },
];

const months = [
  { label: 'Select', value: '' },
  { label: 'January', value: '1' },
  { label: 'February', value: '2' },
  { label: 'March', value: '3' },
  { label: 'April', value: '4' },
  { label: 'May', value: '5' },
  { label: 'June', value: '6' },
  { label: 'July', value: '7' },
  { label: 'August', value: '8' },
  { label: 'September', value: '9' },
  { label: 'October', value: '10' },
  { label: 'November', value: '11' },
  { label: 'December', value: '12' },
];

// Add type for props
interface FilterPanelProps {
  onReset: () => void;
}

const FilterPanel = ({ onReset }: FilterPanelProps) => {
  const [selectedSort, setSelectedSort] = useState('newest');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [isResetActive, setIsResetActive] = useState(false);

  const handleSortClick = (value: string) => {
    setSelectedSort(value);
    setIsResetActive(true);
  };

  const handleSubjectClick = (value: string) => {
    setSelectedSubject(value);
    setIsResetActive(true);
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    setIsResetActive(true);
  };

  const handleMonthChange = (value: string) => {
    setSelectedMonth(value);
    setIsResetActive(true);
  };

  const handleReset = () => {
    setSelectedSort('newest');
    setSelectedSubject('all');
    setSelectedYear('2025');
    setSelectedMonth('');
    setIsResetActive(false);
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      padding: 24,
      border: '1.5px solid #ede9fe',
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1000,
      minWidth: 320,
      maxWidth: 360,
    }}>
      <div style={{ marginBottom: 18 }}>
        <SectionTitle>Sort by</SectionTitle>
        <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
          {sortOptions.map(opt => (
            <Button 
              key={opt.value} 
              type={opt.value === selectedSort ? 'primary' : 'default'} 
              onClick={() => handleSortClick(opt.value)}
              style={{ 
                borderRadius: 8, 
                background: opt.value === selectedSort ? '#7c3aed' : '#f5f6fa', 
                color: opt.value === selectedSort ? '#fff' : '#222', 
                border: 'none', 
                minWidth: 70, 
                height: 36, 
                padding: 0 
              }}
            >
              <MetaText style={{ color: opt.value === selectedSort ? '#fff' : '#222', fontWeight: 500 }}>{opt.label}</MetaText>
            </Button>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: 18 }}>
        <SectionTitle>Subject</SectionTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
          {subjects.map((subj) => (
            <Button 
              key={subj.value} 
              type={subj.value === selectedSubject ? 'primary' : 'default'} 
              onClick={() => handleSubjectClick(subj.value)}
              style={{ 
                borderRadius: 8, 
                background: subj.value === selectedSubject ? '#7c3aed' : '#f5f6fa', 
                color: subj.value === selectedSubject ? '#fff' : '#222', 
                border: 'none', 
                minWidth: 60, 
                height: 36, 
                padding: 0 
              }}
            >
              <MetaText style={{ color: subj.value === selectedSubject ? '#fff' : '#222', fontWeight: 500 }}>{subj.label}</MetaText>
            </Button>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
        <div style={{ flex: 1 }}>
          <SectionTitle>Year</SectionTitle>
          <select
            value={selectedYear}
            onChange={(e) => handleYearChange(e.target.value)}
            style={{
              width: '100%',
              marginTop: 8,
              borderRadius: 8,
              height: 40,
              border: '1.5px solid #a78bfa',
              background: '#fff',
              fontWeight: 700,
              color: '#222',
              padding: '0 12px',
              fontSize: 16,
              outline: 'none',
              appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              boxSizing: 'border-box',
            }}
          >
            {years.map((y) => (
              <option key={y.value} value={y.value}>
                {y.label}
              </option>
            ))}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <SectionTitle>Month</SectionTitle>
          <select
            value={selectedMonth}
            onChange={(e) => handleMonthChange(e.target.value)}
            style={{
              width: '100%',
              marginTop: 8,
              borderRadius: 8,
              height: 40,
              border: '1.5px solid #a78bfa',
              background: '#fff',
              color: '#222',
              fontWeight: 700,
              padding: '0 12px',
              fontSize: 16,
              outline: 'none',
              appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              boxSizing: 'border-box',
            }}
          >
            {months.map((m) => (
              <option key={m.value} value={m.value} disabled={m.value === ''}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Divider style={{ margin: '18px -24px 0 -24px' }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          background: '#f5f6fa',
          margin: '0 -24px -24px -24px',
          padding: '12px 24px',
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      >
        <span
          onClick={isResetActive ? handleReset : undefined}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: isResetActive ? '#7c3aed' : '#bbb',
            fontWeight: 600,
            fontSize: 16,
            cursor: isResetActive ? 'pointer' : 'default',
            gap: 6,
            background: 'none',
            border: 'none',
            boxShadow: 'none',
            padding: 0,
          }}
        >
          <span>Reset</span>
          <ReloadOutlined onPointerOverCapture={() => {}} onPointerLeave={() => {}} style={{ fontSize: 18 }} />
        </span>
      </div>
    </div>
  );
};

export default FilterPanel; 