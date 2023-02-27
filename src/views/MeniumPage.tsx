import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Main } from "../components/Main/Main";

export const MeniumPage = () => {
  return <Layout header={<Header/>} footer={<Footer/>}>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/:id" element={<Main/>}/>
    </Routes>
  </Layout>;
};