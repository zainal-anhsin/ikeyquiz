import React, { useState } from "react";
import { Modal as AntdModal } from "antd";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import {
  HeadingLg,
  SectionTitle,
  MetaText,
} from "../../components/common/Text/Text";
import {
  BtnMdWhite,
  BtnLgPurple,
} from "../../components/common/Button/Button";
import questionData from './questionData';

interface QuestionSetModalProps {
  open: boolean;
  onCancel: () => void;
}

const QuestionSetModal: React.FC<QuestionSetModalProps> = ({
  open,
  onCancel,
}) => {
  const [revealed, setRevealed] = useState<boolean[]>(() => questionData.map(() => false));

  const revealAnswer = (idx: number) => {
    setRevealed(prev => prev.map((val, i) => (i === idx ? !val : val)));
  };

  const allRevealed = revealed.every(Boolean);
  const revealAll = () => {
    if (allRevealed) {
      setRevealed(questionData.map(() => false));
    } else {
      setRevealed(questionData.map(() => true));
    }
  };

  React.useEffect(() => {
    if (!open) setRevealed(questionData.map(() => false));
  }, [open]);

  return (
    <AntdModal
      visible={open}
      onCancel={onCancel}
      footer={null}
      centered
      width={750}
      title={null}
      closable={false}
      maskClosable={false}
      style={{
        borderRadius: 24,
        padding: 32,
      }}
    >
    <div>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            position: 'relative',
          }}
        >
          <HeadingLg>Question Set Preview</HeadingLg>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginRight: 16 }}>
            <BtnMdWhite onClick={revealAll}>
              <DownloadOutlined style={{ marginRight: 8 }} />
              Download
            </BtnMdWhite>
            <BtnMdWhite onClick={revealAll}>
              <EyeOutlined style={{ marginRight: 8 }} />
              {allRevealed ? 'Hide all Answer' : 'Show all Answer'}
            </BtnMdWhite>
            <button
              onClick={onCancel}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: 32,
                cursor: 'pointer',
                color: '#888',
                marginLeft: 16,
                marginTop: 4,
                padding: 0,
                lineHeight: 1,
                alignSelf: 'flex-start',
              }}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
        <div style={{ borderBottom: '1px solid #e0e0e0', marginBottom: 24 }} />
        {/* Paper Title */}
        <div
          style={{
            background: "#efeeff",
            borderRadius: 24,
            padding: 16,
            marginBottom: 24,
          }}
        >
          <HeadingLg style={{ textAlign: "center", color: "black" }}>
            Standard 1 Bahasa Melayu Exam Paper 1
          </HeadingLg>
        </div>
        {/* All Questions Section */}
        {questionData.map((question, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: 24,
              border: "1px solid #6666ff",
              position: "relative",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 8,
              }}
            >
              <BtnLgPurple
                style={{ minWidth: 160, fontWeight: 600, fontSize: 16 }}
                onClick={() => revealAnswer(idx)}
              >
                {revealed[idx] ? 'Hide Answer' : 'Show Answer'}
              </BtnLgPurple>
            </div>
            <SectionTitle style={{ fontWeight: "bold", fontSize: 18 }}>
              Question #{idx + 1}
            </SectionTitle>
            <div style={{ height: 8 }} />
            <SectionTitle>{question.question}</SectionTitle>
            <div style={{ height: 16 }} />
            <div style={{ fontSize: 18, color: "#222", marginBottom: 16 }}>
              {question.translation}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <img
                src={question.image}
                alt="question visual"
                style={{ width: 120, height: 120, objectFit: "contain" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {question.options.map(option => (
                <MetaText
                  key={option.key}
                  style={revealed[idx] && option.key === question.correct ? { color: '#22c55e', fontWeight: 700 } : {}}
                >
                  <strong>{option.key}</strong> &nbsp; {option.text}
                </MetaText>
              ))}
            </div>
          </div>
        ))}
    </div>
    </AntdModal>
  );
};

export default QuestionSetModal;
