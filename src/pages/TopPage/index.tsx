import AchievementRate from 'components/AchievementRate'
import HexagonMenu from 'components/HexagonMenu'
import { Col, Container, Row } from 'react-bootstrap'

function TopPage(): JSX.Element {
  return (
    <>
      <Container fluid style={{ padding: 0 }}>
        <Row>
          <Col xs={12} md={6} lg={5}>
            <AchievementRate />
          </Col>
          <Col xs={12} md={6} lg={7} />
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10}>
            {/* Hexagon Menu */}
            <HexagonMenu />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TopPage
