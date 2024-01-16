import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { SubTopic } from './components/subTopic';
import { Options } from './components/options';
import { StudyImage } from './components/studyImage';
import { BottomLogo } from './components/bottomLogo';
import { FaqSection } from './components/faqSection';

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <SubTopic/>
    <Options/>
    <StudyImage/>
    <BottomLogo/>
    <FaqSection/>
   </div>
  );
}

export default App;
