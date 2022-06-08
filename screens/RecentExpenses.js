import react from 'react';
import * as React from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses() {
    return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

export default RecentExpenses;