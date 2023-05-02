import Desktop from "./components/Desktop";
import ExploreFeatures from "./components/ExploreFeatures";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import Header from "./components/Header";
import DesktopOS from "./components/DesktopOS";
import PreFooter from "./components/PreFooter";
import PricingPlans from "./components/PricingPlans";
import Roadmap from "./components/Roadmap";
import SliderVideo from "./components/SliderVideo";
import TextCol from "./components/TextCol";
import "./styles/app.sass";

function App() {
  return (
    <div className="main">
      <Header />
      <Desktop />
      <SliderVideo />
      <Frame />
      <TextCol />
      <Frame />
      <Roadmap />
      <PricingPlans />
      <DesktopOS />
      <ExploreFeatures />
      <Footer />
      <PreFooter />
    </div>
  );
}

export default App;
