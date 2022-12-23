import { Box, Description, Title } from './Styled'

interface RecommendedBoxProps {
  title: string
  description: string
}

function RecommendedBox(props: RecommendedBoxProps) {
  const { title, description } = props
  return (
    <Box>
      <div>
        <Title>{title}</Title>
        <hr />
        <Description>{description}</Description>
      </div>
    </Box>
  )
}

export default RecommendedBox
