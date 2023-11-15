import React, { useContext, useState } from 'react';
import { AppContext, SET_NEW_BUDGET } from '../context/AppContext';

const Budget = () => {
    const { budget, Location, dispatch, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;

        // Check if the updated budget is less than the total spending
        const totalSpending = expenses.reduce((total, item) => total + item.cost, 0);

        if (updatedBudget < totalSpending) {
            alert("Warning: The budget cannot be less than the total spending.");
            return; // Prevent updating the state if the budget is less than the total spending
        }

        // Check if the updated budget exceeds the upper limit (20000)
        if (updatedBudget > 20000) {
            alert("Warning: The budget cannot exceed 20000.");
            return; // Prevent updating the state if the budget exceeds the limit
        }

        // Update the newBudget state
        setNewBudget(updatedBudget);

        // Dispatch the new budget value to the AppContext
        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBudget,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Location} {budget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            ></input>
        </div>
    );
};

export default Budget;
