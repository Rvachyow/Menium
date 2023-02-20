import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import { Main } from "../components/Main/Main";

export const MeniumPage = () => {
  return <Layout header={<Header/>} footer={<Footer/>}>
    <Main />
  </Layout>;
};