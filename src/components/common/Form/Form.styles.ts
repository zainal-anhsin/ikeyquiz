import styled from 'styled-components';
import { Form as AntForm, Input as AntInput } from 'antd';

export const StyledForm = styled(AntForm)`
  width: 100%;
  max-width: 400px;
`;

export const StyledInput = styled(AntInput)`
  height: 40px;
  border-radius: 8px;

  &:hover, &:focus, &.ant-input-focused {
    border-color: #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);
  }
`;

export const StyledPasswordInput = styled(AntInput.Password)`
  height: 40px;
  border-radius: 8px;

  &:hover, &:focus, &.ant-input-focused {
    border-color: #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);
  }
`; 