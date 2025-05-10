import { useState } from 'react';
import Form from '../form/Form';
import Button from '../ui/Button';
import Card from '../ui/Card';

const TransactionForm = () => {
  const [isExpense, setIsExpense] = useState(true);

  return (
    <Card className="max-w-2xl mx-2 sm:mx-0 p-4 rounded-lg dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-center text-[#F8F8FA]">
        Transaction
      </h3>
      <div className="flex justify-center my-4">
        <Button
          label="Expense"
          className={`px-4 py-2 text-sm font-medium rounded-l-lg border cursor-pointer ${isExpense ? 'bg-red-600 text-[#F8F8FA] border-red-600' : 'bg-white text-gray-700 border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600'}`}
          onClick={() => setIsExpense(true)}
        />
        <Button
          label="Income"
          className={`px-4 py-2 text-sm font-medium rounded-r-lg border cursor-pointer ${!isExpense ? 'bg-green-400 text-[#F8F8FA] border-green-400' : 'bg-white text-gray-700 border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600'}`}
          onClick={() => setIsExpense(false)}
        />
      </div>
      <Form isExpense={isExpense} />
    </Card>
  );
};

export default TransactionForm;
