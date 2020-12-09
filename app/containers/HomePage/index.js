/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Input from './Input';

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
        HELLO WORLD FROM app/containers/homepage/index.js
      </h1>
      <Input></Input>
      <button onClick={() => {console.log('click click bruh')}}>Click to see results</button>
    </div>
  );
}
