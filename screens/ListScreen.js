import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useSelector } from 'react-redux';
export default function ListScreen() {
  const list = useSelector((state) => state.budgets.budgetList);
  console.log(list);
  return (

    <View>
      <View>
        <DataTable.Header>
          <DataTable.Title>Item Name</DataTable.Title>
          <DataTable.Title>Actual Amount</DataTable.Title>
          <DataTable.Title>Planned Amount</DataTable.Title>
        </DataTable.Header>
      </View>
      {list.map((item) => <View styles={styles.container}>
        <DataTable>

          <DataTable.Row>
            <DataTable.Cell>{item.budget.itemName}</DataTable.Cell>
            <DataTable.Cell>{item.budget.plannedAmount}</DataTable.Cell>
            <DataTable.Cell numeric>{item.budget.actualAmount}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

      </View>)}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});
