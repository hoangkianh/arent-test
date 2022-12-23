import styled from 'styled-components/macro'

export const BlogItemWrapper = styled.div`
  margin-bottom: 18px;
`
export const BlogImage = styled.div`
  position: relative;
  margin-bottom: 8px;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    height: 235px;
    object-fit: cover;
    object-position: center;
  }
`
export const BlogDate = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.primary[300]};
  padding: 8px;
  font-family: Inter, sans-serif;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
  color: #fff;

  span {
    display: inline-block;

    &:last-child {
      margin-left: 12px;
    }
  }
`
export const BlogExcerpt = styled.p`
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 22px;
`
export const BlogHashTag = styled.span`
  display: inline-block;
  margin-right: 12px;
  color: ${props => props.theme.primary[400]};
`
