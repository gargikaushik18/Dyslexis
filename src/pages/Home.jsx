import Hero from "../components/Hero";
import Products from "../components/Products";
import Parents from "../components/Parents";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="products"><Products /></section>
      <section id="parents"><Parents /></section>
      <section id="contact"><Contact /></section>
      <section id="faq"><FAQ /></section>
    </>
  );
}

export default Home;
