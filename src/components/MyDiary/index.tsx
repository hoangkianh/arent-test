import { Col, Row } from 'react-bootstrap'
import { MyDiaryTitle } from './Styled'
import data from 'data/my-diary.json'
import MyDiaryItem from './MyDiaryItem'
import { GradientButton } from 'theme/components'

function MyDiary(): JSX.Element {
  return (
    <>
      <MyDiaryTitle>My Diary</MyDiaryTitle>
      <Row style={{ marginBottom: 30 }}>
        {data.map(d => (
          <Col key={d.id} xs={12} md={6} lg={3}>
            <MyDiaryItem diary={d} />
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <GradientButton>
          <span>自分の日記をもっと見る</span>
        </GradientButton>
      </div>
    </>
  )
}

export default MyDiary
