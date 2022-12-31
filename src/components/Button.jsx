import React from 'react'

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[17px] text-primary bg-blue-gradient rounded-[15px] outline-none ${styles}`}>
    Get Started
  </button>
);


export default Button;
