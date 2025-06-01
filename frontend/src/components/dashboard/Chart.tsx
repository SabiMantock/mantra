import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';
import { ChartData } from '../../lib/types/types';

interface ExpenseChartProps {
  data: ChartData[];
}


const Chart = ({ data }: ExpenseChartProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
          <p className="font-medium text-gray-700 dark:text-gray-300">{label}</p>
          <p className="text-emerald-500">
            Income: {formatCurrency(payload[0].value as number)}
          </p>
          <p className="text-red-500">
            Expenses: {formatCurrency(payload[1].value as number)}
          </p>
          <p className="text-blue-500 font-medium mt-2">
            Net: {formatCurrency((payload[0].value as number) - (payload[1].value as number))}
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="h-80 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#6B7280' }}
            axisLine={{ stroke: '#9CA3AF' }}
          />
          <YAxis 
            tickFormatter={formatCurrency} 
            tick={{ fill: '#6B7280' }}
            axisLine={{ stroke: '#9CA3AF' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="income" name="Income" fill="#10B981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expenses" name="Expenses" fill="#EF4444" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart