import AchievementRate from 'components/AchievementRate'
import MealHistory from 'components/MealHistory'
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
        {/* Meal History */}
        <Row>
          <Col>
            <MealHistory />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TopPage
