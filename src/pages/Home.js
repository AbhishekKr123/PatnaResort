import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="Luxurious Rooms" subtitle="deluxe room starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo qui
        omnis eligendi perferendis repellat ullam est consectetur. Commodi quis
        aperiam cumque praesentium deserunt. Dolorem dolores assumenda ut
        similique tempora quibusdam quos. Ab non, magnam vitae numquam
        doloremque harum, neque veritatis ex ea esse tempore! Voluptas quas quis
        ab odit neque?
      </p>
    </>
  );
};

export default Home;
