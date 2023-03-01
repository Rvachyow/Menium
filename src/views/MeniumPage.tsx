import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Main } from "../paiges/Main/Main";
import { Prices } from "../paiges/Prices/Prices";
import { Feedback } from "../paiges/Feedback/Feedback";

export const MeniumPage = () => {
  return <Layout header={<Header/>} footer={<Footer/>}>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/:id" element={<Main/>}/>
      <Route path="/prices" element={<Prices/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
    </Routes>
  </Layout>;
};