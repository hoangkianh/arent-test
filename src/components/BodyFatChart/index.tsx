import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Line } from 'react-chartjs-2'
import bodyFatData from 'data/bodyfat.json'
import { BodyFatChartWrapper, ChartButton } from './Styled'
import { BoxTitle, DateText } from 'theme/components'

interface BodyFatChartProps {
  backgroundColor: string
  maxHeight?: string
  title?: string
  showButtons?: boolean
}

function BodyFatChart(props: BodyFatChartProps): JSX.Element {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)
  const { backgroundColor, maxHeight, title, showButtons } = props

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

  const today = new Date()

  return (
    <BodyFatChartWrapper bgcolor={backgroundColor} height={maxHeight}>
      {title && (
        <div className="d-flex">
          <BoxTitle>{title}</BoxTitle>
          <DateText>{`${today.getMonth() + 1}.${today.getDate()}.${today.getFullYear()}`}</DateText>
        </div>
      )}
      <Line data={data} options={options} />
      {showButtons && (
        <div className="d-flex">
          <ChartButton>日</ChartButton>
          <ChartButton>週</ChartButton>
          <ChartButton>月</ChartButton>
          <ChartButton>年</ChartButton>
        </div>
      )}
    </BodyFatChartWrapper>
  )
}

export default BodyFatChart
