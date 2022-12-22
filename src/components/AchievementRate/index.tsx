import { Chart as ChartJS, ArcElement, Plugin } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import BackgroundImage from 'assets/images/d01.jpg'
import rate from 'data/achievement-rate.json'
import { Wrapper, TextWrapper, InlineText, DateText, PercentText } from './Styled'

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
