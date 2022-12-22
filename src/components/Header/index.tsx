import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HeaderWrapper, LogoImage, MainMenu, MainMenuItem, FlexLink, Notification } from './Styled'
import LogoPNG from 'assets/images/logo.png'
import DrawerMenu from './DrawerMenu'

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={6} md={2}>
            <Link to="/">
              <LogoImage src={LogoPNG} alt="Healthy" />
            </Link>
          </Col>
          <Col xs={6} md={8} className="d-flex justify-content-end">
            <MainMenu>
              <MainMenuItem>
                <FlexLink to="/my-record">
                  <i className="healthy-challenge" />
                  <span>自分の記録</span>
                </FlexLink>
              </MainMenuItem>
              <MainMenuItem>
                <FlexLink to="/">
                  <i className="healthy-record" />
                  <span>チャレンジ</span>
                </FlexLink>
              </MainMenuItem>
              <MainMenuItem>
                <FlexLink to="/">
                  <Notification>
                    <span>1</span>
                    <i className="healthy-notification" />
                  </Notification>
                  <span>お知らせ</span>
                </FlexLink>
              </MainMenuItem>
            </MainMenu>

            <DrawerMenu />
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
