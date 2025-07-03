import React from 'react';
import { Radio } from 'antd';
import {SubLabel } from '../../components/common/Text/Text';
import styled from 'styled-components';

const QuestionBox = styled.div`
  background: #fafbfc;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 32px 24px 32px 32px;
  max-width: 780px;
  margin: 0 auto;
`;

const AnswerCard = styled.div<{ correct?: boolean; wrong?: boolean; selected?: boolean }>`
  background: #fff;
  border-radius: 8px;
  border: 2px solid
    ${({ correct, wrong, selected }) =>
      correct ? '#22c55e' :
      wrong ? '#a78bfa' :
      selected ? '#a78bfa' : '#e5e7eb'};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  min-height: 48px;
`;

const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

interface DisplayQuestionProps {
  questionNumber: number;
  questionText: string;
  answers: string[];
  correctIndex: number;
  userIndex: number | null;
}

const DisplayQuestion: React.FC<DisplayQuestionProps> = ({
  questionNumber,
  questionText,
  answers,
  correctIndex,
  userIndex,
}) => {
  const isNotAnswered = userIndex === null || userIndex === -1;
  const isCorrect = !isNotAnswered && userIndex === correctIndex;
  return (
    <QuestionBox>
      <TopRow>
        <SubLabel style={{ marginBottom: 0 }}>Question {questionNumber}</SubLabel>
        <IconCircle>
          <img
            src={isNotAnswered
              ? "/icon-image/notAnswered.png"
              : isCorrect
              ? "/icon-image/correct.png"
              : "/icon-image/wrong.png"}
            alt={isNotAnswered ? "not answered" : isCorrect ? "correct" : "wrong"}
            style={{ width: 45 }}
          />
        </IconCircle>
      </TopRow>
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 24 }}>{questionText}</div>
      {answers.map((ans, idx) => (
        <AnswerCard
          key={idx}
          correct={idx === correctIndex}
          wrong={!isNotAnswered && idx === userIndex && userIndex !== correctIndex}
          selected={!isNotAnswered && idx === userIndex}
        >
          <Radio
            checked={!isNotAnswered && idx === userIndex}
            style={{ marginRight: 12, pointerEvents: 'none', color: idx === correctIndex ? '#22c55e' : !isNotAnswered && idx === userIndex ? '#a78bfa' : undefined }}
          >
            <span style={{ fontWeight: 600, marginRight: 12 }}>{String.fromCharCode(65 + idx)}</span>
            {ans}
          </Radio>
          {idx === correctIndex && (
            <img src="/icon-image/correct.png" alt="correct" style={{ width: 22, marginLeft: 'auto' }} />
          )}
        </AnswerCard>
      ))}
    </QuestionBox>
  );
};

export default DisplayQuestion;
