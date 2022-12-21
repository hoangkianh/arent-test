import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HeaderWrapper, LogoImage, MenuList, MenuListItem } from './Styled'
import LogoPNG from 'assets/images/logo.png'

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={6} md={2}>
            <LogoImage src={LogoPNG} alt="Healthy" />
          </Col>
          <Col xs={6} md={8}>
            <MenuList>
              <MenuListItem>
                <Link to="/">
                  <i className="healthy-challenge" />
                  <span>自分の記録</span>
                </Link>
              </MenuListItem>
              <MenuListItem>
                <Link to="/">
                  <i className="healthy-record" />
                  <span>チャレンジ</span>
                </Link>
              </MenuListItem>
              <MenuListItem>
                <Link to="/">
                  <i className="healthy-notification" />
                  <span>お知らせ</span>
                </Link>
              </MenuListItem>
            </MenuList>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
