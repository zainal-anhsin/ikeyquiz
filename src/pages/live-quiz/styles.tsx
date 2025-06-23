import styled from 'styled-components';

export const QuizContainer = styled.div`
  min-height: 600px;
  width: 75%;
  background: #f5f6fa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 48px 0 0 48px;
`;

export const QuestionBox = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 40px 32px;
  width: 100%;
  max-width: 700px;
  margin-bottom: 32px;
`;

export const AnswerCard = styled.div<{ selected?: boolean }>`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 18px 24px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 2px solid ${({ selected }) => (selected ? '#7c3aed' : 'transparent')};
  transition: border 0.2s;
  &:hover {
    border: 2px solid #7c3aed;
  }
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
  margin-top: 32px;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  background: #ede9fe;
  color: #7c64e2;
  border: none;
  border-radius: 999px;
  font-size: 18px;
  font-weight: 600;
  padding: 0 36px 0 16px;
  height: 56px;
  cursor: pointer;
  outline: none;
  transition: background 0.2s;
  position: relative;
`;

export const CircleButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #7c3aed;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-left: -24px;
  box-shadow: 0 2px 8px rgba(124, 100, 226, 0.08);
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #7c64e2;
  }
`;

export const QuestionNav = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 32px;
`;

export const QuestionNavItem = styled.button<{ active?: boolean, answered?: boolean, unanswered?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${({ answered }) =>
    answered ? '#22c55e' : '#7c3aed'};
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

export const SidePanel = styled.div`
  position: fixed;
  top: 180px;
  right: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionNavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 40px);
  grid-gap: 12px;
  justify-content: center;
  margin-bottom: 32px;
`;

export const TimerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

export const TimerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
