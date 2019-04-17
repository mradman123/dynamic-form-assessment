import React from 'react';
import styled from 'styled-components';

const room = props => {

  const Container = styled.div`
  background-color: ${ props => props.selected ? "#ffffff" : "#dbdbe3"};
  width: 140px;
  height: 100px;
  margin: 3px;
  float: left;
  border: 4px solid;
  border-radius: 5px;
  border-color: ${ props => props.selected ? "#e7e7e7" : "#d9dce5"};
`;

  const Header = styled.div`
  height: 20px;
  padding: 0px 3px;
  background-color: ${ props => props.selected ? "#e7e7e7" : "#dbdbe3"};
  font-weight: bold;
`;

  const Dropdown = styled.div`
  width: 40px;
  height: 60px;
  margin: 10px;
  float: left;
  font-size: 14px;
`;

  const { number, selected, adults, children } = props;

  const roomName = 'Room ' + number;
  const adultDropdown = [1, 2];
  const childrenDropdown = [0, 1, 2];

  return (
    <Container selected={selected}>
      <Header>
        <input type="checkbox" name={roomName} checked={props.selected} onChange={event => props.handleRoomSelectionToggle(event.target.checked, props.number)} />
        {roomName}
      </Header>
      <Dropdown>
        Adults
        (18+)
        <select name="adults" value={adults} disabled={!selected} onChange={event => props.handleDropdownChange(event.target.name, event.target.value, props.number)} >
          {adultDropdown.map(value => <option key={value} value={value}>{value}</option>)}
        </select>
      </Dropdown>
      <Dropdown>
        Children
        (0-17)
        <select name="children" value={children} disabled={!selected} onChange={event => props.handleDropdownChange(event.target.name, event.target.value, props.number)}>
          {childrenDropdown.map(value => <option key={value} value={value}>{value}</option>)}
        </select>
      </Dropdown>
    </Container>
  );
}

export default room;