import { HexagonWrapper, TrianglesBottom, TrianglesTop } from './Styled'

interface HexagonMenuProps {
  text: string
  icon: 'meal' | 'snack'
}

function HexagonMenuItem(props: HexagonMenuProps): JSX.Element {
  const { text, icon } = props
  return (
    <HexagonWrapper>
      <TrianglesTop />
      <i className={`healthy-${icon}`} />
      <span>{text}</span>
      <TrianglesBottom />
    </HexagonWrapper>
  )
}

export default HexagonMenuItem
