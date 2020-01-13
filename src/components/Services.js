import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut.'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut.'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut.'
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
