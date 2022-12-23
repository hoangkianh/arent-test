import { Button } from 'react-bootstrap'
import styled from 'styled-components/macro'

export const BodyFatChartWrapper = styled.div.attrs(props => ({
  // @ts-ignore
  height: props.height || '315px',
  // @ts-ignore
  bgcolor: props.bgcolor || '#2e2e2e',
}))`
  padding: 16px;
  background-color: ${props => props.bgcolor}};
  max-height: ${props => props.height}};
  height: ${props => (props.height == 'none' ? '315px' : '100%')};

  canvas {
    margin-bottom: ${props => (props.height == 'none' ? '8px' : '0')};
    height: ${props => (props.height == 'none' ? '200px !important' : '100%')};
  }

  @media (min-width: 768px) {
    padding: 16px 24px;
  }
`

export const ChartTitle = styled.p`
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
export const ChartButton = styled(Button)`
  border-radius: 11px;
  background-color: ${props => props.theme.light};
  border: none;
  margin-left: 16px;
  padding: 0 20px;
  height: 24px;
  font-size: 15px;
  color: ${props => props.theme.primary[300]};

  &:hover {
    background-color: ${props => props.theme.primary[300]};
    color: ${props => props.theme.light};
  }

  &:first-child {
    margin: 0;
  }
`
