import React from 'react';
import { SwitchProps } from 'antd';
import { StyledSwitch } from './Switch.styles';

const CustomSwitch: React.FC<SwitchProps> = (props) => (
  <StyledSwitch checkedChildren="On" unCheckedChildren="Off" {...props} />
);

export default CustomSwitch; 