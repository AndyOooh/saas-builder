import { SignIn } from '@clerk/nextjs';
import React from 'react';

type Props = {};

function Page({}: Props) {
  return (
    <SignIn
    //   routing='path'
    // path='/sign-in'
    />
  );
}

export default Page;
