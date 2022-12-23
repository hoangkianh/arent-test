import styled from 'styled-components/macro'

export const Box = styled.div`
  margin: 30px auto 0;
  background-color: ${props => props.theme.primary[300]};
  padding: 24px;
  position: relative;
  // max-width: 288px;
  aspect-ratio: 1 / 1;
  cursor: pointer;

  @media (min-widht: 992px) {
    margin-top: 56px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 18px;
  }
`
export const Image = styled.div`
  position: relative;
  height: 100%;

  &::before {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    background-color: #000;
    opacity: 0.7;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: grayscale(1);
  }
`
export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
`
export const Title = styled.p`
  margin-bottom: 10px;
  line-height: 25px;
  letter-spacing: 0.125px;
  text-transform: uppercase;
  font-family: Inter, sans-serif;
  font-weight: 300;
  font-size: 30px;
  color: ${props => props.theme.primary[300]};

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 20px;
  }
`
export const Description = styled.span`
  display: inline-block;
  padding: 0 15px;
  background-color: ${props => props.theme.primary[400]};
  font-size: 14px;
  font-weight: 300;
  color: ${props => props.theme.light};
`
