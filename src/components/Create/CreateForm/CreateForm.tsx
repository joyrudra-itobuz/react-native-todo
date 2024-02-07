import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputRounded from '../../global/Inputs/InputRounded';
import {Note, NoteFormValues} from '../../../types/noteTypes';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormProvider, useForm} from 'react-hook-form';
import {noteValidationSchema} from '../../../validators/noteValidators';
import layoutStyles from '../../../styles/layoutStyles';
import spacingStyles from '../../../styles/spacingStyles';
import bgStyles from '../../../styles/bgStyles';
import RoundedButton from '../../global/ButtonsLinks/RoundedButton';
import {staticUserData} from '../../../data/static';
import {apiCall} from '../../../helper/apiCall';
import {useNavigation} from '@react-navigation/native';
import CameraLogo from '../../../../assets/images/icons/CameraLogo';
import Geolocation from '@react-native-community/geolocation';
import MicLogo from '../../../../assets/images/icons/MicLogo';
import {
  handleCameraPermission,
  handleLocationPermission,
  handlePermission,
} from '../../../helper/permissionManager';

export default function CreateForm() {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const form = useForm<NoteFormValues>({
    resolver: yupResolver(noteValidationSchema),
  });
  const {navigate} = useNavigation();

  async function onSubmit(formValues: NoteFormValues) {
    const data = {...formValues, authorId: staticUserData._id};

    const response = await apiCall<Note, NoteFormValues>(
      '/notes/add-edit-note',
      'POST',
      data,
    );

    console.log(response);

    if (response.success) {
      navigate('Home' as never);
    }
  }

  useEffect(() => {
    console.log(location);
  }, [location]);

  async function getCurrentLocation() {
    try {
      const check = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (!check) {
        handleLocationPermission();
      }

      Geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          console.log('Current Position:', position);
        },
        error => {
          console.error('Error getting current position:', error);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );

      // console.log(location);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={layoutStyles.flex1}>
      <View style={[layoutStyles.flexRow, layoutStyles.justifyBetween]}>
        <TouchableOpacity onPress={handleCameraPermission}>
          <CameraLogo />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handlePermission({
              permission: PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            })
          }>
          <MicLogo />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={getCurrentLocation}>
        <RoundedButton>Get Current Location</RoundedButton>
      </TouchableOpacity>

      <ScrollView style={bgStyles.bgBlack}>
        <View
          style={[
            spacingStyles.p20,
            layoutStyles.flexCol,
            spacingStyles.gap24,
          ]}>
          <FormProvider {...form}>
            <InputRounded name="title" label={'Title'} />
            <InputRounded
              name="body"
              style={[styles.bodyText]}
              multiline
              numberOfLines={10}
              placeholder="Body"
              placeholderTextColor={'gray'}
            />

            <TouchableOpacity onPress={form.handleSubmit(onSubmit)}>
              <RoundedButton>Submit</RoundedButton>
            </TouchableOpacity>
          </FormProvider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bodyText: {
    textAlignVertical: 'top',
    color: 'white',
  },
});
