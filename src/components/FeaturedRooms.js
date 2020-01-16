import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Room from './Room';
import Loading from './Loading';
import Title from './Title';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms, loading } = this.context;

    let roomes = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    console.log(roomes);
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : roomes}
        </div>
      </section>
    );
  }
}
