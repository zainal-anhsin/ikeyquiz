import React, { useState } from 'react';
import { FormProps } from 'antd/lib/form';
import { StyledForm, StyledInput, StyledPasswordInput } from './Form.styles';
import { Form as AntForm, Input } from 'antd';
import { HeadingMd } from '../Text/Text';

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
    customLabel = <HeadingMd>{label}</HeadingMd>;
  }
  return <AntForm.Item label={customLabel} {...props} />;
};
FormItem.useStatus = AntForm.Item.useStatus;

export const FormInput = StyledInput;
FormInput.Password = StyledPasswordInput;

export const PasswordRevealInput: React.FC<{
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}> = ({ value, onChange, placeholder, style }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Input
        type={revealed ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          border: "1px solid #bfc6d1",
          borderRadius: "8px 0 0 8px",
          background: "#f2f4f8",
          fontSize: 20,
          padding: "12px 16px",
          flex: 1,
          height: 48,
          ...style,
        }}
        autoComplete="off"
      />
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        style={{
          height: 48,
          border: "1px solid #bfc6d1",
          borderLeft: "none",
          borderRadius: "0 8px 8px 0",
          background: "#aeb5c6",
          color: "#fff",
          fontWeight: 500,
          fontSize: 18,
          padding: "0 32px",
          cursor: "pointer",
          outline: "none",
          transition: "background 0.2s",
        }}
      >
        {revealed ? "Unreveal" : "Reveal"}
      </button>
    </div>
  );
}; 