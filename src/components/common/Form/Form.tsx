import React from 'react';
import { FormProps } from 'antd/lib/form';
import { StyledForm, StyledInput, StyledPasswordInput } from './Form.styles';
import { Form as AntForm } from 'antd';

interface CustomFormProps extends FormProps {
  children: React.ReactNode;
}

export const Form: React.FC<CustomFormProps> = ({ children, ...props }) => {
  return (
    <StyledForm {...props}>
      {children}
    </StyledForm>
  );
};

export const FormItem = AntForm.Item;
export const FormInput = StyledInput;
FormInput.Password = StyledPasswordInput; 