import { useState } from 'react'
import './App.css'
import React, { Fragment } from 'react';

function App() {
  const amberText = "Amber was my first friend in Vancouver, and it actually feels like fate that we ever met." +
    "She really gets me and it’s like we’re in our own world whenever we’re together." +
    " I really feel like she gets me, and that I can tell her anything." +
    "I love her so much even though she always tries to tickle me when we’re together."
  const bactiveText = "I honestly don’t even know where to begin." +
    " Badminton completely changed my life." +
    " I bonded with so many people, and made so many friendships that I cherish to this day. " +
    "I love my B-Active community so much, and am so proud to have been a part of it. " +
    "This sport has given me so many different experiences, and I’m so proud of who I’ve become because of it. " +
    "I’m not even close to the best athlete, but I know that I’ve been gifted with the best community."
  const bcText = "Every day I am so blessed that I get to be around these incredible people. " +
    "There’s so many things to say but I don’t think I can fit them here. " +
    "The people around me are genuinely so amazing and hilarious. " +
    "I love each and every one of you so much and I’m so grateful that you all push me to be a better person every day. " +
    "Thank you for always supporting me and always making me so happy. " +
    "So thankful that I can always see at least one familiar face at Ladha, and that I’ll always have a group who will support me (and repost my campaign posts lol)."
  const edmText = "It’s hard maintaining friendships over 1160 kilometres (or more for those who also left home), but I’m so thankful for the people that I knew in Edmonton. " +
    "I’m grateful for the texts, the FaceTimes, the mutual visits, and the time we spent together. " +
    "They have laid the foundations for the person I have become, and I love them so much, even if we aren’t as close (physically and emotionally) as we were before!" +
    " Thank you especially for the classes, spares, laughs, performances, and paintings."
  const erinText = "Literally my best friend and my day 1… 15 years going on strong! " +
    "We are actually the ultimate enemies to lovers story, cus she used to bully me in first grade. " +
    "I love this girl so so so much, she’s seen my literal worst days and has been around for some of my best. " +
    "We’ve actually gone to Hell (constant League of Legends grinding) and back together, and I know that she’s always there for me." +
    "She is so funny and genuine and always puts me back in my place, and I think about her all the time."
  const familyText = ""
  const felText = "I think Felicia was the first friend I made through SUS. " +
    "She’s so funny, and I feel like I can really be myself around her. " +
    "She works so incredibly hard and is so smart, and I love her even though she is chained by the leg to her RA position and can never hang out with me. " +
    "I love and appreciate her more than I can express, and am so thankful for not only for the people she’s introduced me to, but even more for the moments we’ve been through together. " +
    "Thank you for the Belly laughs and for babysitting me at my most vulnerable…."
  const felixText = "Felix was one of my first friends in club badminton and quickly became one of my best friends overall. " +
    "He’s genuinely one of the funniest people I know, and I’m so lucky to have him in my life. " +
    "I think he’s trained with me the most since we’ve both started, and am grateful for how he’s affected me as a player, but also as a person. " +
    "I miss the singles matches at drop-ins and the ladder crashouts, and am thankful for the late night/early morning Roblox games."
  const kaiText = "Kai and I met in the first week of my first year, and we immediately became close friends. " +
    "He is one of the smartest, hard-working, realistic people I’ve ever met. " +
    "He’s kept me fed during late-night IKB grinds, and has literally taught me half my courses. " +
    "He always believes in me, no matter how many mental breakdowns I have or examlets I fail."
  const lebronText = "I don’t even know where to start with these guys. " +
    "They have been with me through thick and thin, and have kept me laughing the entire time. " +
    "They’ve gotten me through tournaments, breakups, and the transition period between high school in Edmonton and university in Vancouver. " +
    "There’s really so much to say. " +
    "I could have individual sections just for each of them. " +
    "I’m so grateful for all the tournaments and the training, the texts, the FaceTimes, and especially for the terrible (but sometimes seriously good) life and love advice that gets passed around. " +
    "I guess 2 hours straight of physical every Sunday really bonds people together."
  const macText = ""

  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const photos = [
    // src, top, left, width, title, text
    { src: "src/assets/amber.png", top: "53.3970276%", left: "2.7%", width: "8.743927828%", title: "amber", text: amberText },
    { src: "src/assets/bactive.png", top: "48.3%", left: "23.21%", width: "9.090909091%", title: "b-active badminton club", text: bactiveText },
    { src: "src/assets/bc.png", top: "2.441613588%", left: "40.13%", width: "10.99930604%", title: "my bc friends", text: bcText },
    { src: "src/assets/edm.png", top: "72.23991507%", left: "42.73%", width: "17.34906315%", title: "my edmonton friends", text: edmText },
    { src: "src/assets/erin.png", top: "67.94055202%", left: "18%", width: "12.17904233%", title: "erin", text: erinText },
    { src: "src/assets/family.png", top: "74.62845011%", left: "59.02861665%", width: "3.695350451%", title: "my family", text: familyText },
    { src: "src/assets/felicia.png", top: "55.25477707%", left: "10.2%", width: "16.48160999%", title: "felicia", text: felText },
    { src: "src/assets/felix.png", top: "24.62845011%", left: "55.25%", width: "8.188063845%", title: "felix", text: felixText },
    { src: "src/assets/kai.png", top: "5.25477707%", left: "6.6%", width: "4.649548924%", title: "kai", text: kaiText },
    { src: "src/assets/lebron.png", top: "52.22505308%", left: "54.53270574%", width: "6.627342124%", title: "the lebron james support gang", text: lebronText },
    { src: "src/assets/mac.png", top: "20.91295117%", left: "34.3%", width: "8.639833449%", title: "my hs badminton team", text: macText },
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
        left: `calc(${photo.left} + ${photo.width} + 1%)`,
        top: photo.top,
        arrowDirection: 'left'
      };
    } else {
      return {
        right: `calc(100% - ${photo.left})`, // + 1% ?
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
                <p className="text">{photo.text.toLowerCase()}</p>
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
