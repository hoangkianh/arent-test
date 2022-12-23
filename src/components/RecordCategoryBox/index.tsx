import { Box, Description, Image, TextWrapper, Title } from './Styled'

interface RecordCategoryBoxProps {
  id: string
  imageUrl: string
  title: string
  description: string
}

function RecordCategoryBox(props: RecordCategoryBoxProps): JSX.Element {
  const { id, imageUrl, title, description } = props
  return (
    <Box>
      <Image>
        <img src={imageUrl} alt={title} />
      </Image>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </Box>
  )
}

export default RecordCategoryBox
