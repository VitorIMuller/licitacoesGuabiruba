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
  NamePage
} from "./style.js"

export default function HomePage() {

  const dados = [{
    "id": 13174,
    "title": "Tomada de Preços Nº 023/2012 | Homologada",
    "link": "http://www.guabiruba.sc.gov.br/licitacoes/index/detalhes/codMapaItem/15244/codLicitacao/13174",
    "published": null,
    "created": null,
    "category": [],
    "content": "CONTRATAÇÃO DE EMPRESA PARA PAVIMENTAÇÃO COM\nLAJOTAS DE CONCRETO SEXTAVADA A RUA GUILHERME\nRIFFEL ÁREA A PAVIMENTAR DE 4.620,00M2 COM EXTENÇÃO\nDE 660,00M E 7,00M DE LARGURA, RUA PAULO MANNRICH\nÁREA A PAVIMENTAR DE 900,00M2 COM EXTENÇÃO DE\n150,00M E 6,00M DE LARGURA, RUA ARTHUR WANDREY ÁREA\nA PAVIMENTAR DE 1.650,00M2 COM EXTENÇÃO DE 275,00M E\n6,00M DE LARGURA, CONFORME PROJETO BASICO,\nMEMORIAL DESCRITIVO E PLANILHA DE ORÇAMENTO QUE\nINTEGRAM O PRESENTE EDITAL.",
    "enclosures": [],
    "media": {}
  },
  {
    "id": 13173,
    "title": "Pregão  | Homologada",
    "link": "http://www.guabiruba.sc.gov.br/licitacoes/index/detalhes/codMapaItem/15244/codLicitacao/13173",
    "published": null,
    "created": null,
    "category": [],
    "content": "CONTRATAÇÃO DE EMPRESA OU ENTIDADE DE\n\nSERVIÇO QUE DISPONIBILIZA PROFISSIONAIS\n\nPARA OS CURSOS DE OFICINAS ARTÍSTICAS:\n\nPATCHWORK, PINTURAS EM MADEIRA, PINTURA\n\nEM TELA, VIOLÃO, ACORDEON, TECLADO,\n\nTROMPETE, TEATRO INFANTO-JUVENIL, TEATRO\n\nADULTO, HIP-HOP E BALLET. TREINAMENTOS DE\n\nREGENTE PARA BANDAS E FANFARRAS: BANDA\n\nDAS LEBENSLIED, BANDA ARTHUR WIPPEL, BANDA\n\nANA OTILIA SCHLINDWEIN, FANFARRA CARLOS\n\nMAFFEZZOLLI E FANFARRA OSVALDO LUDOVICO\n\nFUCKNER A SER REALIZADO NA CASA DA\n\nCULTURA E ESCOLAS DO MUNICÍPIO.",
    "enclosures": [],
    "media": {}
  },
  {
    "id": 13172,
    "title": "Tomada de Preços nº 020 / 2012 | Homologada",
    "link": "http://www.guabiruba.sc.gov.br/licitacoes/index/detalhes/codMapaItem/15244/codLicitacao/13172",
    "published": null,
    "created": null,
    "category": [],
    "enclosures": [],
    "media": {}
  },
  {
    "id": 13171,
    "title": "Pregão nº 016/2012 | Homologada",
    "link": "http://www.guabiruba.sc.gov.br/licitacoes/index/detalhes/codMapaItem/15244/codLicitacao/13171",
    "published": null,
    "created": null,
    "category": [],
    "content": "AQUISIÇÃO DE VEÍCULO NOVO 0 KM, FABRICAÇÃO\nNACIONAL, ANO/MOD 2012, TIPO AUTOMÓVEL HATCH\nPASSAGEIROS, 5 LUGARES, MOTOR COMB GAS/ALC.,\nPOTÊNCIA MINIMA 83CV OU ACIMA, DIREÇÃO HIDRÁULICA,\nAR CONDICIONADO,TRAVA ELÉTRICA, INJEÇÃO\nELETRÔNICA, TRANSMISSÃO MANUAL, CAMBIO 5\nMARCHAS A FRENTE 1 RÉ, CHAPA DE PROTEÇÃO DO\nMOTOR, TANQUE COMB. MÍNIMO 45L, RÁDIO CD MP3\nAM/FM, 4 ALTO FALANTES, RODAS ARO 14, PNEUS 175/70,\nVIDROS, TRAVAS E ESPELHO ELÉTRICOS, AIRBAG DUPLO\nE ABS, PÁRA CHOQUE, MAÇANETA E RETROVISORES NA\nCOR DO VEÍCULO, COR BRANCO E GARANTIA DE 1 ANO.",
    "enclosures": [],
    "media": {}
  },
  {
    "id": 13170,
    "title": "Tomada de Preços Nº 015/2012 | Homologada",
    "link": "http://www.guabiruba.sc.gov.br/licitacoes/index/detalhes/codMapaItem/15244/codLicitacao/13170",
    "published": null,
    "created": null,
    "category": [],
    "enclosures": [],
    "media": {}
  },
  {
    "id": 13167,
    "title": "Pregão Nº 006/2012 | Homologada",
    "link": "http://www.guabiruba.sc.gov.br/licitacoes/index/detalhes/codMapaItem/15244/codLicitacao/13167",
    "published": null,
    "created": null,
    "category": [],
    "content": "AQUISIÇÃO DE ALIMENTOS PARA A MERENDA\nESCOLAR NAS ESCOLAS DA REDE MUNICIPAL DE\nENSINO DE GUABIRUBA.",
    "enclosures": [],
    "media": {}
  },
  {
    "id": 13166,
    "title": "Tomada de Preços Nº 001/2012 | Homologada",
    "link": "http://www.guabiruba.sc.gov.br/licitacoes/index/detalhes/codMapaItem/15244/codLicitacao/13166",
    "published": null,
    "created": null,
    "category": [],
    "content": "OBJETO: AQUISIÇÃO DE MATERIAL DE ENFERMAGEM PARA\nOS POSTOS DE SAUDE DO MUNICIPIO DE GUABIRUBA.",
    "enclosures": [],
    "media": {}
  }];

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
              Link
            </Url>
            <Content>
              Conteudo
            </Content>
          </Item>
        </Menu>
        <List>
          {dados.map((dado) => {
            return (
              <Item key={dado.id}>
                <Title>
                  <p>{dado.title}</p>
                </Title>
                <Url href={dado.link}>
                  Link
                </Url>
                <Content>
                  <p>{dado.content}</p>
                </Content>
              </Item>
            )
          })}
        </List>
      </Home>
    </>
  )
}


