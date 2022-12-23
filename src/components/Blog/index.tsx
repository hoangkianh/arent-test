import { Row, Col } from 'react-bootstrap'
import data from 'data/blog.json'
import BlogItem from './BlogItem'
import { GradientButton } from 'theme/components'

function Blog(): JSX.Element {
  return (
    <div className="text-center">
      <Row style={{ marginBottom: 30 }}>
        {data.map(b => (
          <Col key={b.id} xs={12} sm={6} md={4} lg={3}>
            <BlogItem blog={b} />
          </Col>
        ))}
      </Row>
      <GradientButton>
        <span>コラムをもっと見る</span>
      </GradientButton>
    </div>
  )
}

export default Blog
