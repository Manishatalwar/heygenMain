import React from 'react';
import { FaHome, FaFileAlt, FaUser, FaVolumeUp, FaVideo, FaBox, FaGlobe, FaPlay, FaNewspaper } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="https://static.heygen.ai/heygen/space/guestSpace.png" alt="Profile" />
        <div className="profile-info">
          <span>Manisha</span>
         
        </div>
        <span className="style-free"> <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="12" 
          height="12" fill="none" viewBox="0 0 48 48"><g><path fill="currentColor" 
          d="M29 15c0 6.075-4.925 11-11 11S7 21.075 7 15 11.925 4 18 4s11 4.925 11 11Zm-4 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="currentColor"></path><path fill="currentColor" d="M31.654 21.22A.38.38 0 0 1 32 21a6 6 0 0 0 0-12 .38.38 0 0 1-.346-.22 14.93 14.93 0 0 0-.724-1.388c-.457-.775-.686-1.163-.654-1.487a1.04 1.04 0 0 1 .404-.71c.263-.192.606-.193 1.293-.195H32c5.523 0 10 4.477 10 10s-4.477 10-10 10h-.027c-.687-.002-1.03-.003-1.293-.196a1.04 1.04 0 0 1-.404-.709c-.032-.324.197-.712.654-1.487.264-.448.506-.912.724-1.388Z" data-follow-fill="currentColor"></path><path fill="currentColor" d="M16 28C8.268 28 2 34.268 2 42a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2c0-7.732-6.268-14-14-14h-4Zm0 4c-4.838 0-8.873 3.435-9.8 8h23.6c-.927-4.565-4.962-8-9.8-8h-4Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="currentColor"></path><path fill="currentColor" d="M39.697 44H44a2 2 0 0 0 2-2c0-7.732-6.268-14-14-14-.229 0-.333.29-.16.441a18.094 18.094 0 0 1 3.191 3.652c.123.186.184.279.245.343a.87.87 0 0 0 .182.15c.074.049.184.095.404.187a10.035 10.035 0 0 1 5.362 5.36c.214.507.32.76.262 1.059a1.106 1.106 0 0 1-.425.639c-.253.169-.575.169-1.218.169h-.166c-.62 0-.93 0-1.145.11a.944.944 0 0 0-.437.443c-.108.217-.104.555-.096 1.23L38 42c0 .783 0 1.175.06 1.34.123.342.257.477.6.6.165.06.456.06 1.037.06Z" 
          data-follow-fill="currentColor"></path></g></svg>1 &nbsp;&nbsp;<span className='stylep'>Free</span></span>
      </div>
      <div className="menu">
        <div className="menu-item active">
          <FaHome size="18" />
          &nbsp;Home
        </div>
        <div className="menu-item">
          <FaFileAlt size="18" />
          &nbsp;Template
        </div>
        <div className="menu-item">
          <FaUser size="18" />
          &nbsp;Avatar
        </div>
        <div className="menu-item">
          <FaVolumeUp size="18" />
          &nbsp;Voice
        </div>
        <div className="menu-item" >
  <FaVideo size="18" />
  &nbsp;Video
</div>
        <div className="menu-item">
          <FaBox size="18" />
          &nbsp;Asset
        </div>
      </div>
      <div className="additional-menu">
        <div className="additional-menu-item" style={{ marginLeft: '20px' }}>
          <FaVideo size="24"  />
          &nbsp;Video Translate
        </div>
        <div className="additional-menu-item" style={{ marginLeft: '20px' }}>
          <div className="live-soon">
            <div className="live-icon"></div>
            <span className="bold">Webinar</span>&nbsp;Live Soon
          </div>
        </div>
        <div className="menu-item">
          <FaGlobe size="18" />
          &nbsp;Pricing
        </div>
        <div className="menu-item">
          <FaPlay size="18" />
          &nbsp;Labs
        </div>
        <div className="menu-item">
          <FaFileAlt size="18" />
          &nbsp;Tutorial
        </div>
        <div className="menu-item">
          <FaNewspaper size="18" />
          &nbsp;News
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
