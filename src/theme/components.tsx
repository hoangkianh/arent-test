import { Button } from 'react-bootstrap'
import styled from 'styled-components/macro'

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
