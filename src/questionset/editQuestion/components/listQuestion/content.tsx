import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Content = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
      {/* Editor */}
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: 8 }}>Content Editor</h3>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          style={{ height: 300, marginBottom: 16 }}
        />
      </div>
      {/* Preview */}
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: 8 }}>Preview</h3>
        <div
          style={{
            minHeight: 300,
            border: "1px solid #eee",
            borderRadius: 8,
            padding: 16,
            background: "#fafbff",
            overflow: "auto",
          }}
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    </div>
  );
};

export default Content;