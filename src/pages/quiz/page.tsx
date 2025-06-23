import React, { useState } from "react";
import {
  HeadingLg,
  SectionTitle,
  TimeText,
  TabText,
} from "../../components/common/Text/Text";
import { ButtonPrimary } from "../../components/common/Button/Button";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Progress, Popover } from "antd";
import {
  HeaderRow,
  FilterBar,
  QuizList,
  QuizCard,
  QuizInfo,
  QuizMeta,
  MetaText,
  Divider,
  QuizAvailability,
  QuizStatsRow,
  StatsCol,
  TakeQuizSection,
  QuizIcon,
  TabBar,
  StatsContainer,
  StatsPercentageCircle,
  QuestionGrid,
  QuestionCircle,
  StatCol,
  StatIcon,
  ExpandedQuizCard,
} from "./styles";
import { useNavigate } from "react-router-dom";
import DisplayQuestion from "./displayQuestion";
import FilterPanel from "../homework/FilterPanel";

const questionStatus = [
  ...Array(11).fill("correct"),
  "wrong",
  ...Array(12).fill("correct"),
  "wrong",
  ...Array(7).fill("correct"),
  "notAnswered",
  "notAnswered",
  ...Array(5).fill("correct"),
  "wrong",
  ...Array(2).fill("correct"),
];

const TAB_NAMES = ["latest", "completed", "other"];

const Quiz = () => {
  const [activeTab, setActiveTab] = useState("latest");
  const [filterVisible, setFilterVisible] = useState(false);
  const quizData = [1, 2, 3];
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showQuestion, setShowQuestion] = useState<number | null>(null);

  const stats = {
    correct: 35,
    wrong: 3,
    notAnswered: 2,
    percent: 87,
  };

  const getStatusColor = (status: string) => {
    if (status === "correct") return "#22c55e";
    if (status === "wrong") return "#f43f5e";
    if (status === "notAnswered") return "#a78bfa";
    return "#e5e7eb";
  };

  return (
    <>
      <style>{`
        .custom-quiz-popover .ant-popover-inner {
          background: transparent;
          box-shadow: none;
          padding: 0;
        }
      `}</style>
      <HeaderRow>
        <TabBar>
          {TAB_NAMES.map((tab) => (
            <TabText
              key={tab}
              style={
                activeTab === tab
                  ? {
                      background: "#ede9fe",
                      color: "#7c3aed",
                      borderRadius: 16,
                      padding: "6px 24px",
                    }
                  : { color: "#888" }
              }
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabText>
          ))}
        </TabBar>
        <FilterBar>
          <SectionTitle>By Newest</SectionTitle>
          <SectionTitle>|</SectionTitle>
          <SectionTitle>English</SectionTitle>
          <Popover
            content={<FilterPanel onReset={() => setFilterVisible(false)} />}
            trigger="click"
            visible={filterVisible}
            onVisibleChange={(visible: boolean) => setFilterVisible(visible)}
            placement="bottom"
            overlayClassName="custom-quiz-popover"
          >
            <MenuUnfoldOutlined
              style={{ fontSize: 25, color: "#7c3aed", cursor: "pointer" }}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            />
          </Popover>
        </FilterBar>
      </HeaderRow>

      {/* Other quiz Tab */}
      {activeTab === "other" ? (
        <HeadingLg style={{ padding: 32, textAlign: "center" }}>
          Content Other here
        </HeadingLg>
      ) : activeTab === "completed" ? (
        // Completed quiz Tab
        <QuizList>
          {quizData.map((_, idx) => (
            <div key={idx}>
              <QuizCard
                style={{ cursor: "pointer" }}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                <QuizInfo>
                  <HeadingLg>2025 English Year 6 (Test 1)</HeadingLg>
                  <QuizMeta>
                    <MetaText>Standard 6</MetaText>
                    <span style={{ color: "#bbb", fontWeight: 600 }}>|</span>
                    <MetaText>ENGLISH</MetaText>
                  </QuizMeta>
                </QuizInfo>
                <Divider />
                <QuizAvailability>
                  <SectionTitle>Quiz Ended</SectionTitle>
                  <MetaText>3 Mar 2025 1:59:07 PM</MetaText>
                </QuizAvailability>
                <Divider />
                <QuizStatsRow>
                  <QuizIcon src="/quizPaper.png" alt="quiz" />
                  <StatsCol>
                    <SectionTitle>Duration 1 hr</SectionTitle>
                    <TimeText>START : 12.30AM</TimeText>
                  </StatsCol>
                  <StatsCol>
                    <SectionTitle>40 Questions</SectionTitle>
                    <TimeText>END : 1.30AM</TimeText>
                  </StatsCol>
                </QuizStatsRow>
                <StatsContainer>
                  <StatsPercentageCircle>
                    {stats.percent}
                    <span>%</span>
                  </StatsPercentageCircle>
                </StatsContainer>
              </QuizCard>

              {expanded === idx && (
                // Expanded quiz card
                <ExpandedQuizCard>
                  <div
                    style={{
                      display: "flex",
                      gap: 32,
                      alignItems: "flex-start",
                      marginBottom: 0,
                    }}
                  >
                    <div
                      style={{
                        flex: 2,
                        minWidth: 360,
                        marginTop: 26,
                        marginLeft: 24,
                      }}
                    >
                      {/* Instructions Wording */}
                      <HeadingLg style={{ marginBottom: 8 }}>
                        Click the number to view question answer.
                      </HeadingLg>
                      <HeadingLg style={{ marginBottom: 24 }}>
                        Total 40 Questions
                      </HeadingLg>

                      {/* Quiz statistics */}
                      <div style={{ display: "flex", gap: 40, marginTop: 16 }}>
                        <StatCol>
                          <StatIcon icon="/icon-image/correct.png" />
                          <HeadingLg style={{ color: "#22c55e", fontSize: 22 }}>{stats.correct}</HeadingLg>
                          <MetaText>Correct</MetaText>
                        </StatCol>
                        <StatCol>
                          <StatIcon icon="/icon-image/wrong.png" />
                          <HeadingLg style={{ color: "#f43f5e", fontSize: 22 }}>{stats.wrong}</HeadingLg>
                          <MetaText>Wrong</MetaText>
                        </StatCol>
                        <StatCol>
                          <StatIcon icon="/icon-image/notAnswered.png" />
                          <HeadingLg style={{ color: "#a78bfa" }}>{stats.notAnswered}</HeadingLg>
                          <MetaText>Not answering</MetaText>
                        </StatCol>
                      </div>
                    </div>
                    <div
                      style={{
                        flex: 2,
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: 24,
                      }}
                    >
                      {/* Quiz question number grid */}
                      <QuestionGrid>
                        {Array.from({ length: 40 }).map((_, i) => (
                          <QuestionCircle
                            key={i}
                            bg={getStatusColor(questionStatus[i])}
                            borderColor={questionStatus[i] === "notAnswered" ? "2px solid #a78bfa" : undefined}
                            boxShadow={questionStatus[i] === "wrong" ? "0 0 0 2px #f43f5e" : undefined}
                            onClick={() => setShowQuestion(i)}
                          >
                            {i + 1}
                          </QuestionCircle>
                        ))}
                      </QuestionGrid>
                    </div>
                  </div>
                  {/* Example question */}
                  {showQuestion === 0 && (
                    <div style={{ marginTop: 32 }}>
                      <DisplayQuestion
                        questionNumber={1}
                        questionText="Which animal is known as the King of the Jungle?"
                        answers={["Lion", "Tiger", "Elephant", "Giraffe"]}
                        correctIndex={0}
                        userIndex={0}
                      />
                    </div>
                  )}
                  {showQuestion === 11 && (
                    <div style={{ marginTop: 32 }}>
                      <DisplayQuestion
                        questionNumber={12}
                        questionText="The Stone Age is split into"
                        answers={[
                          "three parts.",
                          "five parts.",
                          "six parts.",
                          "nine parts.",
                        ]}
                        correctIndex={0}
                        userIndex={2}
                      />
                    </div>
                  )}
                  {showQuestion === 32 && (
                    <div style={{ marginTop: 32 }}>
                      <DisplayQuestion
                        questionNumber={33}
                        questionText="Which planet is known as the Red Planet?"
                        answers={["Earth", "Mars", "Jupiter", "Venus"]}
                        correctIndex={1}
                        userIndex={null}
                      />
                    </div>
                  )}
                </ExpandedQuizCard>
              )}
            </div>
          ))}
        </QuizList>
      ) : (
        // Latest quiz Tab
        <QuizList>
          {quizData.map((_, idx) => (
            <QuizCard key={idx}>
              <QuizInfo>
                <HeadingLg>2025 English Year 6 (Test 1)</HeadingLg>
                <QuizMeta>
                  <MetaText>Standard 6</MetaText>
                  <span style={{ color: "#bbb", fontWeight: 600 }}>|</span>
                  <MetaText>ENGLISH</MetaText>
                </QuizMeta>
              </QuizInfo>

              <Divider />

              <QuizAvailability>
                <SectionTitle>Quiz Availability</SectionTitle>
                <MetaText>( Mar 3 - May 31 ) 2025</MetaText>
              </QuizAvailability>

              <Divider />

              <QuizStatsRow>
                <QuizIcon src="/quizPaper.png" alt="quiz" />
                <StatsCol>
                  <SectionTitle>Duration 1 hr</SectionTitle>
                  <TimeText>START : 12.30AM</TimeText>
                </StatsCol>
                <StatsCol>
                  <SectionTitle>40 Questions</SectionTitle>
                  <TimeText>END : 1.30AM</TimeText>
                </StatsCol>
              </QuizStatsRow>

              <TakeQuizSection>
                {activeTab === "completed" ? (
                  <Progress
                    type="circle"
                    percent={80}
                    width={48}
                    strokeColor="#7c3aed"
                    format={(p) => `${p}%`}
                  />
                ) : (
                  <ButtonPrimary onClick={() => navigate("/live-quiz")}>
                    Take Quiz
                  </ButtonPrimary>
                )}
              </TakeQuizSection>
            </QuizCard>
          ))}
        </QuizList>
      )}
    </>
  );
};

export default Quiz;
