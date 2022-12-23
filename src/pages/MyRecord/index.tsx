import { Col, Container, Row } from 'react-bootstrap'

import RecordCategoryBox from 'components/RecordCategoryBox'
import BodyFatChart from 'components/BodyFatChart'
import MyExercise from 'components/MyExercise'
import MyDiary from 'components/MyDiary'
import BodyRecordJPG from 'assets/images/body-record.jpg'
import MyExerciseJPG from 'assets/images/my-exercise.jpg'
import MyDiaryJPG from 'assets/images/my-diary.jpg'
import { MarginedRow } from 'theme/components'

function MyRecord() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <RecordCategoryBox
            scrollToDiv="#body-record"
            imageUrl={BodyRecordJPG}
            title="Body Record"
            description="自分のカラダの記録"
          />
        </Col>
        <Col xs={12} md={4}>
          <RecordCategoryBox
            scrollToDiv="#my-exercise"
            imageUrl={MyExerciseJPG}
            title="My Exercise"
            description="自分のカラダの記録"
          />
        </Col>
        <Col xs={12} md={4}>
          <RecordCategoryBox
            scrollToDiv="#my-diary"
            imageUrl={MyDiaryJPG}
            title="My Diary"
            description="自分のカラダの記録"
          />
        </Col>
      </Row>

      <Row id="#body-record">
        <Col>
          <MarginedRow>
            <BodyFatChart backgroundColor="#2e2e2e" maxHeight="none" title="Body Record" showButtons={true} />
          </MarginedRow>
        </Col>
      </Row>

      <Row id="#my-exercise">
        <Col>
          <MarginedRow>
            <MyExercise />
          </MarginedRow>
        </Col>
      </Row>

      <Row id="#my-diary">
        <Col>
          <MarginedRow>
            <MyDiary />
          </MarginedRow>
        </Col>
      </Row>
    </Container>
  )
}

export default MyRecord
