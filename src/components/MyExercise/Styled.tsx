import styled from 'styled-components/macro'

export const MyExerciseWrapper = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.dark[500]}};
  color: ${props => props.theme.light};

  @media (min-width: 768px) {
    padding: 16px 24px;
  }
`
export const MyExerciseList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-height: 300px;

  @media (min-width: 992px) {
    max-height: 192px;
  }
`
export const MyExerciseItemWrapper = styled.li`
  margin-top: 8px;
  margin-right: 16px;
  padding-bottom: 8px;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.gray};
  width: 100%;

  @media (min-width: 768px) {
    width: 45%;
    margin-right: 32px;
  }

  &::before {
    content: '●';
    display: block;
    font-size: 10px;
    margin-right: 8px;
  }
`
export const ExerciseName = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
`
export const ExerciseKcal = styled.p`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: ${props => props.theme.primary[300]}};
`
export const ExerciseDuration = styled.p`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.theme.primary[300]}};
`
