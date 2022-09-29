import styled from 'styled-components';
import Article from '../Common/Article';
import { useGetAllRetrospectQuery } from '../../generated/graphql';

const RetrospectListBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  width: 800px;
`;
const RetrospectList = () => {
  const [{ data: postData }] = useGetAllRetrospectQuery();

  console.log(postData);
  const articleList = postData?.getAll.map((post) => (
    <Article
      key={post.id}
      id={post.id}
      title={post.title}
      content={post.content}
      date={post.date}
    />
  ));
  return <RetrospectListBlock>{articleList}</RetrospectListBlock>;
};

export default RetrospectList;
