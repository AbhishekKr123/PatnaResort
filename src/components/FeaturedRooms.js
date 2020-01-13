import React, { Component } from 'react';

import { RoomContext } from '../Context';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { greeting, name } = this.context;
    console.log(greeting);
    return (
      <div>
        Hello {name} From Featured Room {greeting}
      </div>
    );
  }
}
