import React from 'react';
import { Modal, Input, Button } from 'antd';
import { HeadingLg, MetaText } from '../../components/common/Text/Text';
import { ButtonGrey, ButtonJoin } from '../../components/common/Button/Button';
import styled from 'styled-components';

const UserCard = styled.div`
  background: #f8f8fa;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #ede9fe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;

const ClassCodeCard = styled.div`
  background: #f8f8fa;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 20px;
`;

const SmallMetaText = styled(MetaText)`
  color: #222;
  font-size: 13px;
  margin-bottom: 0;
`;

interface JoinSchoolModalProps {
  open: boolean;
  onCancel: () => void;
  onJoin: () => void;
}

const JoinSchoolModal: React.FC<JoinSchoolModalProps> = ({ open, onCancel, onJoin }) => (
  <Modal
    visible={open}
    onCancel={onCancel}
    footer={null}
    centered
    width={480}
    title={null}
    closable={false}
    bodyStyle={{ padding: 0 }}
    maskClosable={false}
  >
    <div style={{ padding: 40 }}>
      <HeadingLg style={{ marginBottom: 24 }}>Join School - Ave Maria Convent. Jawi</HeadingLg>
      <UserCard>
        <UserAvatar>😇</UserAvatar>
        <div>
          <MetaText style={{marginBottom: 6 }}>You're currently signed in as</MetaText>
          <HeadingLg style={{fontSize: 15, marginBottom: 2}}>Jasper Lim</HeadingLg>
          <SmallMetaText>Student</SmallMetaText>
        </div>
      </UserCard>
      <ClassCodeCard>
        <HeadingLg style={{ marginBottom: 4 }}>Class Code</HeadingLg>
        <MetaText style={{ marginBottom: 8 }}>
          Ask your teacher for the class code, then enter it here.
        </MetaText>
        <Input placeholder="Class Code" style={{ marginTop: 8, borderRadius: 8, height: 40, paddingLeft: 16 }} />
      </ClassCodeCard>
      <div style={{ marginBottom: 16 }}>
        <SmallMetaText style={{ fontWeight: 600, marginBottom: 8 }}>To sign in with a Class Code</SmallMetaText>
        <ul style={{ paddingLeft: 18, margin: 0, color: '#222', fontSize: 13 }}>
          <li>Use an authorized account</li>
          <li>Use a class code with 5-8 letters or numbers, and no space or symbols</li>
        </ul>
        <SmallMetaText style={{ marginTop: 8 }}>
          If you have trouble joining the class, go to the{' '}
          <Button 
            type="link" 
            style={{ 
              color: '#7c5dfa', 
              padding: 0, 
              height: 'auto', 
              fontSize: 13,
              fontWeight: 'normal'
            }}
            onClick={() => window.open('https://help.example.com/join-class', '_blank')}
          >
            Help Center article
          </Button>
        </SmallMetaText>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
        <ButtonGrey onClick={onCancel}>Cancel</ButtonGrey>
        <ButtonJoin onClick={onJoin}>Join</ButtonJoin>
      </div>
    </div>
  </Modal>
);

export default JoinSchoolModal; 