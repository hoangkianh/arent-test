import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components/macro'

import RecordCategoryBox from 'components/RecordCategoryBox'
import BodyFatChart from 'components/BodyFatChart'
import MyExercise from 'components/MyExercise'
import MyDiary from 'components/MyDiary'
import BodyRecordJPG from 'assets/images/body-record.jpg'
import MyExerciseJPG from 'assets/images/my-exercise.jpg'
import MyDiaryJPG from 'assets/images/my-diary.jpg'

const MarginedRow = styled.div`
  margin-top: 30px;

  @media (min-width: 992px) {
    margin-top: 56px;
  }
`

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

      <Row>
        <Col>
          <MarginedRow>
            <BodyFatChart backgroundColor="#2e2e2e" maxHeight="none" title="Body Record" showButtons={true} />
          </MarginedRow>
        </Col>
      </Row>

      <Row>
        <Col>
          <MarginedRow>
            <MyExercise />
          </MarginedRow>
        </Col>
      </Row>

      <Row>
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
