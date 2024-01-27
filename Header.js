// /* Header.jsx */

// import React from 'react';
// import './mainHeder.css'; // Import your CSS file if needed

// const Header = () => {
//   return (
//     <div className="your-component">
//       <div className="logo-container">
//         <img alt="heygen logo" src="https://app.heygen.com/icons/heygen/logo_hori_text_light_bg.svg" />
//       </div>
//       <div className="right-section">
//         <div className="credits">
//           <div className="icon">
//             <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
//               fill="none" viewBox="0 0 48 48">
//               <g>
//                 <path fill="#FFAC0B" d="M3 15 13 4l11 11H3Z"></path>
//                 <path fill="#FFD646" d="M24 15 35.5 4H13l11 11Z"></path>
//                 <path fill="#FFEFC7" d="M45 15H24L35.5 4 45 15Z"></path>
//                 <path fill="#FFAC0B" d="M24 44V19H3l21 25Z"></path>
//                 <path fill="#FFEFC7" d="M45 19H24v25l21-25Z"></path>
//               </g>
//             </svg>
//           </div>
//           <div className="icon">
//             <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16"
//               height="16" fill="none" viewBox="0 0 48 48">
//               <g>
//                 <path fill="#FFA236"
//                   d="M19.5 7.97c-2-.5-4.5-1.47-6.5-3.47-2.55-2.55-4-1.5-3.5 1 .337 1.686-.506 2.405-1.303 3.084C7.585 9.106 7 9.604 7 10.5c0 1.5 7.833 2.303 12 1.47l.5-4Zm9.5 0c2-.5 4.5-1.47 6.5-3.47 2.55-2.55 4-1.5 3.5 1-.337 1.686.506 2.405 1.303 3.084.612.522 1.197 1.02 1.197 1.916 0 1.5-7.833 2.303-12 1.47l-.5-4Z">
//                 </path>
//                 <path fill="#FFCB45"
//                   d="M15.298 5c-4.8 1.2-5.5 7-2.5 9l.893.225c4.274 1.079 9.355 2.362 10.208.493.854 1.869 5.934.586 10.208-.493L35 14c3-2 2.3-7.8-2.5-9-4.8-1.2-7.5 5.25-8.5 8-.039.107-.072.21-.1.309a4.707 4.707 0 0 0-.102-.309c-1-2.75-3.7-9.2-8.5-8Z">
//                 </path>
//                 <path fill="#FFA336" d="M27 12c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2Z"></path>
//                 <path fill="#FE7272"
//                   d="M4.586 13.586C4 14.172 4 15.114 4 17v2c0 1.886 0 2.828.586 3.414C5.172 23 6.114 23 8 23v13c0 3.771 0 5.657 1.172 6.828C10.343 44 12.229 44 16 44h16c3.771 0 5.657 0 6.828-1.172C40 41.657 40 39.771 40 36V23c1.886 0 2.828 0 3.414-.586C42.828 21.828 42 20.886 42 19v-2c0-1.886 0-2.828-.586-3.414C41.172 13 40.229 13 38 13H8c-1.886 0-2.828 0-3.414.586Z"
//                   clip-rule="evenodd" fill-rule="evenodd"></path>
//                 <path fill="#FFE4A0" d="M19 13a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V23h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H19Z">
//                 </path>
//                 <path fill="#000" d="M8 23h32v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3Z" opacity=".1"></path>
//               </g>
//             </svg>
//           </div>
//           <button className="create-video-btn">
//             <span className="btn-content">
//               <iconpark-icon className="css-iddlx0 iconpark-icon" name="new-video" theme="filled" size="18"
//                 icon-id=""></iconpark-icon>
//               Create Video
//             </span>
//           </button>
//           <button className="notification-btn">
//             <span className="btn-content">
//               <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="18"
//                 height="18" fill="none" viewBox="0 0 48 48">
//                 <g>
//                   <path fill="currentColor"
//                     d="M23.6 2c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C22 2.76 22 3.04 22 3.6v2.431c-8.119.507-14.58 7.036-14.98 15.184C7 21.607 7 22.072 7 23v10.6c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C10.04 40 11.16 40 13.4 40h3.61a7 7 0 0 0 13.98 0h3.61c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C41 36.96 41 35.84 41 33.6V23c0-.928 0-1.393-.02-1.785C40.58 13.067 34.12 6.538 26 6.03V3.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C25.24 2 24.96 2 24.4 2h-.8Zm3.375 38h-5.95a3 3 0 0 0 5.95 0ZM37 33.6V23c0-.976-.001-1.32-.014-1.589a12 12 0 0 0-11.397-11.397C25.319 10.002 24.976 10 24 10s-1.32.001-1.589.014a12 12 0 0 0-11.397 11.397c-.013.27-.014.613-.014 1.589v10.6c0 1.186.003 1.835.041 2.301l.005.053.053.005c.466.038 1.115.041 2.301.041h21.2c1.186 0 1.835-.003 2.301-.041l.053-.005.005-.053c.038-.466.041-1.115.041-2.301Z"
//                     clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="currentColor"></path>
//                 </g>
//               </svg>
//             </span>
//           </button>
//           <div className="user-avatar">
//             <div className="avatar-icon">
//               <svg width="100%" height="100%" viewBox="0 0 64 64" preserveAspectRatio="xMinYMid meet">
//                 <foreignObject width="100%" height="100%" xmlns="http://www.w3.org/1999/xhtml">
//                   <div className="css-xpif37" style={{ width: '64px', height: '64px' }}>
//                     <span>M</span>
//                   </div>
//                 </foreignObject>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;



// /* Header.jsx */

import React from 'react';
import './mainHeder.css'; // Import your CSS file if needed

const Header = () => {
  return (
    <div className="your-component">
      <div className="logo-container">
        <img alt="heygen logo" src="https://app.heygen.com/icons/heygen/logo_hori_text_light_bg.svg" />
      </div>
      <div className="right-section">
        <button className="combined-btn">
          <span className="btn-content">
            <div className="icon">
            <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 48 48">
              <g>
                <path fill="#FFAC0B" d="M3 15 13 4l11 11H3Z"></path>
                <path fill="#FFD646" d="M24 15 35.5 4H13l11 11Z"></path>
                <path fill="#FFEFC7" d="M45 15H24L35.5 4 45 15Z"></path>
                <path fill="#FFAC0B" d="M24 44V19H3l21 25Z"></path>
                <path fill="#FFEFC7" d="M45 19H24v25l21-25Z"></path>
              </g>
            </svg>
            </div>
            <div className="icon">
              <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 48 48">
                <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
              <g>
                <path fill="#FFA236"
                  d="M19.5 7.97c-2-.5-4.5-1.47-6.5-3.47-2.55-2.55-4-1.5-3.5 1 .337 1.686-.506 2.405-1.303 3.084C7.585 9.106 7 9.604 7 10.5c0 1.5 7.833 2.303 12 1.47l.5-4Zm9.5 0c2-.5 4.5-1.47 6.5-3.47 2.55-2.55 4-1.5 3.5 1-.337 1.686.506 2.405 1.303 3.084.612.522 1.197 1.02 1.197 1.916 0 1.5-7.833 2.303-12 1.47l-.5-4Z">
                </path>
                <path fill="#FFCB45"
                  d="M15.298 5c-4.8 1.2-5.5 7-2.5 9l.893.225c4.274 1.079 9.355 2.362 10.208.493.854 1.869 5.934.586 10.208-.493L35 14c3-2 2.3-7.8-2.5-9-4.8-1.2-7.5 5.25-8.5 8-.039.107-.072.21-.1.309a4.707 4.707 0 0 0-.102-.309c-1-2.75-3.7-9.2-8.5-8Z">
                </path>
                <path fill="#FFA336" d="M27 12c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2Z"></path>
                <path fill="#FE7272"
                  d="M4.586 13.586C4 14.172 4 15.114 4 17v2c0 1.886 0 2.828.586 3.414C5.172 23 6.114 23 8 23v13c0 3.771 0 5.657 1.172 6.828C10.343 44 12.229 44 16 44h16c3.771 0 5.657 0 6.828-1.172C40 41.657 40 39.771 40 36V23c1.886 0 2.828 0 3.414-.586C42.828 21.828 42 20.886 42 19v-2c0-1.886 0-2.828-.586-3.414C41.172 13 40.229 13 38 13H8c-1.886 0-2.828 0-3.414.586Z"
                  clip-rule="evenodd" fill-rule="evenodd"></path>
                <path fill="#FFE4A0" d="M19 13a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V23h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H19Z">
                </path>
                <path fill="#000" d="M8 23h32v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3Z" opacity=".1"></path>
              </g>
            </svg>
              </svg>
            </div>
            1Credit
          </span>
        </button>
        <div className="credits">
        <div >
      {/* ... (existing code) */}
      <button className="custom-btn">
        <span className="btnContent">
          CreateVideo
        </span>
      </button>
      
    </div>
    <div className='Notification'>
    <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 48 48"><g><path fill="currentColor" d="M23.6 2c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C22 2.76 22 3.04 22 3.6v2.431c-8.119.507-14.58 7.036-14.98 15.184C7 21.607 7 22.072 7 23v10.6c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C10.04 40 11.16 40 13.4 40h3.61a7 7 0 0 0 13.98 0h3.61c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C41 36.96 41 35.84 41 33.6V23c0-.928 0-1.393-.02-1.785C40.58 13.067 34.12 6.538 26 6.03V3.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C25.24 2 24.96 2 24.4 2h-.8Zm3.375 38h-5.95a3 3 0 0 0 5.95 0ZM37 33.6V23c0-.976-.001-1.32-.014-1.589a12 12 0 0 0-11.397-11.397C25.319 10.002 24.976 10 24 10s-1.32.001-1.589.014a12 12 0 0 0-11.397 11.397c-.013.27-.014.613-.014 1.589v10.6c0 1.186.003 1.835.041 2.301l.005.053.053.005c.466.038 1.115.041 2.301.041h21.2c1.186 0 1.835-.003 2.301-.041l.053-.005.005-.053c.038-.466.041-1.115.041-2.301Z" 
    clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="currentColor"></path></g></svg>
        </div>
        
        <div>
        <div>
        <div className="rounded-circle">
      M
    </div>
</div>

</div></div>
      </div>
    </div>
  );
}

export default Header;
