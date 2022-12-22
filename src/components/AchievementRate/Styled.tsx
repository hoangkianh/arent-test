import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  position: relative;
  max-height: 315px;
  overflow: hidden;

  img {
    width: 100%;
    object-position: center;
    margin-top: -25%;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      225deg,
      ${props => props.theme.primary[300]} 0%,
      ${props => props.theme.primary[400]} 100%
    );
    mix-blend-mode: soft-light;
  }
`
export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 180px;
  height: 180px;
  text-shadow: 0px 0px 6px #fc7400;
  transform: translate(-50%, -50%);
  font-family: Inter, sans-serif;
  color: #fff;
`
export const InlineText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);

  span {
    display: inline-block;
  }
`
export const DateText = styled.span`
  font-size: 18px;
  line-height: 22px;
`
export const PercentText = styled.span`
  font-size: 25px;
  line-height: 30px;
  margin-left: 4px;
`
