import { Flatlist, Text } from 'react-native';

function renderExpenseItem(itemData) {
    return <Text>{itemData.item.description}</Text>;
}

function ExpensesList({ expenses }) {
    return (
        <Flatlist
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default ExpensesList;