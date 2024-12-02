import React from "react";
import Header from "../compenents/Header";
import SpecialityMenu from "../compenents/SpecialityMenu";
import FamousArtists from "../compenents/FamousArtists";
import Banner from "../compenents/Banner";

const Home = () => {
  return (<div>
    <Header />
    <SpecialityMenu />
    <FamousArtists />
    <Banner/>
  </div>
  )
}

export default Home
