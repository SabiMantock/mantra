import { SummaryCardProps } from '../../lib/types/types';
import Card from '../ui/Card';

const SummaryCard = ({ title, value, percentage, icon }: SummaryCardProps) => {
  return (
    <Card className="max-w-md mx-2 sm:mx-0 p-4 rounded-lg shadow-md ring-1 ring-gray-800/20">
      <div className="flex flex-col ">
        <div className="flex items-center gap-2 justify-between">
          <div className="text-sm">{title}</div>
          <div>{icon}</div>
        </div>
        <div className="text-2xl mt-1 font-bold">{value}</div>
        <div className="text-sm mt-2 text-gray-500">{percentage}</div>
      </div>
    </Card>
  );
};

export default SummaryCard;
