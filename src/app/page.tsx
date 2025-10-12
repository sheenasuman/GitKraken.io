import React from 'react';
import Hero from './_section1/Hero';
import Spotsection from './_section1/Spotsection';
import Header from '../components/includes/Header';
import Footer from '../components/includes/Footer';
import Promobanner from '../components/includes/Promobanner';
import Navbar from '../components/includes/Navbar';
const Page = () => {``
  return (
  <div className="bg-[#1C1C1C] text-white">
  <Promobanner />
  <Header />
  <Hero /> 
  <Navbar/>
  <Spotsection/>  
  <Footer/> 

</div>
);
};


export default Page;  