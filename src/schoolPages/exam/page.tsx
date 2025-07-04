import React, { useState } from 'react';
import {
  HeadingLg,
  HeadingMd,
  TimeText,
  TabText
} from '../../components/common/Text/Text';
import { BtnPrimary } from '../../components/common/Button/Button';
import { Popover } from 'antd';
import { Progress } from 'antd';
import FilterPanel from '../homework/FilterPanel';
import { MenuUnfoldOutlined } from '@ant-design/icons';
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
  TabBar
} from '../quiz/styles';

const ExamPage = () => {
  const [activeTab, setActiveTab] = useState('latest');
  const [filterVisible, setFilterVisible] = useState(false);
  const quizData = [1, 2, 3];

  return (
    <>
      <style>{`
        .custom-homework-popover .ant-popover-inner {
          background: transparent;
          box-shadow: none;
          padding: 0;
        }
      `}</style>
      <HeaderRow>
        <TabBar>
          {['latest', 'completed', 'other'].map(tab => (
            <TabText
              key={tab}
              style={activeTab === tab
                ? { background: '#ede9fe', color: '#7c3aed', borderRadius: 16, padding: '6px 24px' }
                : { color: '#888' }}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabText>
          ))}
        </TabBar>
        <FilterBar>
          <HeadingMd>By Newest</HeadingMd>
          <HeadingMd>|</HeadingMd>
          <HeadingMd>English</HeadingMd>
          <Popover
            content={<FilterPanel onReset={() => setFilterVisible(false)} />}
            trigger="click"
            visible={filterVisible}
            onVisibleChange={(visible: boolean) => setFilterVisible(visible)}
            placement="bottom"
            overlayClassName="custom-homework-popover"
          >
            <MenuUnfoldOutlined
              style={{ fontSize: 25, color: '#7c3aed', cursor: 'pointer' }}
              onPointerOverCapture={() => {}}
              onPointerLeave={() => {}}
            />
          </Popover>
        </FilterBar>
      </HeaderRow>

      {activeTab === 'other' ? (
        <HeadingLg style={{ padding: 32, textAlign: 'center' }}>Content Other here</HeadingLg>
      ) : (
        <QuizList>
          {quizData.map((_, idx) => (
            <QuizCard key={idx}>
              <QuizInfo>
                <HeadingLg>2025 English Year 6 (Test 1)</HeadingLg>
                <QuizMeta>
                  <MetaText>Standard 6</MetaText>
                  <span style={{ color: '#bbb', fontWeight: 600 }}>|</span>
                  <MetaText>ENGLISH</MetaText>
                </QuizMeta>
              </QuizInfo>

              <Divider />

              <QuizAvailability>
                <HeadingMd>Exam Date</HeadingMd>
                <MetaText>May 28 2025</MetaText>
              </QuizAvailability>

              <Divider />

              <QuizStatsRow>
                <QuizIcon src="/sidebar-image/examCard.png" alt="quiz" />
                <StatsCol>
                  <HeadingMd>Duration 1 hr</HeadingMd>
                  <TimeText>START : 12.30AM</TimeText>
                </StatsCol>
                <StatsCol>
                  <HeadingMd>40 Questions</HeadingMd>
                  <TimeText>END : 1.30AM</TimeText>
                </StatsCol>
              </QuizStatsRow>

              <TakeQuizSection>
                {activeTab === 'completed' ? (
                  <Progress
                    type="circle"
                    percent={80}
                    width={48}
                    strokeColor="#7c3aed"
                    format={p => `${p}%`}
                  />
                ) : (
                  <BtnPrimary>Take Test</BtnPrimary>
                )}
              </TakeQuizSection>
            </QuizCard>
          ))}
        </QuizList>
      )}
    </>
  );
};

export default ExamPage;
