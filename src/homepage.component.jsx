import React from 'react';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='directoryMenu'>
        <div className='menu-item'>
          <div className='content'>
            <h2 className='title'>HATS</h2>
            <span className='subtitle'>HATS</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h2 className='title'>SHOES</h2>
            <span className='subtitle'>SHOES</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h2 className='title'>JACKETS</h2>
            <span className='subtitle'>JACKETS</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h2 className='title'>WOMEN</h2>
            <span className='subtitle'>WOMEN</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h2 className='title'>MEN</h2>
            <span className='subtitle'>MEN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;