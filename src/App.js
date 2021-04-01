import NavBar from './components/navbar'
import './App.css';
import HeroSection from './components/heroSection'
import Panel from './components/panel'
import BannerSection from './components/bannerSection'
import BottomNavigation from './components/bottomNavigation'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className="App">
     <NavBar/>
     <HeroSection/>
     <BannerSection/>
     {/* <BottomNavigation/> */}
    </div>
  );
}

export default App;
