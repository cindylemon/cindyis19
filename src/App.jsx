import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const photos = [
    // src, top, left, width, title, text
    {src: "src/assets/amber.png", top: "53.3970276%", left: "2.7%", width: "8.743927828%", title: "amber", text: "text"},
    {src: "src/assets/bactive.png", top: "48.35456476%", left: "23.21%", width: "9.090909091%", title: "b-active badminton club", text:""},
    {src: "src/assets/bc.png", top: "2.441613588%", left: "40.13%", width: "10.99930604%", title: "my bc friends", text: ""},
    {src: "src/assets/edm.png", top: "72.23991507%", left: "42.73%", width: "17.34906315%", title: "my edmonton friends", text: ""},
    {src: "src/assets/erin.png", top: "67.94055202%", left: "18%", width: "12.17904233%", title: "erin", text: ""},
    {src: "src/assets/family.png", top: "74.62845011%", left: "59.02861665%", width: "3.695350451%", title: "my family", text: ""},
    {src: "src/assets/felicia.png", top: "55.25477707%", left: "10.2%", width: "16.48160999%", title: "felicia", text: ""},
    {src: "src/assets/felix.png", top: "24.62845011%", left: "55.25%", width: "8.188063845%", title: "felix", text: ""},
    {src: "src/assets/kai.png", top: "5.626326964%", left: "0.93%", width: "11.48507981%", title: "kai", text: ""},
    {src: "src/assets/lebron.png", top: "52.22505308%", left: "54.53270574%", width: "6.627342124%", title: "the lebron james support gang", text: ""},
    {src: "src/assets/mac.png", top: "20.91295117%", left: "34.3%", width: "8.639833449%", title: "my hs badminton team", text: ""},
    {src: "src/assets/maggie.png", top: "24.62845011%", left: "9.13%", width: "24.63566967%", title: "maggie", text: ""},
    {src: "src/assets/melissa.png", top: "75.93630573%", left: "68.9%", width: "9.993060375%", title: "melissa", text: ""},
    {src: "src/assets/petros.png", top: "4.40552017%", left: "23.4%", width: "6.349757113%", title: "my petros friends", text: ""},
    {src: "src/assets/ponderosa.png", top: "41%", left: "65.33%", width: "10.08119362%", title: "the ponderosa princesses", text: ""},
    {src: "src/assets/sara.png", top: "2.972399151%", left: "56.48%", width: "7.807078418%", title: "sara", text: ""},
    {src: "src/assets/sophia.png", top: "1.167728238%", left: "74.81%", width: "24.28868841%", title: "sophia, david, and sean", text: ""},
    {src: "src/assets/sus.png", top: "46.39065817%", left: "86.32%", width: "12.90770298%", title: "ubc sus", text: ""},
    {src: "src/assets/yeojin.png", top: "71.91%", left: "27.7%", width: "9.576682859%", title: "", text: ""}
  ]

  return (
    <div className = "container">
      {/* <img src="src/assets/collage.png" alt="collage" /> */}
      {photos.map(photo => (
        <img key = {photo.title}
        src = {photo.src}
        style = {{
          position: "absolute",
          top: photo.top,
          left: photo.left,
          width: photo.width 
        }}/>
      ))}
    </div>
  )
}

export default App
