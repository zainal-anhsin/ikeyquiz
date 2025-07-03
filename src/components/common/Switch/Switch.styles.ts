import styled from 'styled-components';
import { Switch } from 'antd';

export const StyledSwitch = styled(Switch)`
  &.ant-switch-checked {
    background: #22d39c !important;
  }
  &.ant-switch {
    background: #1a327f;
  }
  width: 40px;
  font-weight: 500;
  
  .ant-switch-inner {
    font-size: 10px !important;
    padding: 0 1px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .ant-switch-handle {
    font-size: 12px !important;
    width: 14px !important;
    height: 14px !important;
    top: 4px !important;
    left: 4px !important;
    right: auto !important;
    transition: left 0.2s, right 0.2s, transform 0.2s;
  }

  &.ant-switch-checked .ant-switch-handle {
    left: calc(100% - 18px) !important;
    right: 4px !important;
    transform: none !important;
  }
`;