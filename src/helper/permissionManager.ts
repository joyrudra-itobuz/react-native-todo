import {Alert, Permission, PermissionsAndroid, Platform} from 'react-native';

export const handleStoragePermission = async () => {
  try {
    console.log(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

    const check = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );

    console.log(check);

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Note Storage Permission',
        message: 'I need Your Storage Permission.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    console.log(granted);

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Storage');
    } else {
      Alert.alert('Permission Denied!');
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const handleLocationPermission = async () => {
  try {
    if (Platform.OS !== 'android') {
      return;
    }

    console.log(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

    const check = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    console.log(check);

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Note Storage Permission',
        message: 'I need Your Storage Permission.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    console.log(granted);

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the ACCESS_FINE_LOCATION');
    } else {
      Alert.alert('Permission Denied!');
      console.log('ACCESS_FINE_LOCATION permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const handleCameraPermission = async () => {
  try {
    if (Platform.OS !== 'android') {
      return;
    }

    const check = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    console.log(check);

    if (check) {
      return;
    }

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Note Storage Permission',
        message: 'I need Your Storage Permission.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    console.log(granted);

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Camera');
    } else {
      Alert.alert('Permission Denied!');
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const handlePermission = async ({
  permission,
  title = 'Note Permission',
  message = 'I need your Permission',
}: {
  permission: Permission;
  title?: string;
  message?: string;
}) => {
  try {
    if (Platform.OS !== 'android') {
      return;
    }

    const check = await PermissionsAndroid.check(permission);

    if (check) {
      return;
    }

    const granted = await PermissionsAndroid.request(permission, {
      title,
      message,
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    });

    console.log(granted);

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Camera');
    } else {
      Alert.alert('Permission Denied!');
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
