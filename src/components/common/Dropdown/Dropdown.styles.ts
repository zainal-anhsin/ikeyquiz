import styled, { css } from 'styled-components';
import { Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const commonSelectStyles = css`
  height: 44px !important;
  width: 100%;
  
  .ant-select-selector {
    border-radius: 8px !important;
    height: 44px !important;
    padding: 0 16px !important;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
  }

  .ant-select-selection-placeholder {
    color: black;
  }
`;

export const StyledSelectPurple = styled(Select)`
  ${commonSelectStyles}
  .ant-select-selector {
    border: 1.5px solid #a78bfa !important;
    box-shadow: none !important;
  }

  &:hover .ant-select-selector {
    border-color: #7c3aed !important;
  }
`;

export const StyledSelectGrey = styled(Select)`
  ${commonSelectStyles}
  .ant-select-selector {
    border: 1.5px solid #d1d5db !important;
    background-color: #f9fafb !important;
    box-shadow: none !important;
  }

  &:hover .ant-select-selector {
    border-color: #9ca3af !important;
  }
`;

export const StyledDownArrow = styled(DownOutlined)`
  color: #a78bfa;
  font-size: 12px;
`;

export const StyledDownArrowGrey = styled(DownOutlined)`
  color: #9ca3af;
  font-size: 12px;
`; 