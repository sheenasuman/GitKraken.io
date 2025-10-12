import React from 'react';
import Promobanner from '../../components/includes/Promobanner';
import Header from '../../components/includes/Header';
import Footer from '../../components/includes/Footer';
import GitKrakendev from './_section4/GitKrakendev';

const Page = () => {
  return (
    <div className="bg-black text-white">
      <Promobanner />
      <Header />
      <GitKrakendev />
      <Footer />
    </div>
  );
};

export default Page;
