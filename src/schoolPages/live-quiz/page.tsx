import React, { useState } from "react";
import {
  SubLabel,
  HeadingMd,
  HeadingLg,
} from "../../components/common/Text/Text";
import {
  QuizContainer,
  QuestionBox,
  AnswerCard,
  NavButtonWrapper,
  NavButton,
  CircleButton,
  SidePanel,
  QuestionNavGrid,
  QuestionNavItem,
  TimerSection,
  TimerRow,
} from "./styles";
import { Radio } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { MetaText } from "../../components/common/Text/Text";
import { questions } from "./questionData";


const LiveQuizPage = () => {
  const [current, setCurrent] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  return (
    <>
      {/* Quiz Container */}
      <QuizContainer>
        <QuestionBox>
          <div style={{ marginBottom: 16 }}>
            <SubLabel>Question {current + 1}</SubLabel>
          </div>
          <div style={{ marginBottom: 8 }}>
            <HeadingMd>Choose the correct answer.</HeadingMd>
          </div>
          <div style={{ marginBottom: 24 }}>
            <HeadingMd>{questions[current].question}</HeadingMd>
          </div>
          <div>
            {questions[current].answers.map((text, idx) => (
              <AnswerCard
                key={idx}
                selected={selectedAnswers[current] === idx}
                onClick={() => {
                  const updated = [...selectedAnswers];
                  updated[current] = idx;
                  setSelectedAnswers(updated);
                }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, marginRight: 12 }}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {text}
                </div>
                <Radio
                  checked={selectedAnswers[current] === idx}
                  style={{
                    pointerEvents: "none",
                    color:
                      selectedAnswers[current] === idx ? "#7c3aed" : undefined,
                    marginLeft: 16,
                  }}
                />
              </AnswerCard>
            ))}
          </div>
        </QuestionBox>
        {/* Quiz Button */}
        <NavButtonWrapper style={{ marginBottom: 34 }}>
          {current > 0 && (
            <NavButton
              style={{ paddingLeft: 0 }}
              onClick={() => setCurrent(current - 1)}
            >
              <CircleButton
                type="button"
                style={{
                  background: "#f3f4f6",
                  marginLeft: 0,
                  marginRight: -24,
                }}
              >
                <LeftOutlined
                  style={{ color: "#9ca3af", fontSize: 22 }}
                  onPointerOverCapture={() => {}}
                  onPointerLeave={() => {}}
                />
              </CircleButton>
              <span
                style={{
                  color: "#9ca3af",
                  fontWeight: 600,
                  fontSize: 18,
                  padding: "0 26px",
                  textAlign: "right",
                  paddingLeft: "42px",
                }}
              >
                Previous
              </span>
            </NavButton>
          )}
          <NavButton
            style={{ background: "#ede9fe", color: "#7c64e2", paddingRight: 0 }}
            onClick={() => {
              if (current < questions.length - 1) {
                setCurrent(current + 1);
              } else {
                // Handle quiz completion
                console.log("Quiz completed!");
              }
            }}
          >
            <span
              style={{
                color: "#7c64e2",
                fontWeight: 600,
                fontSize: 18,
                marginRight: 32,
                padding: "0 26px",
              }}
            >
              {current === questions.length - 1 ? "Finish" : "Next"}
            </span>
            <CircleButton type="button">
              <RightOutlined
                style={{ color: "#fff", fontSize: 22 }}
                onPointerOverCapture={() => {}}
                onPointerLeave={() => {}}
              />
            </CircleButton>
          </NavButton>
        </NavButtonWrapper>
      </QuizContainer>
      {/* Side Panel, Timer and Question Nav */}
      <SidePanel>
        <TimerSection>
          <TimerRow>
            <ClockCircleOutlined
              style={{ fontSize: 32, color: "#7c3aed" }}
              onPointerOverCapture={() => {}}
              onPointerLeave={() => {}}
            />
            <HeadingLg style={{ fontSize: "2rem" }}>45:29 Mins</HeadingLg>
          </TimerRow>
          <MetaText style={{ marginTop: 8 }}>Time left</MetaText>
        </TimerSection>
        <QuestionNavGrid>
          {questions.map((_, idx) => (
            <QuestionNavItem
              key={idx}
              active={current === idx}
              answered={selectedAnswers[idx] !== null}
              unanswered={selectedAnswers[idx] === null}
              onClick={() => setCurrent(idx)}
            >
              {idx + 1}
            </QuestionNavItem>
          ))}
        </QuestionNavGrid>
      </SidePanel>
    </>
  );
};

export default LiveQuizPage;
