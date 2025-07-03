import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Chart1: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const myChart = echarts.init(chartRef.current);
    const option = {
      tooltip: { trigger: 'item' },
      legend: { top: '5%', left: 'center', marginBottom: 10},
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: { show: false, position: 'center' },
          emphasis: {
            label: { show: true, fontSize: 40, fontWeight: 'bold' }
          },
          data: [
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
            { value: 200, name: 'Direct' },
          ]
        }
      ]
    };
    myChart.setOption(option);
    return () => { myChart.dispose(); };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '150%' }} />;
};

export default Chart1;
