import { Box, Description, Image, TextWrapper, Title } from './Styled'

interface RecordCategoryBoxProps {
  scrollToDiv: string
  imageUrl: string
  title: string
  description: string
}

function RecordCategoryBox(props: RecordCategoryBoxProps): JSX.Element {
  const { scrollToDiv, imageUrl, title, description } = props

  const scroll = () => {
    const element = document.getElementById(scrollToDiv)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box onClick={scroll}>
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
