import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useFormikContext } from 'formik';
import { FirstRunValues } from '../../customTypes';

export default function Step2() {
  const { values, errors, handleChange } = useFormikContext<FirstRunValues>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Password</Text>

      <TextInput
        onChangeText={handleChange('password')}
        autoCapitalize="none"
        value={values.password}
        style={styles.input}
        secureTextEntry={true}
      ></TextInput>

      {errors.password ? <Text style={styles.errors}>{errors.password}</Text> : null}

      <Text style={styles.header}> Confirm Password</Text>

      <TextInput
        onChangeText={handleChange('confirmPassword')}
        autoCapitalize="none"
        value={values.confirmPassword}
        style={styles.input}
        secureTextEntry={true}
      ></TextInput>

      {errors.confirmPassword ? <Text style={styles.errors}>{errors.confirmPassword}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '25%',
  },
  header: {
    fontSize: 14,
    fontWeight: '400',
    paddingTop: '7%',
    marginLeft: '11%',
  },
  errors: {
    color: 'red',
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 5,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginVertical: '3%',
    marginHorizontal: '12%',
  },
});
