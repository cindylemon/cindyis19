import { useState } from 'react'
import './App.css'

import amberPng from "./assets/amber.png";
import bactivePng from "./assets/bactive.png"
import bcPng from "./assets/bc.png"
import edmPng from "./assets/edm.png"
import erinPng from "./assets/erin.png"
import familyPng from "./assets/family.png"
import feliciaPng from "./assets/felicia.png"
import felixPng from "./assets/felix.png"
import kaiPng from "./assets/kai.png"
import lebronPng from "./assets/lebron.png"
import macPng from "./assets/mac.png"
import maggiePng from "./assets/maggie.png"
import melissaPng from "./assets/melissa.png"
import petrosPng from "./assets/petros.png"
import ponderosaPng from "./assets/ponderosa.png"
import saraPng from "./assets/sara.png"
import sophiaPng from "./assets/sophia.png"
import susPng from "./assets/sus.png"
import yeojinPng from "./assets/yeojin.png"

// extrapolate the text, make it a box that you can scroll for text in

function App() {
  const amberText = "Amber was my first friend in Vancouver, and it actually feels like fate that we ever met." +
    "She really gets me and it’s like we’re in our own world whenever we’re together." +
    " I really feel like she gets me, and that I can tell her anything." +
    " I love her so much even though she always tries to tickle me when we’re together."
  const bactiveText = "I honestly don’t even know where to begin." +
    " Badminton completely changed my life." +
    " I bonded with so many people, and made so many friendships that I cherish to this day. " +
    "It really changed my perspective on myself for the better in so many ways. " + 
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
  const familyText = "My parents do so much for me, I am so thankful for their love and support. " +
    "A plus side of moving back home was that I can finally spend more time with them. " +
    "They work so hard and I always hope that I make them proud. " +
    "I am also really glad that my brother and I have started talking more and getting closer. " +
    "We didn’t really grow up close, but I feel like we’re actually friends now, and he brings me lots of cool presents from when he travels. " +
    "I also met a lot of extended family over the summer, and they’re all incredibly cool and supportive of me."
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
    "He is one of the smartest, hard-working, most realistic people I’ve ever met. " +
    "He’s kept me fed during late-night IKB grinds, and has literally taught me half my courses. " +
    "He always believes in me, no matter how many mental breakdowns I have or examlets I fail."
  const lebronText = "I don’t even know where to start with these guys. " +
    "They have been with me through thick and thin, and have kept me laughing the entire time. " +
    "They’ve gotten me through tournaments, breakups, and the transition period between high school in Edmonton and university in Vancouver. " +
    "There’s really so much to say. " +
    "I could have individual sections just for each of them. " +
    "I’m so grateful for all the tournaments and the training, the texts, the FaceTimes, and especially for the terrible (but sometimes seriously good) life and love advice that gets passed around. " +
    "I guess 2 hours straight of physical every Sunday really bonds people together."
  const macText = "High school badminton was so much fun. " +
    "From playing pickleball at practice to intense Provincial’s matches, I enjoyed every moment of it. " +
    "And what made it so special was the team. " +
    "We had some amazing seasons and I’m so proud of all of us! " +
    "I miss bussing for hours, walking around random cities, and even the stressing over lineups and brutal losses. " +
    "I wouldn’t have traded it for the world. " +
    "So many people on this team have been through so much with me, and were some of my closest friends."
  const maggieText = "Maggie is one of the funniest and smartest people I know. " +
    "We were attached at the hip for most of the second sem last year, and I don’t think we stopped laughing the whole time, even through countless man-related crashouts. " +
    "She really lit up my life, and helped me survive the stress of school and specialization. " +
    "We don’t see each other often anymore (mostly because she never came to class this year…) but I know we still love each other and I’m so glad that we met."
  const melissaText = "Melissa is genuinely so special. " +
    "She’s so funny and diligent, and insanely good at badminton (but arguably better at pickleball). " +
    "I’m so grateful for all the rides I've bummed off of her, all the time we spent together, and every time I laughed so hard my stomach hurt. " +
    "I look back very fondly on high school (the summers especially) largely because of her. " +
    "I miss her jokes and her mannerisms and can’t wait to see her again."
  const petrosText = "Faith has been something that I have struggled with my whole life (and continue to struggle deeply with). " +
    "Despite this, I am thankful that I have been led to a group of people who are unreasonably funny and caring. " +
    "I did not spend an insurmountable amount of time with them, but I truly treasure what we have been through together. " +
    "I’ve always been so inspired by the casual authenticity, kindness, and joy that these people radiate, and I’m so blessed to have met them."
  const ponderosaText = "These are a group of my closest friends and I genuinely love them to bits. " +
    "We met through SUS, and I’m so thankful that we got to meet. " +
    "They’re the funniest, kindest, most genuine people in the world, and I am so blessed that I can call them my friends. " +
    "They are all so smart and bright and seriously deserve the whole world. " +
    "From finals seasons to Forestry fields to freakishly cold water, I can’t imagine anyone better to go through those insanely late nights (or life in general) with."
  const saraText = "Sara was my best friend growing up. I was always in her house after school and eating her snacks, even when we didn’t have a French puppet show assignment due. " +
    "She influenced me into becoming emo in middle school, and ultimately introduced me to some insanely good music and artists. " +
    "She’s one of the funniest and coolest people I know, and I love all the stories she tells me. " +
    "I’m very blessed to still have her in my life, and grateful that we still visit each other pretty often. "
  const sophiaText = "These people held me down when we first got to UBC. " +
    "They’re actually like some of the smartest, funniest, talented, hardworking people I know, and some of my favourite memories were with them. " +
    "I’ve known Sophia and David for insanely long, and have known Sean since high school. " +
    "Wreck Beach on the night of the Northern Lights is one of my all-time favourite memories, and I have too many beautiful amazing moments with Sophia to even recount them here… " +
    "Like drawing on her in middle school or drawing with her over quarantine."
  const susText = "SUS was one of the most impactful things that I ever did in Vancouver. " +
    "I genuinely think it changed my life. " +
    "So many of my amazing memories have been made through sus, where I've also met so many amazing people, and have been given so many amazing opportunities and insights. " +
    "Like 85% of my closest friends have been met through SUS, and I wouldn't have it any other way."
  const yeoText = "I love Yeojin so much, I don’t even think I can describe it with words. " +
    "She’s so empathetic, understanding, and kind, and is so so so much fun to ragebait. " +
    "I love her personality, and really think that we’re kindred spirits. " +
    "She takes care of me so well, and when she’s not hitting/biting/abusing me, she’s teaching me more about love and making me laugh. " +
    "She’s helped me through terrible, scary things, and has brought me so much joy. " +
    "Even though she pretends to hate me, I strive to be as cool as her one day."


  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const photos = [
    // src, top, left, width, title, text
    { src: amberPng, top: "53.3970276%", left: "2.7%", width: "8.743927828%", title: "amber", text: amberText },
    { src: bactivePng, top: "48.3%", left: "23.21%", width: "9.090909091%", title: "b-active badminton club", text: bactiveText },
    { src: bcPng, top: "2.441613588%", left: "40.13%", width: "10.99930604%", title: "my bc friends", text: bcText },
    { src: edmPng, top: "72.23991507%", left: "42.73%", width: "17.34906315%", title: "my edmonton friends", text: edmText },
    { src: erinPng, top: "67.94055202%", left: "18%", width: "12.17904233%", title: "erin", text: erinText },
    { src: familyPng, top: "74.62845011%", left: "59.02861665%", width: "3.695350451%", title: "my family", text: familyText },
    { src: feliciaPng, top: "55.25477707%", left: "10.2%", width: "16.48160999%", title: "felicia", text: felText },
    { src: felixPng, top: "24.62845011%", left: "55.25%", width: "8.188063845%", title: "felix", text: felixText },
    { src: kaiPng, top: "5.25477707%", left: "6.6%", width: "4.649548924%", title: "kai", text: kaiText },
    { src: lebronPng, top: "52.22505308%", left: "54.53270574%", width: "6.627342124%", title: "the lebron james support gang", text: lebronText },
    { src: macPng, top: "20.91295117%", left: "34.3%", width: "8.639833449%", title: "my hs badminton team", text: macText },
    { src: maggiePng, top: "26.22080679%", left: "23.88192333%", width: "9.993060375%", title: "maggie", text: maggieText },
    { src: melissaPng, top: "75.93630573%", left: "68.9%", width: "9.993060375%", title: "melissa", text: melissaText },
    { src: petrosPng, top: "4.40552017%", left: "23.4%", width: "6.349757113%", title: "my petros friends", text: petrosText },
    { src: ponderosaPng, top: "41%", left: "65.33%", width: "10.08119362%", title: "the ponderosa princesses", text: ponderosaText },
    { src: saraPng, top: "2.972399151%", left: "56.48%", width: "7.807078418%", title: "sara", text: saraText },
    { src: sophiaPng, top: "1.167728238%", left: "74.81%", width: "24.28868841%", title: "sophia, david, and sean", text: sophiaText },
    { src: susPng, top: "46.39065817%", left: "86.32%", width: "12.90770298%", title: "ubc sus", text: susText },
    { src: yeojinPng, top: "71.91%", left: "27.7%", width: "9.576682859%", title: "yeojin", text: yeoText }
  ]

  const [found, setFound] = useState(new Set());

  const handlePhotoClick = (photo) => {
    if(!found.has(photo.title)) {
      setFound(new Set([...found, photo.title]));
      
    }
    setSelectedPhoto(selectedPhoto?.title === photo.title ? null : photo);
  }

  const getPosition = (photo) => {
    const leftPercent = parseFloat(photo.left);
    const topPercent = parseFloat(photo.top);
    let position = {};

    // hardcode it w 4 if else statements, then try to encapsulate ?

    if (leftPercent < 50) { // && topPercent < 50
      position.left = `calc(${photo.left} + ${photo.width} + 1%)`;
    }
    else {
      position.right = `calc(100% - ${photo.left} + 2%)`
    }

    if (topPercent > 60) {
      position.top = `calc(100% - ${photo.top} + 30%)`;
    } else {
      position.top = photo.top;
    }

    return position;

  };

  return (
    <div className="outside" onClick = {() => setSelectedPhoto(null)}>
      <div className="trackingFound">
        <span>discovered: {found.size} / {photos.length}</span>
        {found.size === photos.length && <span>, all found! 1 for every yr&lt;3</span>}
      </div>
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
                  handlePhotoClick(photo);
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
                  onClick={(e) => {e.stopPropagation();
                  }}
                  style={{
                    position: "absolute",
                    top: popupPosition.top,
                    left: popupPosition.left,
                    right: popupPosition.right,
                    zIndex: 200
                  }}
                >
                  <div className="textContainer">
                    <h3 className="textTitle">{photo.title}</h3>
                    <p className="textText">{photo.text.toLowerCase()}</p>
                    {/* <button
                      className="close-btn"
                      onClick={() => setSelectedPhoto(null)}
                    >
                      ×
                    </button> */}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App
