import styled from 'styled-components';
import { Checkbox } from 'antd';

export const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    border-color: #7c5dfa;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #7c5dfa;
    border-color: #7c5dfa;
  }
  .ant-checkbox-checked .ant-checkbox-inner:after {
    border-color: #fff;
  }
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #7c5dfa;
  }
  .ant-checkbox-inner:after {
    border-radius: 2px;
  }
  .ant-checkbox + span {
    margin-left: 12px;
    font-size: 22px;
    font-weight: 600;
    color: #111;
    vertical-align: middle;
  }
`; 