import { useState } from 'react'
import './App.css'
import React, { Fragment } from 'react';

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const photos = [
    // src, top, left, width, title, text
    { src: "src/assets/amber.png", top: "53.3970276%", left: "2.7%", width: "8.743927828%", title: "amber", text: "text" },
    { src: "src/assets/bactive.png", top: "48.3%", left: "23.21%", width: "9.090909091%", title: "b-active badminton club", text: "" },
    { src: "src/assets/bc.png", top: "2.441613588%", left: "40.13%", width: "10.99930604%", title: "my bc friends", text: "" },
    { src: "src/assets/edm.png", top: "72.23991507%", left: "42.73%", width: "17.34906315%", title: "my edmonton friends", text: "" },
    { src: "src/assets/erin.png", top: "67.94055202%", left: "18%", width: "12.17904233%", title: "erin", text: "" },
    { src: "src/assets/family.png", top: "74.62845011%", left: "59.02861665%", width: "3.695350451%", title: "my family", text: "" },
    { src: "src/assets/felicia.png", top: "55.25477707%", left: "10.2%", width: "16.48160999%", title: "felicia", text: "" },
    { src: "src/assets/felix.png", top: "24.62845011%", left: "55.25%", width: "8.188063845%", title: "felix", text: "" },
    { src: "src/assets/kai.png", top: "5.25477707%", left: "6.6%", width: "4.649548924%", title: "kai", text: "" },
    { src: "src/assets/lebron.png", top: "52.22505308%", left: "54.53270574%", width: "6.627342124%", title: "the lebron james support gang", text: "" },
    { src: "src/assets/mac.png", top: "20.91295117%", left: "34.3%", width: "8.639833449%", title: "my hs badminton team", text: "" },
    { src: "src/assets/maggie.png", top: "26.22080679%", left: "23.88192333%", width: "9.993060375%", title: "maggie", text: "" },
    { src: "src/assets/melissa.png", top: "75.93630573%", left: "68.9%", width: "9.993060375%", title: "melissa", text: "" },
    { src: "src/assets/petros.png", top: "4.40552017%", left: "23.4%", width: "6.349757113%", title: "my petros friends", text: "" },
    { src: "src/assets/ponderosa.png", top: "41%", left: "65.33%", width: "10.08119362%", title: "the ponderosa princesses", text: "" },
    { src: "src/assets/sara.png", top: "2.972399151%", left: "56.48%", width: "7.807078418%", title: "sara", text: "" },
    { src: "src/assets/sophia.png", top: "1.167728238%", left: "74.81%", width: "24.28868841%", title: "sophia, david, and sean", text: "" },
    { src: "src/assets/sus.png", top: "46.39065817%", left: "86.32%", width: "12.90770298%", title: "ubc sus", text: "" },
    { src: "src/assets/yeojin.png", top: "71.91%", left: "27.7%", width: "9.576682859%", title: "yeojin", text: "" }
  ]

  const getPosition = (photo) => {
    const leftPercent = parseFloat(photo.left);

    if (leftPercent < 50) {
      return {
        left: `calc(${photo.left} + ${photo.width} + 2%)`,
        top: photo.top,
        arrowDirection: 'left'
      };
    } else {
      return {
        right: `calc(100% - ${photo.left} + ${photo.width} + 2%)`,
        top: photo.top,
        arrowDirection: 'right'
      };
    }
  };

  return (
  <div className="container" onClick={() => setSelectedPhoto(null)}>
    
    {photos.map(photo => {
      const popupPosition = getPosition(photo);
      
      return (
        <div key={photo.title}>

          <img 
            className='photos'
            src={photo.src}
            alt={photo.title}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto(selectedPhoto?.title === photo.title ? null : photo);
            }}
            style={{
              position: "absolute",
              top: photo.top,
              left: photo.left,
              width: photo.width,
              zIndex: photo.zIndex
            }} 
          />
          
          {selectedPhoto?.title === photo.title && (
            <div
              className='popup'
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute",
                top: popupPosition.top,
                left: popupPosition.left,
                right: popupPosition.right,
                zIndex: 200
              }}
            >
              <h3>{photo.title}</h3>
              <p>{photo.text}</p>
              <button 
                className="close-btn" 
                onClick={() => setSelectedPhoto(null)}
              >
                ×
              </button>
            </div>
          )}
        </div>
      );
    })}
  </div>
);
}

export default App
