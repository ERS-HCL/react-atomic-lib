import React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleComponent from './atoms/atom-component';

storiesOf('ExampleComponent', module)
  .add('basic usage', () => (<ExampleComponent />));
