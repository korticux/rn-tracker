import {View, StyleSheet} from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2022-06-07')
  },
  {
    id: 'e2',
    description: 'A pair of socks',
    amount: 89.29,
    date: new Date('2022-06-04')
},
{
    id: 'e3',
    description: 'some bananas',
    amount: 5.99,
    date: new Date('2022-06-01')
},
{
    id: 'e4',
    description: 'A book',
    amount: 19.99,
    date: new Date('2022-05-28')
},
];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View>
            <ExpensesSummary  expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;