import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { BiPound } from 'react-icons/bi';
import SummaryCard from './components/dashboard/SummaryCard';
import TransactionForm from './components/transactions/TransactionForm';

import Chart from './components/dashboard/Chart';
import { mockMonthlyExpenseData } from './data/data';

function App() {
  return (
    <>
      <SummaryCard
        title="Net Worth"
        value={`£100,000`}
        percentage={`10% from last Month`}
        icon={<BiPound size={20} />}
      />
      <TransactionForm />
      <SignIn />
      <SignUp />
      <Chart data={mockMonthlyExpenseData} />
    </>
  );
}

export default App;
