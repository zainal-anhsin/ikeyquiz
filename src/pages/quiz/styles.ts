import styled from 'styled-components';

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const QuizList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const QuizCard = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 32px 40px;
  gap: 40px;
  min-width: 1000px;
`;

export const QuizInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const QuizMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MetaText = styled.p`
  font-size: 16px;
  color: #555;
  margin: 0;
`;

export const Divider = styled.div`
  width: 1px;
  height: 72px;
  background: #e5e7eb;
`;

export const QuizAvailability = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const QuizStatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StatsCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const TakeQuizSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuizIcon = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 12px;
`;

export const TabBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StatsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StatsPercentageCircle = styled.div`
  border: 4px solid #22c55e;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
  color: #22c55e;
  margin-left: 24px;

  span {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const QuestionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 40px);
  gap: 16px;
  margin-top: 0;
`;

export const QuestionCircle = styled.div<{ bg: string; borderColor?: string; boxShadow?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  border: ${({ borderColor }) => borderColor || 'none'};
  box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
  transition: all 0.2s;
`;

export const StatCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatIcon = styled.div<{ icon: string }>`
  width: 36px;
  height: 36px;
  margin-bottom: 4px;
  background: url(${props => props.icon}) no-repeat center/contain;
`;

export const ExpandedQuizCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  margin: 0 0 32px 0;
  padding: 32px;
  margin-top: -16px;
`; 