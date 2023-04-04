import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Experiences from "../src/components/Experiences";
import CardList from "../src/components/CardList";

import { cardData } from "../src/js/data.js";

export default class App extends React.Component {
  state = { cardData };
  render() {
    return (
      <main>
        <Navbar />
        <Hero />
        <Experiences />
        <CardList cardData={this.state.cardData} />
      </main>
    );
  }
}
