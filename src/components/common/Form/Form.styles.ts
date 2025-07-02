import styled from 'styled-components';
import { Form as AntForm, Input as AntInput } from 'antd';

export const StyledForm = styled(AntForm)`
  width: 100%;
  max-width: 400px;
`;

export const StyledInput = styled(AntInput)`
  height: 45px;
  border-radius: 8px;

  &:hover, &:focus, &.ant-input-focused {
    border-color: #6666FF;
    box-shadow: #6666FF;
  }
`;

export const StyledPasswordInput = styled(AntInput.Password)`
  height: 40px;
  border-radius: 8px;

  &:hover, &:focus, &.ant-input-focused {
    border-color: #6666FF;
    box-shadow: #6666FF;
  }
`; 