import Blog from 'components/Blog'
import RecommendedBox from 'components/RecommendedBox'
import { Col, Container, Row } from 'react-bootstrap'
import { MarginedRow } from 'theme/components'

function ColumnPage(): JSX.Element {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} lg={3}>
          <RecommendedBox title="RECOMMENDED COLUMN" description="オススメ" />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <RecommendedBox title="RECOMMENDED DIET" description="ダイエット" />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <RecommendedBox title="RECOMMENDED BEAUTY" description="美容" />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <RecommendedBox title="RECOMMENDED HEALTH" description="健康" />
        </Col>
      </Row>

      <Row>
        <Col>
          <MarginedRow>
            <Blog />
          </MarginedRow>
        </Col>
      </Row>
    </Container>
  )
}

export default ColumnPage
