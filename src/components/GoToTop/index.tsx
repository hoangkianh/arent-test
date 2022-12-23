import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

const GoToTopWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  height: 32px;
  width: 32px;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 100%;
  cursor: pointer;
  text-align: center;
  color: ${props => props.theme.gray};
  transition: all 0.5s ease;

  @media (min-width: 992px) {
    bottom: 3rem;
    right: 3rem;
    height: 48px;
    width: 48px;
  }

  i {
    line-height: 26px;
    font-size: 8px;

    @media (min-width: 992px) {
      font-size: 12px;
      line-height: 44px;
    }
  }

  span {
    font-size: 0;
    line-height: 0;
    visibility: hidden;
  }

  &:hover {
    background-color: ${props => props.theme.primary[400]};
    border-color: ${props => props.theme.primary[400]};

    i {
      color: ${props => props.theme.light};
    }
  }
`

function GoToTop(): JSX.Element {
  const [show, setShow] = useState(false)
  const [scrollPosition, setSrollPosition] = useState(0)

  const handleVisibleButton = () => {
    const position = window.pageYOffset
    setSrollPosition(position)
    return setShow(scrollPosition > 100)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton)
  })

  return (
    <>
      {show && (
        <GoToTopWrapper onClick={scrollToTop}>
          <i className="healthy-top" />
          <span>GoToTop</span>
        </GoToTopWrapper>
      )}
    </>
  )
}

export default GoToTop
