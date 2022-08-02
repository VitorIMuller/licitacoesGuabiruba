import styled from "styled-components";

const Home = styled.div`
  background-color: #005bc5;
  width: 100%;
  height: 100vh;

  margin-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Header = styled.div`
  background-color: #00b4fc;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  gap: 10px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
    img{
      width: 60px;
      height: 60px;
      border-radius: 20px;
    }
    p{
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      color: white;
      font-weight: 500;
    }
`;

const List = styled.div`
  width: 80%;
  height: auto;

`;

const Item = styled.div`
  width: 100%;
  height: 80px;

  border-bottom: 2px solid white;

  display: flex;


  padding-top: 10px;

  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: white;
  font-weight: 500;

`;
const Title = styled.div`
  margin-left: 20px;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Content = styled.div`
  margin-right: 20px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Url = styled.a`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  width: 80%;
  height: auto;

  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: white;
  font-weight: 500;
`;
const NamePage = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  color: white;
  font-weight: 700;
`;
export {
  Url,
  Content,
  Title,
  Item,
  List,
  Header,
  Home,
  Menu,
  NamePage
}