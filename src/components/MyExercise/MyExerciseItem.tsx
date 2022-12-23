import { Exercise } from 'types'
import { ExerciseDuration, ExerciseKcal, ExerciseName, MyExerciseItemWrapper } from './Styled'

function MyExerciseItem({ exercise }: { exercise: Exercise }): JSX.Element {
  return (
    <MyExerciseItemWrapper>
      <div className="d-flex justify-content-between" style={{ width: '100%' }}>
        <div>
          <ExerciseName>{exercise.name}</ExerciseName>
          <ExerciseKcal>{exercise.kcal}kcal</ExerciseKcal>
        </div>
        <ExerciseDuration>{exercise.duration / 60} mins</ExerciseDuration>
      </div>
    </MyExerciseItemWrapper>
  )
}

export default MyExerciseItem
