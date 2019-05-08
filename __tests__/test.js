import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Room from '../components/room';

configure({adapter: new Adapter()});

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

    expect(childrenDropdown.prop('disabled')).toEqual(false);
  
  })
  
  it('should invoke [handleRoomSelectionToggle] handler on [selected] checkbox change', () => {
    
    const mockFunction = jest.fn();
    const wrapper = shallow(<Room handleRoomSelectionToggle={mockFunction} />);
    
    wrapper.find('input[type="checkbox"]').prop('onChange')({target: {checked: false}}, 0);
    
    expect(mockFunction).toHaveBeenCalled();
  
  })
});