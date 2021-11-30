import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  padding: 0 0 0 30px;
  color: rgba(0, 0, 0, 0.5);
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin: 10px 20px 10px 0;
`;
const Title = styled.span`
  float: left;
  font-weight: 400;

  color: #666;
`;
const RemoveText = styled.span`
  float: right;
  color: #666;
  cursor: pointer;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 0;
`;

const KeywordContainer = styled.li`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;

  &:not(:last-child) {
    margin: 5px 0 5px 0;
  }
`;

const RemoveButton = styled.button`
  float: right;
  color: #666;
  border: 1px solid #666;
  border-radius: 15px;
  cursor: pointer;
  margin: 0 20px 0 0;
`;

const Keyword = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 0 20px;
`;

function History({ keywords, onRemoveKeyword, onClearKeywords }) {
  if (keywords.length === 0) {
    return <HistoryContainer>최근 검색된 기록이 없습니다.</HistoryContainer>;
  }
  return (
    <HistoryContainer>
      <HeaderContainer>
        <Title>최근 검색어</Title>
        <RemoveText onClick={onClearKeywords}>전체삭제</RemoveText>
      </HeaderContainer>
      <ListContainer>
        {keywords.map((id, text) => (
          <KeywordContainer key={id}>
            <Keyword>{text}</Keyword>
            <RemoveButton
              onClick={() => {
                onRemoveKeyword(id);
              }}
            >
              삭제
            </RemoveButton>
          </KeywordContainer>
        ))}
      </ListContainer>
    </HistoryContainer>
  );
}

History.propTypes = {
  keywords: PropTypes.objectOf(PropTypes.object),
  onRemoveKeyword: PropTypes.func.isRequired,
  onClearKeywords: PropTypes.string,
};

export default History;
