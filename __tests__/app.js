import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Room from '../components/room';
import HomePage from '../pages/index';

configure({adapter: new Adapter()});

describe('Examining the syntax of Jest tests', () => {
   
  it('sums numbers', () => {
      expect(1 + 2).toEqual(3);
      expect(2 + 2).toEqual(4);
   });
});

describe('<Room />', () => {
  it('should have disabled "Adult" dropdown if not selected', () => {
    
    const room = {
      selected: false
    }
    const wrapper = shallow(<Room {...room}/>);
    const adultDropdown = wrapper.find('[name="adults"]');

    expect(adultDropdown.prop('disabled')).toEqual(true);
  
  })

  it('should have enabled "Children" dropdown if selected', () => {
    
    const room = {
      selected: true
    }
    const wrapper = shallow(<Room {...room}/>);
    const childrenDropdown = wrapper.find('[name="children"]');

    // expect(childrenDropdown).toHaveLength(1);

    // expect(childrenDropdown.props().value).toEqual(1);

    expect(childrenDropdown.prop('disabled')).toEqual(false);
  
  })

  it('should reset dropdown values after being deselected', () => {
    
    const state = {
      rooms: [{
        number: 1,
        selected: true,
        adults: 1,
        children: 1
      },{
        number: 2,
        selected: true,
        adults: 4,
        children: 3
      }]
    };

    const wrapper = shallow(<HomePage />);

    wrapper.setState({...state});

    const adultDropdown = wrapper.find('[name="adults"]').at(1);
    const childrenDropdown = wrapper.find('[name="children"]').at(1);

    //expect(childrenDropdown).toHaveLength(4);

    expect(adultDropdown.props().value).toEqual(4);
    expect(childrenDropdown.props().value).toEqual(3);

    
    wrapper.update();
    wrapper.find('input[type="checkbox"]').at(1).prop('onChange')({target: {checked: false}}, 0);

    console.log(wrapper.find('input[type="checkbox"]').at(1).props().value);

    //expect(spy).toBeCalled();
    expect(adultDropdown.props().value).toEqual(1);
    expect(childrenDropdown.props().value).toEqual(0);
  })

});

//if room is not selected dropdowns should be disabled
