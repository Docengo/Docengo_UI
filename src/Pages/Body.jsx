import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Banner1 from '../assets/Banner1.png';
import Banner2 from '../assets/Banner2.png';
import CardContainer from '../components/CardContainer';
import animationn from "../assets/animationn.mp4";
import Pros from './Pros';
import About from "./About";
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import Highlights from '../components/Highlights';
import FloatingFeedback from "../components/FloatingFeedback";
import { Link } from 'react-router-dom';
import Banner3 from '../assets/Banner3.png';
import Banner4 from '../assets/Banner4.png';
import Banner5 from '../assets/Banner5.png';


  const banners = [Banner5, Banner1, Banner2, Banner3, Banner4];

 function Body() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default Body;
