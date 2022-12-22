import AchievementRate from 'components/AchievementRate'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function TopPage(): JSX.Element {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row>
        <Col xs={12} md={6} lg={5}>
          <AchievementRate />
        </Col>
        <Col xs={12} md={6} lg={7} />
      </Row>
    </Container>
  )
}

export default TopPage
