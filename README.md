# _First Run Wizard Demo React Native_

A mobile app to demo user interface, settings, profile, first run wizard and local storage.

---

## Authors

Kortney Foley

---

## Technologies Used

- React Native
- HTML
- JavaScript
- CSS
- TypeScript
- [Expo](https://expo.dev/)
- [Hookstate](https://www.npmjs.com/package/@hookstate/core)
- [React Native Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)
- [React Navigation Bottom Tabs](https://www.npmjs.com/package/@react-navigation/bottom-tabs)
- [Expo Checkbox](https://www.npmjs.com/package/expo-checkbox)
- [Formik](https://www.npmjs.com/package/formik)
- [Yup](https://www.npmjs.com/package/yup)
- [React Native Select Dropdown](https://www.npmjs.com/package/react-native-select-dropdown)
- [React Native Switch Selector](https://www.npmjs.com/package/react-native-switch-selector)
- [React Native Wizard](https://www.npmjs.com/package/react-native-wizard)

---

## Description

I designed this App to showcase some UI features I built in react native. It allows a user to create a new profile through a First Run Wizard on their first use of the app, then keeps the data in local storage. Existing users can log back in and update their Profile or Settings information. There are some User Experience features built in such as not allowing the user to proceed if there are any errors on the current page of the wizard, clear error messages, considerate checkbox spacing and hitslop, and warnings that come up to ensure the user wants to cancel setup to avoid accidental button mashing. 

## App Demonstration

First Login 

On first login, users will be directed to the first run wizard to set up their profile and settings. They can't proceed to the next step in the wizard until there are no errors on the current screen.

![First Login](https://github.com/kfoley123/FirstRunWiz/assets/86269768/9ef894ca-a128-454c-897c-c7e3a6fea8db)



Returning Login 

Once you have set up an account, it will be remembered in storage to let you log back in to access your data.
![Returning Login](https://github.com/kfoley123/FirstRunWiz/assets/86269768/4a3d59e2-e88a-49c5-85ba-7bd1b98377ed)



Changing Profile/ Settings Info 
This clip shows that you can change your profile or settings info and it will be saved in the state and updates will stay up to date after logging out and back in.

![UpdateSettings:Profile](https://github.com/kfoley123/FirstRunWiz/assets/86269768/31ac2ee0-fafa-426c-b7ff-d7ff0d5f9387)




---

## Getting Started

- npm install
- npx expo start
- make sure you have expo app installed on your phone to view or you can download an emulator to view it on [web](https://docs.expo.dev/workflow/ios-simulator/)

---

## License

Copyright (c) _2023_ _Kortney Foley_
