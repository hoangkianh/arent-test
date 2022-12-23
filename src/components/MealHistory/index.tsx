import meals from 'data/meal-history.json'
import HexagonMenu from 'components/HexagonMenu'
import { Row, Col } from 'react-bootstrap'
import { MealHistoryWrapper } from './Styled'
import MealBox from './MealBox'
import { GradientButton } from 'theme/components'

function MealHistory(): JSX.Element {
  return (
    <div className="text-center">
      {/* Hexagon Menu */}
      <Row className="justify-content-center">
        <Col xs={12} lg={10}>
          <HexagonMenu />
        </Col>
      </Row>

      <MealHistoryWrapper>
        {meals.map((m, index) => (
          <MealBox key={index} meal={m} />
        ))}
      </MealHistoryWrapper>
      <GradientButton>
        <span>記録をもっと見る</span>
      </GradientButton>
    </div>
  )
}

export default MealHistory
