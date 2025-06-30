import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

const { TabPane } = Tabs;

interface CustomTabsProps extends TabsProps {
  children: React.ReactNode;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ children, ...props }) => {
  return (
    <Tabs
      {...props}
      style={{
        ...props.style,
      }}
      className="custom-tabs"
    >
      {children}
    </Tabs>
  );
};

// Add CSS styles for purple theme
const purpleTabStyles = `
  .custom-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #7c3aed !important;
  }
  
  .custom-tabs .ant-tabs-ink-bar {
    background: #7c3aed !important;
  }
  
  .custom-tabs .ant-tabs-tab:hover .ant-tabs-tab-btn {
    color: #7c3aed !important;
  }
  
  .custom-tabs .ant-tabs-tab:active .ant-tabs-tab-btn {
    color: #7c3aed !important;
  }
  
  .custom-tabs .ant-tabs-tab-btn:focus {
    color: #7c3aed !important;
  }
`;

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = purpleTabStyles;
  document.head.appendChild(styleElement);
}

export { CustomTabs, TabPane };
export default CustomTabs;