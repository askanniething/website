import { React, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

const Misc = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <p>
        funky
      </p>
    </>

  );
};

export default Misc;
