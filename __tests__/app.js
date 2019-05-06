import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Room from '../components/room';

configure({adapter: new Adapter()});

describe('Examining the syntax of Jest tests', () => {
   
  it('sums numbers', () => {
      expect(1 + 2).toEqual(3);
      expect(2 + 2).toEqual(4);
   });
});

describe('<Room />', () => {
  it('should have disabled dropdowns if not selected', () => {

    const room = {
      number: 1,
      selected: true,
      adults: 1,
      children: 0
    }
    
    const wrapper = shallow(<Room {...room}/>);

    const adultDropdown = wrapper.find('[name="adults"]');

    expect(adultDropdown).toHaveLength(1);

    expect(adultDropdown.props().value).toEqual(1);

    expect(adultDropdown.prop('disabled')).toEqual(true);
  
  })
})


//if room is not selected dropdowns should be disabled
