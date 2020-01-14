import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info: 'I drink and i know things . Be Tyrion Lannister'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          "You're off to great places, today is your day. Your mountain is waiting, so get on your way."
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'Roam around the resort with our free shuttle services.'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info: "Stop Trying to make everyone happy.You're not beer."
      }
    ]
  };
  render() {
    return (
      <div className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, i) => {
            return (
              <article key={i} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}
