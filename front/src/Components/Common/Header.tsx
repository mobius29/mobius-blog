import styled from 'styled-components';
import { StyledLink } from './Link';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 7.125rem;

  margin-top: 2rem;

  #logo {
    width: 5rem;
  }

  .item-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 20rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div id='logo'>Logo</div>
      <nav>
        <ul className='item-list'>
          <StyledLink to='/diary'>일기</StyledLink>
          <StyledLink to='/study'>공부</StyledLink>
          <StyledLink to='/retrospect'>회고</StyledLink>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
