import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  padding: 20px;
  color: rgba(0, 0, 0, 0.5);

  overflow-y: scroll;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #666;
`;
const RemoveText = styled.span`
  color: #666;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 5px;
`;

const KeywordContainer = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin: 10px 0 0 0;
`;

const RemoveButton = styled.button`
  float: right;
  color: #5d6e1e;
  border: 1px solid #5d6e1e;
  font-weight: 400;
  font-size: 12px;
  border-radius: 15px;
  cursor: pointer;
`;

const Keyword = styled.span`
  font-size: 14px;
  font-weight: 300;

  cursor: pointer;
`;

function History({
  keywords,
  onRemoveKeyword,
  onClearKeywords,
  setSearchModal,
  setSearchedKeyword,
}) {
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
        {keywords.map(elem => (
          <KeywordContainer key={elem.id}>
            <Keyword
              onClick={() => {
                setSearchedKeyword(elem.text);
                setSearchModal(false);
              }}
            >
              {elem.text}
            </Keyword>
            <RemoveButton
              onClick={() => {
                onRemoveKeyword(elem.id);
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
  setSearchModal: PropTypes.func,
  setSearchedKeyword: PropTypes.func,
};

export default History;
