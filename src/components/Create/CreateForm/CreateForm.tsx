import {View} from 'react-native';
import React from 'react';
import InputRounded from '../../global/Inputs/InputRounded';
import {Note} from '../../../types/noteTypes';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormProvider, useForm} from 'react-hook-form';
import {noteValidationSchema} from '../../../validators/noteValidators';

export default function CreateForm() {
  const form = useForm<Note>({
    resolver: yupResolver(noteValidationSchema),
  });

  return (
    <View>
      <FormProvider {...form}>
        <InputRounded name="title" label={'Title'} />
        <InputRounded name="title" label={'Body'} />
      </FormProvider>
    </View>
  );
}
