import styled from 'styled-components';
import { Form as AntForm, Input as AntInput } from 'antd';

export const StyledForm = styled(AntForm)`
  width: 100%;
  max-width: 400px;

  .ant-form-item {
    margin-bottom: 24px;
  }
`;

export const StyledInput = styled(AntInput)`
  height: 40px;
  border-radius: 8px;

  &:hover, &:focus {
    border-color: #1890ff;
  }
`;

export const StyledPasswordInput = styled(AntInput.Password)`
  height: 40px;
  border-radius: 8px;

  &:hover, &:focus {
    border-color: #1890ff;
  }
`; 