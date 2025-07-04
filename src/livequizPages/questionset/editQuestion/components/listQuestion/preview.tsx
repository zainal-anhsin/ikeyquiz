import React from 'react'
import { HeadingLg, HeadingMd } from '../../../../../components/common/Text/Text'

interface Option {
  value: string;
  correct: boolean;
}

interface PreviewProps {
  value: string;
  options?: Option[];
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Preview: React.FC<PreviewProps> = ({ value, options }) => {
  // For demonstration, use mock options if not provided
  const previewOptions = options || [
    { value: "three parts.", correct: true },
    { value: "five parts.", correct: false },
    { value: "six parts.", correct: false },
    { value: "nine parts.", correct: false },
  ];

  return (
    <div style={{ marginTop: 32 }}>
      <HeadingLg>Preview</HeadingLg>
      <style>{`
        .ql-align-center { text-align: center; }
        .ql-align-right { text-align: right; }
        .ql-align-justify { text-align: justify; }
      `}</style>
      <div
        style={{
          minHeight: 260,
          border: "1px solid #eee",
          borderRadius: 8,
          padding: 16,
          background: "#fafbff",
          overflow: "auto",
          marginTop: 24,
        }}
        dangerouslySetInnerHTML={{ __html: value }}
      />
      {/* Answers & Options Preview */}
      <div style={{ marginTop: 40 }}>
        {previewOptions.map((opt, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center', 
              gap: 16,
              padding: '16px 20px',
              border: opt.correct ? '2px solid #22c55e' : '1px solid #e5e7eb',
              borderRadius: 6,
              background: opt.correct ? '#f6fef9' : '#fff',
              marginBottom: 16,
              position: 'relative',
            }}
          >
            <HeadingMd style={{ marginRight: 12 }}>{alphabet[idx]}</HeadingMd>
            <HeadingMd style={{ flex: 1 }}>{opt.value}</HeadingMd>
            {opt.correct && (
              <HeadingMd style={{ color: '#22c55e', marginLeft: 12 }}>✔</HeadingMd>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Preview