"use client";
import { PieChart } from "@mui/x-charts/PieChart";

const pieParams = {
  height: 80,
  width: 80,
  margin: { right: 5 },
  slotProps: { legend: { hidden: true } },
};

const GraficaAhorro = ({ achieve = 20 }) => {
  const remaining = 100 - achieve;
  return (
    <div>
      <div className=" flex justify-center">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: achieve, label: "Conseguido", color: "green" },
                { id: 1, value: remaining, label: "Faltante", color: "gray" },
              ],

              innerRadius: 30,
              outerRadius: 2,
              startAngle: 180,
              endAngle: 540,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          {...pieParams}
        />
      </div>
      <div className="flex justify-center items-center">
        <span className="text-lg text-center text-white">Meta ahorro</span>
        <span className="p-3 text-[#FFFB66]">${achieve}</span>
      </div>
    </div>
  );
};

export default GraficaAhorro;
