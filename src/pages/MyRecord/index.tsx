import RecordCategoryBox from 'components/RecordCategoryBox'
import { Col, Container, Row } from 'react-bootstrap'
import BodyRecordJPG from 'assets/images/body-record.jpg'
import MyExerciseJPG from 'assets/images/my-exercise.jpg'
import MyDiaryJPG from 'assets/images/my-diary.jpg'

function MyRecord() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <RecordCategoryBox
            id="#body-record"
            imageUrl={BodyRecordJPG}
            title="Body Record"
            description="自分のカラダの記録"
          />
        </Col>
        <Col xs={12} md={4}>
          <RecordCategoryBox
            id="#my-exercise"
            imageUrl={MyExerciseJPG}
            title="My Exercise"
            description="自分のカラダの記録"
          />
        </Col>
        <Col xs={12} md={4}>
          <RecordCategoryBox id="#my-diary" imageUrl={MyDiaryJPG} title="My Diary" description="自分のカラダの記録" />
        </Col>
      </Row>
    </Container>
  )
}

export default MyRecord
