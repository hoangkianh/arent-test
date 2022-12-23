import styled from 'styled-components/macro'

export const MealHistoryWrapper = styled.div`
  margin: 0 -8px 28px;
  display: flex;
  flex-wrap: wrap;
`
export const MealItemWrapper = styled.div`
  padding: 8px;
  width: 50%;
  aspect-ratio: 1 / 1;

  @media (min-width: 768px) {
    width: 25%;
  }
`
export const MealItemInner = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`
export const MealText = styled.p`
  position: absolute;
  bottom: -16px;
  background-color: ${props => props.theme.primary[300]};
  padding: 8px;
  font-family: Inter, sans-serif;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
  color: #fff;
`
