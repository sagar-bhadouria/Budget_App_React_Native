import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFood } from '../redux/actions/budget';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [PlannedAmount, setPlannedAmount] = useState('');
  const [ActualAmount, setActualAmount] = useState('');
  const dispatch = useDispatch();
  const saveData = () => {
    if (itemName === "" && PlannedAmount === "" && ActualAmount === "") {
      alert("Fill All the fields")
    }
    else {

      dispatch(
        addFood({
          itemName: itemName,
          plannedAmount: PlannedAmount,
          actualAmount: ActualAmount,
        })
      );
      setItemName('');
      setActualAmount('');
      setPlannedAmount('');
      Keyboard.dismiss();
    }
  };

  return (
    <View>
      <Text style={styles.title}>Name of the Item:</Text>
      <TextInput
        placeholder="eg. Sports"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={itemName}
        onChangeText={(value) => setItemName(value)}
      />
      <Text style={styles.title}>Planned Amount:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        autoCorrect={false}
        value={PlannedAmount}
        onChangeText={(value) => setPlannedAmount(value)}
      />
      <Text style={styles.title}>Actual Amount:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={ActualAmount}
        onChangeText={(newValue) => setActualAmount(newValue)}
      />
      <View style={styles.Viewstyle1}>
        <Button title="Save" onPress={saveData} color="green" />
      </View>
      <View style={styles.Viewstyle2}>
        <Button
          title="Show Items"
          onPress={() => navigation.navigate('List')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 30,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    marginLeft: 30,
  },
  Viewstyle1: {
    marginLeft: 150,
    marginRight: 150,
  },
  Viewstyle2: {
    marginTop: 150,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default HomeScreen;
