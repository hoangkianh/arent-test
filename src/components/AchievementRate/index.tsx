import { Chart as ChartJS, ArcElement, Plugin } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import styled from 'styled-components/macro'
import BackgroundImage from 'assets/images/d01.jpg'
import rate from 'data/achievement-rate.json'

const Wrapper = styled.div`
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
const TextWrapper = styled.div`
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
const InlineText = styled.div`
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
const DateText = styled.span`
  font-size: 18px;
  line-height: 22px;
`
const PercentText = styled.span`
  font-size: 25px;
  line-height: 30px;
  margin-left: 4px;
`

function AchievementRate(): JSX.Element {
  ChartJS.register(ArcElement)

  const data = {
    datasets: [
      {
        data: [rate, 100 - rate[0]],
        backgroundColor: ['#ffffff', 'rgba(0, 0, 0, 0)'],
        borderWidth: 0,
      },
    ],
  }

  const shadowPlugin = {
    id: 'shadowPlugin',
    beforeDraw: (chart: any) => {
      const { ctx } = chart
      ctx.shadowColor = '#fc7400'
      ctx.shadowBlur = 6
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
    },
  } as Plugin<'doughnut'>

  const today = new Date()

  return (
    <Wrapper>
      <img src={BackgroundImage} alt="" />
      <TextWrapper>
        <Doughnut
          data={data}
          options={{
            cutout: 86,
          }}
          plugins={[shadowPlugin]}
        />
        <InlineText>
          <DateText>{`${today.getMonth() + 1}/${today.getDate()}`}</DateText>
          <PercentText>{`${rate[0]}%`}</PercentText>
        </InlineText>
      </TextWrapper>
    </Wrapper>
  )
}

export default AchievementRate
