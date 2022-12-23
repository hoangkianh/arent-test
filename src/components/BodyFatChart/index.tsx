import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components/macro'
import bodyFatData from 'data/bodyfat.json'

const BodyFatChartWrapper = styled.div.attrs(props => ({
  // @ts-ignore
  bgcolor: props.bgcolor || '#2e2e2e',
}))`
  background-color: ${props => props.bgcolor}};
  max-height: 315px;
  height: 100%;

  canvas {
    width: 100%;
  }
`

interface BodyFatChartProps {
  backgroundColor: string
}

function BodyFatChart(props: BodyFatChartProps): JSX.Element {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)
  const { backgroundColor } = props

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#777777',
          borderColor: '#777777',
          ticks: {
            callback: function (value) {
              return `${value}%`
            },
          },
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  }
  const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月']
  const data = {
    labels,
    datasets: [
      {
        label: '日',
        data: bodyFatData[0].line1,
        borderColor: '#8fe9d0',
        backgroundColor: '#8fe9d0',
      },
      {
        label: '週',
        data: bodyFatData[0].line2,
        borderColor: '#ffcc21',
        backgroundColor: '#ffcc21',
      },
    ],
  }

  return (
    <BodyFatChartWrapper bgcolor={backgroundColor}>
      <Line data={data} options={options} />
    </BodyFatChartWrapper>
  )
}

export default BodyFatChart
