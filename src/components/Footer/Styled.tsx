import styled from 'styled-components/macro'

export const FooterWrapper = styled.div`
  margin-top: 32px;
  background-color: ${props => props.theme.dark[500]};
  color: ${props => props.theme.light};

  @media (min-width: 1200px) {
    margin-top: 64px;
  }
`
export const FooterMenu = styled.ul`
  padding: 52px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 45px;
  }
`
