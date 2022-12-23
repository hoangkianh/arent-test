import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { BoxTitle, DateText } from 'theme/components'
import { MyExerciseList, MyExerciseWrapper } from './Styled'
import data from 'data/my-exercise.json'
import MyExerciseItem from './MyExerciseItem'

function MyExercise(): JSX.Element {
  const today = new Date()

  return (
    <MyExerciseWrapper>
      <div className="d-flex">
        <BoxTitle>MY EXERCISE</BoxTitle>
        <DateText>{`${today.getMonth() + 1}.${today.getDate()}.${today.getFullYear()}`}</DateText>
      </div>
      <PerfectScrollbar>
        <MyExerciseList>
          {data.map(d => (
            <MyExerciseItem exercise={d} />
          ))}
        </MyExerciseList>
      </PerfectScrollbar>
    </MyExerciseWrapper>
  )
}

export default MyExercise
