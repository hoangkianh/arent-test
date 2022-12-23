import styled from 'styled-components/macro'

export const HexagonMenuWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 33px 0;
`
export const HexagonWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 62px;
  height: 105px;
  background: linear-gradient(
    90deg,
    ${props => props.theme.primary[300]} 8.26%,
    ${props => props.theme.primary[400]} 91.18%
  );
  cursor: pointer;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 13px;
  line-height: 16px;
  color: #fff;

  @media (min-width: 576px) {
    width: 100px;
    height: 125px;
    font-size: 18px;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    width: 116px;
    height: 136px;
    font-size: 20px;
    line-height: 33px;
  }

  i {
    display: block;
    font-size: 28px;

    @media (min-width: 576px) {
      font-size: 32px;
    }

    @media (min-width: 768px) {
      margin-top: 10px;
      font-size: 40px;
    }
  }
`
export const TrianglesTop = styled.div`
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
  }

  &::before {
    left: 0;
    border-width: 33px 58px 0 0;
    border-color: #ffffff transparent transparent transparent;
  }

  &::after {
    right: 0;
    border-width: 0 58px 33px 0;
    border-color: transparent #ffffff transparent transparent;
  }
`
export const TrianglesBottom = styled.div`
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
  }

  &::before {
    left: 0;
    border-width: 33px 0 0 58px;
    border-color: transparent transparent transparent #ffffff;
  }

  &::after {
    right: 0;
    border-width: 0 0 33px 58px;
    border-color: transparent transparent #ffffff transparent;
  }
`
