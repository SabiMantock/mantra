import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import TransactionForm from './components/transactions/TransactionForm';

function App() {
  return (
    <>
      <TransactionForm />
      <SignIn />
      <SignUp />
    </>
  );
}

export default App;
