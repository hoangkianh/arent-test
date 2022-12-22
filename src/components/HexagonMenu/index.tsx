import React from 'react'
import HexagonMenuItem from './HexagonMenuItem'
import { HexagonMenuWrapper } from './Styled'

function HexagonMenu(): JSX.Element {
  return (
    <HexagonMenuWrapper>
      <HexagonMenuItem text="Morning" icon="meal" />
      <HexagonMenuItem text="Lunch" icon="meal" />
      <HexagonMenuItem text="Dinner" icon="meal" />
      <HexagonMenuItem text="Snack" icon="snack" />
    </HexagonMenuWrapper>
  )
}

export default HexagonMenu
