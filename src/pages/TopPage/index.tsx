import { Col, Container, Row } from 'react-bootstrap'
import AchievementRate from 'components/AchievementRate'
import BodyFatChart from 'components/BodyFatChart'
import MealHistory from 'components/MealHistory'
import theme from 'theme'

function TopPage(): JSX.Element {
  return (
    <>
      <Container fluid style={{ padding: 0 }}>
        <Row style={{ margin: 0 }}>
          <Col xs={12} md={6} lg={5} style={{ padding: 0 }}>
            <AchievementRate />
          </Col>
          <Col xs={12} md={6} lg={7} style={{ padding: 0 }}>
            <BodyFatChart backgroundColor={theme.dark[600]} />
          </Col>
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
