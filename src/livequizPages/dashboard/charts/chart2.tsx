import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Chart2: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const myChart = echarts.init(chartRef.current);
    const option = {
      tooltip: { trigger: 'item' },
      legend: { top: '5%', left: 'center' },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],
          startAngle: 180,
          endAngle: 360,
          data: [
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
            { value: 735, name: 'Direct' },
          ]
        }
      ]
    };
    myChart.setOption(option);
    return () => { myChart.dispose(); };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '150%' }} />;
};

export default Chart2;
