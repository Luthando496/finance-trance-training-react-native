import { createContext } from "react";

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({title,amount,date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id,{title,amount,date}) => {}
});


const expensesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            const id = new Date().getTime() + Math.floor(Math.random() * 100).toString();   
            return [{id:id,expense:action.expense},...state];
            
        case "DELETE_EXPENSE":
            return state.filter(expense => expense.id!== action.id);
            
        case "UPDATE_EXPENSE":
            const updatedExpense = state.findIndex(expense => expense.id === action.id);

            const updatableExpense = state[updatedExpense];
            
            const updatedItem = {...updatableExpense, ...action.expense.data}

            const updatedExpenses = [...state]
            
            updatedExpenses[updatedExpense] = updatedItem;
            return updatedExpenses;
            
        default:
            return state.filter(expense => expense.id!== action.payload);
    }
}


const ExpenseProvider = ({ children }) => {

    const [expenses,dispatch] = useReducer(expensesReducer, []);

    const addExpense =(expenseData)=>{
        dispatch({
            type: "ADD_EXPENSE",
            expense: expenseData
        })

    }

    const deleteExpense =(expenseData)=>{
        dispatch({
            type: "DELETE_EXPENSE",
            expense: expenseData
        })

    }

    const updateExpense =(expenseData)=>{
        dispatch({
            type: "UPDATE_EXPENSE",
            expense: {id:id,data:expenseData} 
        })

    }


    return(
        <ExpenseContext.Provider>
        {children}
        </ExpenseContext.Provider>
    )
}



export default ExpenseProvider;