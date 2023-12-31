import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { useFormikContext } from 'formik';
import { FirstRunValues } from '../../customTypes';
import Seperator from '../Seperator';
import CustomButton from '../CustomButton';

export default function Summary() {
  const { values, handleSubmit } = useFormikContext<FirstRunValues>();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Summary</Text>
        {/* ----------------  Name -------------- */}
        <View style={styles.row}>
          <Text style={styles.subheader}>Name:</Text>
          <Text>{values.name}</Text>
        </View>

        {/* ---------------- Email -------------- */}
        <View style={styles.row}>
          <Text style={styles.subheader}>Email:</Text>
          <Text>{values.email}</Text>
        </View>

        {/* ----------------  Phone -------------- */}
        <View style={styles.row}>
          <Text style={styles.subheader}>Phone:</Text>
          <Text>{values.phone}</Text>
        </View>

        <Seperator />

        {/* ----------------  Business Name -------------- */}
        <View style={styles.row}>
          <Text style={styles.subheader}>Business Name:</Text>
          <Text>{values.businessName}</Text>
        </View>

        <Seperator />

        {/* ---------------- Available Days -------------- */}

        <View>
          <Text style={styles.subheader}>Available Days:</Text>
          <View style={styles.dayContainer}>
            {values.availableDays
              .filter((day) => day.checked)
              .map((day, i) => (
                <Text style={styles.field} key={i}>
                  {day.label}
                </Text>
              ))}
          </View>
        </View>

        <Seperator />

        {/* ---------------- Deposit Amount -------------- */}

        <View style={styles.row}>
          <Text style={styles.subheader}>Deposit Amount:</Text>
          <Text>{values.deposit}</Text>
        </View>

        <Seperator />

        {/* ---------------- Operating Hours -------------- */}

        <View>
          <Text style={styles.subheader}>Operating Hours</Text>
          <View style={styles.row}>
            <Text style={styles.field}>Start Time:</Text>
            <Text>{values.operatingHoursStart}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.field}>End Time:</Text>
            <Text>{values.operatingHoursEnd}</Text>
          </View>
        </View>

        <Seperator />

        {/* ---------------- Client Notifcations -------------- */}

        <View>
          <Text style={styles.subheader}>Client Notifications</Text>
          <View style={styles.row}>
            <Text style={styles.field}>SMS Notifcations:</Text>
            <Text>{values.clientSMSNotifications.toString()}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.field}>Email Notifcations:</Text>
            <Text>{values.clientEmailNotifications.toString()}</Text>
          </View>
        </View>

        <Seperator />

        {/* ----------Submit Button  ----------- */}
        <View style={styles.buttonContainer}>
          <CustomButton title={'Complete Set Up'} buttonWidth={300} buttonOnPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
  },
  header: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 5,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 14,
    fontWeight: '600',
    paddingRight: 5,
    marginLeft: '6%',
  },
  dayContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  field: { paddingRight: 5, marginLeft: '6%' },
  row: { flexDirection: 'row', paddingVertical: 5 },
  buttonContainer: { alignItems: 'center', marginBottom: 100 },
});
