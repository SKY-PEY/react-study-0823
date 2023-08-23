import React from 'react';
import './ExpenseForm.css';


const ExpenseFrom = ({ handleCharge, charge, amount, handleAmount, handleSubmit, edit }) => {
    return (
      <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className='form-group'>
          <label htmlFor="expense">지출항목</label>
          <input
            type='text'
            className='form-control'
            id='charge'
            name='charge'
            placeholder='예) 렌트비'
            onChange={handleCharge}
            value={charge}
          />
        </div>

        <div className='form-group'>
          <label htmlFor="charge">비용</label>
          <input
            type='number'
            className='form-control'
            id='amount'
            name='charge'
            placeholder='예) 100'
            onChange={handleAmount}
            value={amount}
          
          />
        </div>
      </div>

      <button className='btn' type='submit'>
        {edit ? "수정" : "제출"}
      </button>
      </form>
    )
  
}

export default ExpenseFrom;