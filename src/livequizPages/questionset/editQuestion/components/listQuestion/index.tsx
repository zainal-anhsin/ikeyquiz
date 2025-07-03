import React, { useState } from "react";
import QuestionSet from './questionSet';
import Content from './content';
import Preview from './preview';

const defaultOptions = [
  { value: "", correct: false },
  { value: "", correct: false },
  { value: "", correct: false },
  { value: "", correct: false },
];

const ListQuestion = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState(defaultOptions);

  return (
    <div style={{ display: 'flex', gap: 32 }}>
      {/* Left side: Question Set + Content Editor */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
    <QuestionSet />
        <Content
          value={value}
          onChange={setValue}
          options={options}
          setOptions={setOptions}
        />
      </div>
      {/* Right side: Preview */}
      <div style={{ flex: 1 }}>
        <Preview value={value} options={options} />
      </div>
    </div>
);
};

export default ListQuestion;
