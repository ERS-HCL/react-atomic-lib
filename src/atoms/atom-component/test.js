import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ExampleComponent from '.';

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
