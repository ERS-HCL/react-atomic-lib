import React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleComponent from './';

storiesOf('ExampleComponent', module)
  .add('basic usage', () => (<ExampleComponent />));