import React, {Component} from 'react';
import styled from 'styled-components';
import Room from '../components/room.jsx';

class HomePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      rooms: [{
        number: 1,
        selected: true,
        adults: 1,
        children: 0
      },{
        number: 2,
        selected: false,
        adults: 1,
        children: 0
      },{
        number: 3,
        selected: false,
        adults: 1,
        children: 0
      },{
        number: 4,
        selected: false,
        adults: 1,
        children: 0
      }]
    };
    this.componentDidMount = this.componentDidMount.bind(this);

    this.handleRoomSelectionToggle = this.handleRoomSelectionToggle.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let savedState = localStorage.getItem("state");

    if(savedState){
      this.setState({...JSON.parse(savedState)})
    }
  }

  handleRoomSelectionToggle(checked, roomNumber) {
    let newRooms = [...this.state.rooms];
    const roomsLength = newRooms.length;
    const roomIndex = roomNumber - 1;

    for(var i = 0; i <= roomsLength - 1; i++) {
      if(checked) {
        if(i <= roomIndex) {
          let newRoom = {...this.state.rooms[i]};
          newRoom.selected = checked;
          newRooms[i] = newRoom;
        }
      }
      else {
        if(i >= roomIndex) {
          let newRoom = {...this.state.rooms[i]};
          newRoom.selected = checked;
          newRoom.adults = 1;
          newRoom.children = 0;
          newRooms[i] = newRoom;
        }
      }
    }
   
    this.setState({...this.state, rooms: newRooms});
  }

  handleDropdownChange(name, value, roomNumber) {

    let newRooms = [...this.state.rooms];
    const roomIndex = roomNumber - 1;

    let newRoom = {...this.state.rooms[roomIndex]};
    newRoom[name] = parseInt(value);
    newRooms[roomIndex] = newRoom;

    this.setState({...this.state, rooms: newRooms});
  }

  handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("state", JSON.stringify({...this.state}));
  }


  render() {
    const Container = styled.div`
    display: inline-block;
  `;

  const Submit = styled.input`
    display: block;
  `;

    return (
      <form onSubmit={this.handleSubmit}>
        <Container>
        {this.state.rooms.map(room => (
          <Room key={room.number} {...room} handleRoomSelectionToggle={this.handleRoomSelectionToggle} handleDropdownChange={this.handleDropdownChange}/>
        ))}
        </Container>
        <Submit type="submit"/>
      </form>
    )
  }

}

export default HomePage;