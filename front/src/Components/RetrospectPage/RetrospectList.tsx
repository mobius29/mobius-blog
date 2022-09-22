import styled from 'styled-components';
import Article from '../Common/Article';

const RetrospectListBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  width: 800px;
`;
const RetrospectList = () => {
  return (
    <RetrospectListBlock>
      <Article />
      <Article />
    </RetrospectListBlock>
  );
};

export default RetrospectList;
