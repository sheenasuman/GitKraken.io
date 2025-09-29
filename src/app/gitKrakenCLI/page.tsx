import React from 'react';
import Promobanner from "../../components/includes/Promobanner";
import Header from '../../components/includes/Header';
import Footer from '../../components/includes/Footer';
import GitkrakenCLI from '../gitKrakenCLI/_section6/GitKrakenCLI';

const Page = () => {``
  return (
  <div className="bg-black text-white">
  <Promobanner />
  <Header />    
  <GitkrakenCLI />
  
  <Footer />
  </div>
);
};


export default Page;  