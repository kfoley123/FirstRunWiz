import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useGlobalState } from '../store';
import { loginUser } from '../API';

export type LoginFormValues = { email: string; password: string };

const initalFormValues: LoginFormValues = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address')
    //built in Yup email validation allows errors so had to use a different regex
    .max(256, 'Must be less than 256 characters')
    .required('email is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login({ navigation }) {
  const state = useGlobalState();
  const [signInError, setSignInError] = useState(false);

  return (
    <Formik
      initialValues={initalFormValues}
      validationSchema={LoginSchema}
      onSubmit={(values) =>
        loginUser(values).then((data) => {
          if (data) {
            state.setUser(data);
          } else setSignInError(true);
        })
      }
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <StatusBar />

          <Image source={require('./Images/blueBackground.png')} style={styles.Img} />

          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={handleChange('email')}
            value={values.email}
          ></TextInput>

          {errors.email ? <Text style={styles.errors}>{errors.email}</Text> : null}

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={handleChange('password')}
            value={values.password}
          ></TextInput>

          {errors.password ? <Text style={styles.errors}>{errors.password}</Text> : null}

          <TouchableOpacity
            disabled={Object.keys(errors).length > 0}
            style={styles.signInButton}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          {signInError && (
            <Text style={styles.errors}>Authentication failed, please try again</Text>
          )}

          <View style={styles.noAccountTextContainer}>
            <Text> Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('FirstRunWizard')}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Img: { height: '30%', width: '100%', marginBottom: '10%' },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: '3%',
    marginHorizontal: '10%',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  errors: {
    color: 'red',
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 5,
  },
  signInButton: {
    justifyContent: 'center',
    backgroundColor: 'darkblue',
    height: 40,
    borderRadius: 20,
    marginVertical: '3%',
    marginHorizontal: '10%',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  noAccountTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '30%',
  },
  signUpText: { fontWeight: 'bold', color: 'darkblue' },
  signInText: { fontWeight: 'bold', color: 'white', textAlign: 'center' },
});
