import React from 'react';
import SignInUpLayout from '../../components/global/Layouts/SignInUpLayout';
import SignInForm from '../../components/SignIn/Form/SignInForm';

export default function SignIn() {
  return (
    <SignInUpLayout>
      <SignInForm />
    </SignInUpLayout>
  );
}
