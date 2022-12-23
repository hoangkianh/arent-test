import styled from 'styled-components/macro'

export const Box = styled.div`
  margin: 30px auto 0;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.dark[600]};
  text-align: center;
  height: 216px;

  @media (min-widht: 992px) {
    margin-top: 56px;
  }

  hr {
    margin: 0 auto;
    max-width: 56px;
    border: 1px solid ${props => props.theme.light};
  }
`
export const Title = styled.p`
  margin-bottom: 10px;
  text-transform: uppercase;
  font-family: Inter, sans-serif;
  font-weight: 300;
  font-size: 22px;
  line-height: 27px;
  color: ${props => props.theme.primary[300]};
`
export const Description = styled.span`
  margin-top: 10px;
  display: block;
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  color: ${props => props.theme.light};
`
