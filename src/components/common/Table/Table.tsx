import React from 'react';
import { Table as AntTable, TableProps } from 'antd';
import { createGlobalStyle, styled } from 'styled-components';

// Global style override for AntD checkbox color
const PurpleCheckboxStyle = createGlobalStyle`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #7c3aed !important;
    border-color: #7c3aed !important;
  }
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #7c3aed !important;
  }
`;

// Custom style for table rows: remove hover, alternate row color, header white, header top border
const StyledTableWrapper = styled.div`
  .ant-table-thead > tr > th {
    background: #fff !important;
    border-top: 1px solid #e5eaf3 !important;
  }
  .ant-table-tbody > tr {
    transition: none !important;
  }
  .ant-table-tbody > tr:hover > td {
    background: none !important;
  }
  .ant-table-tbody > tr:nth-child(odd) > td {
    background: #f6f8fe !important;
  }
  .ant-table-tbody > tr:nth-child(even) > td {
    background: #fff !important;
  }
  .ant-table-tbody > tr.ant-table-row-selected > td {
    background: #e6f4ff !important;
  }
`;

function Table<T extends object = any>(props: TableProps<T>) {
  return (
    <StyledTableWrapper>
      <PurpleCheckboxStyle />
      <AntTable
        {...props}
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '15', '20'],
          position: ['bottomRight'],
        }}
      />
    </StyledTableWrapper>
  );
}

export default Table;
