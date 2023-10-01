import AdBanner from "../components/AdBanner";
import MainBanner from "../components/MainBanner";
import MainCampaign from "../components/MainCampaign";
import MainEvent from "../components/MainEvent";
import MainNewsLetter from "../components/MainNewletter";
import MainNotice from "../components/MainNotice";
import MainReview from "../components/MainReview";
import MainPerfume from "../components/Mainperfume";
import Recommend from "../components/Recommend";

const Main = () => {
  return (
    <section className="main">
      <MainBanner />
      <MainReview />
      <AdBanner />
      <Recommend />
      <MainPerfume />
      <MainEvent />
      <MainCampaign />
      <MainNewsLetter />
      <MainNotice />
    </section>
  );
};

export default Main;
