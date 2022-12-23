import { Button } from 'react-bootstrap'
import styled from 'styled-components/macro'

export const MarginedRow = styled.div`
  margin-top: 30px;

  @media (min-width: 992px) {
    margin-top: 56px;
  }
`
export const GradientButton = styled(Button)`
  position: relative;
  z-index: 2;
  overflow: hiddent;
  padding: 14px 0;
  border-radius: 5px;
  background: linear-gradient(
    32.95deg,
    ${props => props.theme.primary[300]} 8.75%,
    ${props => props.theme.primary[400]} 86.64%
  );
  border: none;
  min-width: 295px;

  &::before {
    position: absolute;
    content: '';
    inset: 0;
    border-radius: 5px;
    background: linear-gradient(
      32.95deg,
      ${props => props.theme.primary[400]} 8.75%,
      ${props => props.theme.primary[300]} 86.64%
    );
    z-index: 1;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  span {
    position: relative;
    z-index: 2;
  }
`
export const BoxTitle = styled.p`
  margin: 0;
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-weight: 300;
  max-width: 70px;
  line-height: 18px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  color: ${props => props.theme.light};
`
export const DateText = styled.p`
  margin-left: 32px;
  font-family: Inter, sans-serif;
  font-size: 22px;
  font-weight: 300;
  line-height: 27px;
  color: ${props => props.theme.light};
`
