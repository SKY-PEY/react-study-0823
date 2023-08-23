import './App.css';
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Test from './Test';

const App = () => {

  const [expenses, setExpenses] = useState([
    { id: 1, charge: '렌트비', amount: 2000 },
    { id: 2, charge: '교통비', amount: 400 },
    { id: 3, charge: '식비', amount: 1200 },
  ]);

  // setState() setExpenses()

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id)
    // console.log('clicked');   
    // console.log(newExpenses);
    // [
    //   { id: 2, charge: '교통비', amount: 400 },
    //   { id: 3, charge: '식비', amount: 1200 },
    // ]
    // state 변경을 위해서는 setState 함수를 이용!!! 
    setExpenses(newExpenses)
    // this.setState({
    //   expenses: newExpenses
    // })
  }
    return (
      <main className='main-container'>
        <h1>예산 계산기</h1>

        {/* <Test /> */}

        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          {/* Expense Form */}
          <ExpenseForm />
        </div>

        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          {/* Expense List */}
          <ExpenseList
            expenses={expenses}
            handleDelete={handleDelete}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem' }}>
            총지출:
            <span>원</span>
          </p>
        </div>

      </main>
    )
  
}

export default App;