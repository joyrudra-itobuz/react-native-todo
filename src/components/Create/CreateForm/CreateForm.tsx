import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
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

export default function CreateForm() {
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
      navigate('Home');
    }
  }

  return (
    <View
      style={[
        spacingStyles.p20,
        layoutStyles.flexCol,
        spacingStyles.gap24,
        bgStyles.bgBlack,
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
  );
}

const styles = StyleSheet.create({
  bodyText: {
    textAlignVertical: 'top',
    color: 'white',
  },
});
