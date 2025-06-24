import React from 'react';
import { FormProps } from 'antd/lib/form';
import { StyledForm, StyledInput, StyledPasswordInput } from './Form.styles';
import { Form as AntForm } from 'antd';
import { SectionTitle } from '../Text/Text';

interface CustomFormProps extends FormProps {
  children: React.ReactNode;
  layout?: 'horizontal' | 'vertical' | 'inline';
  size?: 'small' | 'middle' | 'large';
}

export const Form: React.FC<CustomFormProps> = ({ children, layout = 'vertical', size = 'large', ...props }) => {
  return (
    <StyledForm layout={layout} size={size} {...props}>
      {children}
    </StyledForm>
  );
};

export const FormItem: typeof AntForm.Item = ({ label, ...props }: any) => {
  let customLabel = label;
  if (typeof label === 'string') {
    customLabel = <SectionTitle>{label}</SectionTitle>;
  }
  return <AntForm.Item label={customLabel} {...props} />;
};
FormItem.useStatus = AntForm.Item.useStatus;

export const FormInput = StyledInput;
FormInput.Password = StyledPasswordInput; 