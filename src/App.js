import { useState } from "react";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import { mainPrds } from "./libs/mainPrds";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Aside from "./components/Aside";

function App() {
  const [asideOpen, setAsideOpen] = useState(false);

  const sideBtnhandle = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <div className="App">
      <Aside asideOpen={asideOpen} sideBtnhandle={sideBtnhandle} />
      <TopBanner />
      <Header asideOpen={asideOpen} sideBtnhandle={sideBtnhandle} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Product prds={mainPrds} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
