import styled from 'styled-components';
import { Switch } from 'antd';

export const StyledSwitch = styled(Switch)`
  &.ant-switch-checked {
    background: #22d39c !important;
  }
  &.ant-switch {
    background: #1a327f;
  }
  width: 50px;
  font-weight: 600;
`; 