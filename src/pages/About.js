import React from "react";
import Background from "../assets/aboutbackground.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Welcome to Umami Bites</h1>
        <p>
          At Umami Bites, we take pride in curating an exquisite culinary
          experience that transcends the ordinary. Our journey began with a
          passion for Japanese cuisine, an art form that celebrates balance,
          flavor, and tradition. We invite you to embark on a gastronomic
          adventure as we unfold the rich tapestry of umami-infused delights.
        </p>
        <h1>What Is Umami?</h1>
        <p>
          Umami, which is also known as monosodium glutamate is one of the core
          fifth tastes including sweet, sour, bitter, and salty. Umami means
          “essence of deliciousness” in Japanese, and its taste is often
          described as the meaty, savory deliciousness that deepens flavor.
        </p>
        <h1>The Umami Experience</h1>
        <p>
          From the silky strands of udon noodles to the delicate slices of
          sashimi, every bite at Umami Bites is a journey to a culinary
          paradise. Our menu showcases a diverse array of Japanese classics,
          including sushi rolls bursting with freshness, skewers of succulent
          yakitori, and gyoza dumplings that embody perfection in every fold.
        </p>
      </div>
    </div>
  );
}

export default About;
