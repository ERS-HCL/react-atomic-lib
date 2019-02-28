import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ExampleComponent from './atoms/atom-component';

describe('ExampleComponent', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it('is truthy', () => {
    const wrapper = shallow(<ExampleComponent />);
    expect(wrapper).toBeTruthy();
  });
});
