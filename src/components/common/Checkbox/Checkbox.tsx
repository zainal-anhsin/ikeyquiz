import React from 'react';
import { CheckboxProps } from 'antd';
import { StyledCheckbox } from './Checkbox.styles';

const Checkbox: React.FC<CheckboxProps> = (props) => <StyledCheckbox {...props} />;

export default Checkbox; 