import React, { useState } from "react";
import { HeadingLg } from "../../../../../components/common/Text/Text";
import {
  BtnMdWhite,
  BtnMdPurple,
} from "../../../../../components/common/Button/Button";

const TOTAL_QUESTIONS = 30;

const QuestionSet = () => {
  const [selected, setSelected] = useState(4);

  return (
    <div style={{ textAlign: "center", marginTop: 32 }}>
      <div style={{ textAlign: "left", marginBottom: 24 }}>
        <HeadingLg>Question Set</HeadingLg>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 40px)",
          gap: 12,
          justifyContent: "center",
          marginBottom: 32,
        }}
      >
        {Array.from({ length: TOTAL_QUESTIONS }, (_, i) => {
          const num = i + 1;
          return (
            <BtnMdWhite
              key={num}
              style={{
                width: 40,
                height: 40,
                padding: '0 8px',
                minWidth: 'unset'
              }}
              type={selected === num ? "primary" : "default"}
              onClick={() => setSelected(num)}
            >
              {num}
            </BtnMdWhite>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
        <BtnMdPurple>+ Add Question</BtnMdPurple>
        <BtnMdWhite>— Remove</BtnMdWhite>
      </div>
    </div>
  );
};

export default QuestionSet;