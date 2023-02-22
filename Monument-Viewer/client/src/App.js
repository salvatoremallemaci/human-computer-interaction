import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './Monument/HomeScreen';
import MonumentLoading from './Monument/MonumentLoading';
import MonumentRecognized from './Monument/MonumentRecognized';
import MonumentInfo from './Monument/MonumentInfo';
import SuggestAnEdit from './suggest-edit/SuggestAnEdit';
import { CustomNavbar, Sidebar, SuggestAnEditBar } from './components/Navbar';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import './App.css';

function App() {
  return (
    <Router>
      <App2 />
    </Router>
  );
}

function App2() {
  const [seeButton, setSeeButton] = useState(true);
  const initialMonument = {
    id: 1,
    name: 'Colosseum',
    currentYear: 80,
    years: [80, 320, 1200, 2023],
    descriptions: {
      80: [
        `The Colosseum is built of travertine limestone, tuff (volcanic rock), and brick-faced concrete.`,
        `It could hold an estimated 50,000 to 80,000 spectators at various points in its history, having an average audience of some 65,000; it was used for gladiatorial contests and public spectacles including animal hunts, executions, re-enactments of famous battles, and dramas based on Roman mythology, and briefly mock sea battles.`,
        `The building ceased to be used for entertainment in the early medieval era.`,
        `It was later reused for such purposes as housing, workshops, quarters for a religious order, a fortress, a quarry, and a Christian shrine.`,
        `Although substantially ruined by earthquakes and stone robbers taking spolia, the Colosseum is still an iconic symbol of Imperial Rome and was listed as one of the New 7 Wonders of the World.`,
        `It is one of Rome's most popular tourist attractions and also has links to the Roman Catholic Church, as each Good Friday the Pope leads a torchlit "Way of the Cross" procession that starts in the area around the Colosseum.`,
        `The Colosseum is depicted on the Italian version of the five-cent euro coin.`
      ],
      320: [
        `In 217, the Colosseum was badly damaged by a major fire (caused by lightning, according to Dio Cassius), which destroyed the wooden upper levels of the amphitheatre's interior.`, 
        `It was not fully repaired until about 240 and underwent further repairs in 250 or 252 and again in 320. Honorius banned the practice of gladiator fights in 399 and again in 404.`, 
        `Gladiatorial fights are last mentioned around 435.`, 
        `An inscription records the restoration of various parts of the Colosseum under Theodosius II and Valentinian III (reigned 425–455), possibly to repair damage caused by a major earthquake in 443; more work followed in 484 and 508.`, 
        `The arena continued to be used for contests well into the 6th century.`, 
        `Animal hunts continued until at least 523, when Anicius Maximus celebrated his consulship with some venationes, criticised by King Theodoric the Great for their high cost.`
      ],
      1200: [
        `In the early 13th Century, the Frangipani family found a wonderful opportunity in the Colosseum - the perfect chance to re-purpose one of the great structures of Rome into a fortified castle for the glory of their family.`, 
        `The Frangipanis controlled portions of the Colosseum and the area around it in beginning in the 12th Century (possibly obtaining rent money from local craftsmen), but this marked their first attempt to occupy the structure.`,
        `Records from the time show that the Frangipani's entrance into the Roman Colosseum improved the quality of life in the area.`, 
        `The Frangipanis also built a series of tunnels to connect the Roman Colosseum to other Frangipani homes in the area.`,
        `The Frangipani family did not maintain their hold on the Roman Colosseum for long, as Pope Innocent IV took over the site midway through the 13th Century.`, 
        `Innocent IV claimed the site for the Catholic Church, using part of the site as a hospital and again as a quarry after a series of earthquakes.`
      ],
      2023: [
        `The Colosseum is today one of Rome's most popular tourist attractions, receiving millions of visitors annually.`,
        `The effects of pollution and general deterioration over time prompted a major restoration programme carried out between 1993 and 2000, at a cost of Lire 40 billion ($19.3m / €20.6m at 2000 prices).`,
        `In recent years, the Colosseum has become a symbol of the international campaign against capital punishment, which was abolished in Italy in 1948.`,
        `Several anti–death penalty demonstrations took place in front of the Colosseum in 2000.`,
        `Since that time, as a gesture against the death penalty, the local authorities of Rome change the color of the Colosseum's night time illumination from white to gold whenever a person condemned to the death penalty anywhere in the world gets their sentence commuted or is released, or if a jurisdiction abolishes the death penalty.`,
        `Most recently, the Colosseum was illuminated in gold in November 2012 following the abolishment of capital punishment in the American state of Connecticut in April 2012.`,
        `Because of the ruined state of the interior, it is impractical to use the Colosseum to host large events; only a few hundred spectators can be accommodated in temporary seating.`,
        `However, much larger concerts have been held just outside, using the Colosseum as a backdrop.`,
        `Performers who have played at the Colosseum in recent years have included Ray Charles (May 2002), Paul McCartney (May 2003), Elton John (September 2005), and Billy Joel (July 2006).`
      ],
    },
    state: "total"
  };
  const [monument, setMonument] = useState(initialMonument);
  const [showModal, setShowModal] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const [goRight, setGoRight] = useState(false);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeScreen showModal={showModal} setShowModal={setShowModal}/>} />
        <Route path='loading' element={<MonumentLoading setShowModal={setShowModal}/>}  />
        <Route path='monument/1/' element={
          <>
            <CustomNavbar seeButton={seeButton} setSeeButton={setSeeButton} setGoRight={setGoRight}/>
            <Sidebar seeButton={seeButton} setSeeButton={setSeeButton} setGoRight={setGoRight} goRight={goRight} setShowTutorial={setShowTutorial}/>
            <MonumentRecognized monument={monument} setMonument={setMonument} seeButton={seeButton} setSeeButton={setSeeButton} showTutorial={showTutorial} setShowTutorial={setShowTutorial} />
          </>
        } />
        <Route path='monument/1/info' element={
          <>
            <SuggestAnEditBar seeButton={seeButton} setSeeButton={setSeeButton}/>
            <MonumentInfo monument={monument} />
          </>
        } />
      </Route>
      <Route path='monument/1/edit' element={<SuggestAnEdit monument={monument} setGoRight={setGoRight}/>} />
    </Routes>
  );
}

function Layout() {
  return (
    <Container fluid>
      <div className='camera-div'>
        <Camera isFullscreen idealFacingMode={FACING_MODES.ENVIRONMENT} />
      </div>
      <Outlet />
    </Container>
  );
}

export default App;