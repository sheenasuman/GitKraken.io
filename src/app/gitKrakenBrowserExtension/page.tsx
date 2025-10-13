import React from 'react';
import Promobanner from "../../components/includes/Promobanner";
import Header from '../../components/includes/Header';
import Footer from '../../components/includes/Footer';
import GitkrakenBroExt from '../gitKrakenBrowserExtension/_section7/GitkrakenBroExt';

const Page = () => {``
  return (
  <div className="bg-black text-white">
  <Promobanner />
  <Header />    
  <GitkrakenBroExt />
  <Footer />
  </div>
);
};

export default Page;  