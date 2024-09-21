import { LineChart } from '@mui/x-charts/LineChart';

const GraficaGastos = () => {
  return (
    <LineChart
        xAxis={[{ data: [1, 5, 10, 15, 20, 25, 30] }]}
        series={[
        {
            data: [8000, 6000, 2000, 10000, 8000, 6000, 2000],
            area: true,
        },
        {
            data: [1, 5.5, 1, 5.5, 1.5, 5],
            area: true,
        },
        ]}
        width={350}
        height={200}
    />
  )
}

export default GraficaGastos
