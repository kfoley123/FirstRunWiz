import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useFormikContext } from 'formik';
import { FirstRunValues } from '../../customTypes';

export default function Step3() {
  const { values, errors, handleChange } = useFormikContext<FirstRunValues>();
  return (
    <View>
      <Text style={styles.header}>Business Name</Text>

      <Text style={styles.sectionInfoOpen}>
        The name of your business as it will appear to your clients.
      </Text>

      <TextInput
        onChangeText={handleChange('businessName')}
        autoCapitalize="words"
        value={values.businessName}
        style={styles.input}
      ></TextInput>

      {errors.businessName ? <Text style={styles.errors}>{errors.businessName}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '1%',
  },
  header: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: '33%',
    paddingBottom: '4%',
    textAlign: 'center',
  },
  errors: {
    color: 'red',
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 5,
  },
  sectionInfoOpen: { paddingHorizontal: '6%' },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginVertical: '5%',
    marginHorizontal: '12%',
  },
});
