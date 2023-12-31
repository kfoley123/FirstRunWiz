import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Seperator from '../Components/Seperator';
import ProfileField from '../Components/ProfileField';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../Components/CustomButton';
import { FirstRunValues, ProfileFormValues } from '../customTypes';
import { formatPhoneNumber } from '../Helpers/helpers';
import { useGlobalState } from '../store';
import { storeData } from '../API';

export default function Profile() {
  const state = useGlobalState();
  const user = state.get();

  const [modalVisible, setModalVisible] = useState(false);

  const initalFormValues: ProfileFormValues = {
    name: user.name,
    email: user.email,
    phone: user.phone,
  };

  const ProfileSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Must be at least 4 characters')
      .max(50, 'Must be less than 50 characters')
      .required('name is required'),
    email: Yup.string()
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address')
      //built in Yup email validation allows errors so had to use a different regex
      .max(256, 'Must be less than 256 characters')
      .required('email is required'),
    phone: Yup.string().min(14, 'Invalid phone number').required('Phone number is required'),
  });

  return (
    <Formik
      initialValues={initalFormValues}
      validationSchema={ProfileSchema}
      onSubmit={(values) =>
        storeData(values.email, { ...user, ...values } as FirstRunValues).then(() =>
          state.setUserProfile(values),
        )
      }
    >
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, resetForm, values, errors }) => (
        <View style={styles.container}>
          <StatusBar />
          <ImageBackground style={styles.hero} source={require('./Images/blackBackground.jpeg')}>
            <Image source={require('./Images/profile-placeholder.png')} style={styles.profileImg} />

            <View style={styles.textLink}>
              <CustomButton
                title="edit profile"
                buttonWidth={100}
                buttonOnPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </ImageBackground>

          <ProfileField label={'Name '} value={initalFormValues.name} icon="name" />

          <Seperator />

          <ProfileField label={'Email'} value={initalFormValues.email} icon="email" />
          <Seperator />

          <ProfileField label={'Phone'} value={initalFormValues.phone} icon="phone" />

          <Seperator />
          <View style={styles.buttonContainer}>
            <CustomButton
              title="LogOut"
              buttonWidth={275}
              buttonOnPress={() => {
                state.logOut();
              }}
            />
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.title}> Edit Profile</Text>
                <View>
                  <ImageBackground
                    resizeMode={'cover'}
                    style={styles.hero}
                    source={require('./Images/blackBackground.jpeg')}
                  >
                    <Image
                      source={require('./Images/profile-placeholder.png')}
                      style={styles.profileImg}
                    />
                    <TouchableOpacity
                      onPress={() => console.log('change profile picture')}
                      style={styles.addImageButton}
                    >
                      <MaterialCommunityIcons name="camera-plus-outline" style={styles.icon} />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>

                <Text style={styles.label}> Name</Text>
                <TextInput
                  style={styles.input}
                  onBlur={handleBlur('name')}
                  onChangeText={handleChange('name')}
                  autoCapitalize={'words'}
                  value={values.name}
                />
                {errors.name ? <Text style={styles.errors}>{errors.name}</Text> : null}

                <Text style={styles.label}> Email</Text>

                <TextInput
                  style={styles.input}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  keyboardType={'email-address'}
                  value={values.email}
                />

                {errors.email ? <Text style={styles.errors}>{errors.email}</Text> : null}

                <Text style={styles.label}> Phone</Text>

                <TextInput
                  style={styles.input}
                  keyboardType={'phone-pad'}
                  onChangeText={(text) => {
                    setFieldValue('phone', formatPhoneNumber(text));
                  }}
                  value={values.phone}
                />

                {errors.phone ? <Text style={styles.errors}>{errors.phone}</Text> : null}

                <View style={styles.buttons}>
                  <CustomButton
                    title="Cancel"
                    buttonWidth={75}
                    buttonOnPress={() => {
                      setModalVisible(!modalVisible);
                      resetForm();
                    }}
                  />

                  <CustomButton
                    title="Done"
                    isDisabled={Object.keys(errors).length > 0}
                    buttonWidth={75}
                    buttonOnPress={() => {
                      setModalVisible(!modalVisible);
                      handleSubmit();
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 35,
    textAlign: 'center',
  },
  profileImg: {
    marginVertical: '7%',
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textLink: {
    bottom: 55,
    left: 265,
  },
  modalView: {
    backgroundColor: 'gainsboro',
    paddingTop: 60,
    height: '100%',
    width: '100%',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: { height: 200, width: '100%', marginBottom: 5 },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginVertical: 5,
    marginHorizontal: 40,
  },
  label: {
    color: 'slategrey',
    fontSize: 11,
    paddingLeft: '5%',
    marginVertical: 1,
  },
  errors: { color: 'red', textAlign: 'center', fontWeight: '500' },
  addImageButton: {
    padding: 2,
    position: 'absolute',
    bottom: 45,
    right: 110,
    backgroundColor: 'hsla(360, 100%, 100%, .5)',
    borderRadius: 5,
  },
  icon: { fontSize: 24, color: 'black' },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: '2%',
  },
  buttonContainer: { alignItems: 'center' },
});
