import React from 'react';

const Dot = ({ position, onClick }) => {
  const dotStyle = {
    position: 'absolute',
    top: position.top,
    left: position.left,
    width: '20px',
    height: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Semi-transparent white background
    borderRadius: '50%', // Circle shape
    border: '2px solid rgba(255, 255, 255, 0.4)', // Border similar to the one in the image
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const innerDotStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: '#ffc0cb', // Darker inner dot
    borderRadius: '50%',
  };

  return (
    <div style={dotStyle} onClick={onClick}>
      <div style={innerDotStyle}></div>
    </div>
  );
};

export default Dot;
