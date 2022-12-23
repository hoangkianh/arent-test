import { Meal } from 'types'
import { MealItemWrapper, MealItemInner, MealText } from './Styled'

function MealBox({ meal }: { meal: Meal }): JSX.Element {
  return (
    <MealItemWrapper>
      <MealItemInner>
        <img src={`${process.env.PUBLIC_URL}/meals/${meal.image}`} alt="" />
        <MealText>{`${meal.date}.${meal.meal}`}</MealText>
      </MealItemInner>
    </MealItemWrapper>
  )
}

export default MealBox
