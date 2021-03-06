import * as React from "react";
import Header from "../component/shared/header";
import Hero from "../component/hero";
import FormContact from "../component/form";
import Footer from "../component/shared/footer";
import Modality from "../component/modality";
import Brochure from "../component/brochure";
import Calendar from "../component/calendar";


export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Modality />
      <Calendar />
      <Brochure />
      <FormContact />
      <Footer />
    </React.Fragment>
  );
}