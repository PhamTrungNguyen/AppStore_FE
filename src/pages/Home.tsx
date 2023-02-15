import React from "react";
import Banner from "../layouts/home/Banner";
import Card from "../layouts/home/Card";
import Coupon from "../layouts/home/Coupon";
import Menu from "../layouts/home/Menu";

const Home = () => {
  return (
    <div>
      <Menu></Menu>
      <Banner></Banner>
      <Card></Card>
      <Coupon></Coupon>
    </div>
  );
};

export default Home;
