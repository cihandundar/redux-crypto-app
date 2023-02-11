import { Hero, Info } from "components";
import React from "react";
import Center from "../../assets/images/center.jpg";
const Home = () => {
  return (
    <main>
      <section>
        <Hero />

        <Info />
        <div className="center">
          <div className="center__container">
            <img src={Center} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
