import { useEffect, useState } from "react"
import logo from "../../Assets/brasaoGuabiruba.jpg"
import {
  Url,
  Content,
  Title,
  Item,
  List,
  Header,
  Home,
  Menu,
  NamePage,
  CenterLoader
} from "./style.js";
import * as api from "../../Services/api";
import Loader from "../../Assets/loading";
import moment from "moment";
import 'moment/locale/pt-br'

moment.locale('pt-br');
export default function HomePage() {
  const [bids, setBids] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchBids() {
    setIsLoading(true);
    const promise = await api.getBids()

    setBids(promise.data);
    setIsLoading(false);
  }


  useEffect(() => {
    fetchBids()
  }, []);


  return (
    <>
      <Header>
        <img src={logo} alt="img" />
        <p>Prefeitura de Guabiruba</p>
      </Header>
      <Home>
        <NamePage>Licitações</NamePage>
        <Menu>
          <Item>
            <Title>
              Titulo
            </Title>
            <Url>
              Data De Abertura
            </Url>
            <Url>
              Link
            </Url>
            <Content>
              Conteúdo
            </Content>
          </Item>
        </Menu>
        <List>
          {isLoading ?
            <CenterLoader>
              <Loader />
            </CenterLoader>
            :
            bids.map((bid) => {
              return (
                <Item>
                  <Title>
                    <p>{bid.title}</p>
                  </Title>
                  <Url>
                    {moment(`${bid.pubDate.substring(10, 0)}`).format('L')}
                  </Url>
                  <Url href={bid.link} target="_blank">
                    Link
                  </Url>
                  <Content>
                    <p>{typeof (bid.content) !== 'string' ?
                      ""
                      :
                      bid.content
                    }</p>
                  </Content>
                </Item>
              )
            })
          }
        </List>
      </Home>
    </>
  )
}


