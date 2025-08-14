import React from 'react';
import Hero from './_section1/Hero';
import Spotsection from './_section1/Spotsection';
import Header from '../components/includes/Header';
import Footer from '../components/includes/Footer';
import Promo from '../app/_section1/Promo';
const Page = () => {``
  return (
  <div className="bg-black text-white">
  <Promo />
  <Header />
  <Hero />
  <Spotsection/>
  <Footer /> 

</div>
);
};


export default Page;  