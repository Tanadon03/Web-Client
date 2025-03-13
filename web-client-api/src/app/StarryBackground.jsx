// ""
// import React, { useEffect, useState } from 'react';

// const StarryBackground = () => {
//   const starCount = 300;
//   const meteorCount = 50;

//   const generateStars = () => {
//     const stars = [];
//     for (let i = 0; i < starCount; i++) {
//       const x = Math.random() * 100; // Percentage-based horizontal position
//       const y = Math.random() * 100; // Percentage-based vertical position
//       stars.push(
//         <div
//           key={`star-${i}`}
//           style={{
//             position: 'absolute',
//             width: '1px',
//             height: '1px',
//             left: `${x}vw`, // Use vw for horizontal positioning
//             top: `${y}vh`, // Use vh for vertical positioning
//             boxShadow: `0 0 2px #fff`, // Smaller stars for better scaling
//           }}
//         />
//       );
//     }
//     return stars;
//   };

//   const generateMeteors = () => {
//     const meteors = [];
//     for (let i = 1; i <= meteorCount; i++) {
//       const left = Math.random() * 90 + 9; // Percentage-based horizontal position
//       const top = Math.random() * 250 + 50; // Top position in pixels, can be adjusted
//       const duration = Math.floor(Math.random() * 70) / 10 + 3;

//       const meteorStyle = {
//         position: 'absolute',
//         top: `${top}px`, // Keep top in pixels, or convert to vh if needed
//         left: `${left}%`,
//         width: '300px',
//         height: '1px',
//         transform: 'rotate(-45deg)',
//         backgroundImage: 'linear-gradient(to right, #fff, rgba(255, 255, 255, 0))',
//         animation: `meteor ${duration}s linear infinite`,
//       };

//       const meteorBeforeStyle = {
//         content: '""',
//         position: 'absolute',
//         width: '4px',
//         height: '5px',
//         borderRadius: '50%',
//         marginTop: '-2px',
//         background: 'rgba(255, 255, 255, 0.7)',
//         boxShadow: '0 0 15px 3px #fff',
//       };

//       meteors.push(
//         <div key={`meteor-${i}`} style={meteorStyle}>
//           <div style={meteorBeforeStyle} />
//         </div>
//       );
//     }
//     return meteors;
//   };

//   const meteorAnimation = `@keyframes meteor {
//     0% { opacity: 1; margin-top: -300px; margin-right: -300px; }
//     12% { opacity: 0; }
//     15% { margin-top: 300px; margin-left: -600px; opacity: 0; }
//     100% { opacity: 0; }
//   }`;

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         overflow: 'hidden',
//         backgroundImage: 'radial-gradient(ellipse at top, #080e21 0%, #1b2735 95%)',
//         zIndex: -1,
//       }}
//     >
//       <style>{meteorAnimation}</style>
//       {generateStars()}
//       {generateMeteors()}
//     </div>
//   );
// };

// export default StarryBackground;