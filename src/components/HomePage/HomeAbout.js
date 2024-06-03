import React from "react";
import TwoLabelHeader from "../Utils/TwoLabelHeader";

const HomeAbout = () => {
  return (
    <div
      className="container my-5"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TwoLabelHeader first={"About"} second={"Us"} />

      <p className="my-2">
        Ieee is the world's largest technical professional organization
        Dedicated to advancing technology for the benefit of humanity. Iee aims
        To serve professionals involved in all aspects of the electrical,
        Electroni9cs and computing fields and related areas of science and
        Technology with the necessary resources for the progression of modern
        Civilization. The ieee body approved the formation of the ieee
        Nanotechnology council and its field of interest on february 17, 2022.
        The ieee nanotechnology council supports the advancement and
        Coordination of works in the field of nanotechnology by supporting the
        Theory, design and development of nanotechnology and its scientific,
        Engineering, and industrial application. The ieee nanotechnology council
        Is part of the division- circuits and devices and is made up of 23
        Member societies and has many chapters. In this student chapter, we at
        Iit patna is trying to create an interactive platform for the student
        Members to discuss and collaborate with the academicians and industry
        Professional who are working in the nanotechnology field. Further, the
        Ieee ntc student chapter covers a vast variety of topics consisting of
        Photonics, optoelectronics, photovoltaic, memristive technologies, the
        Internet of things, and so on. The major aim of this student chapter is
        To develop the young professionals towards the recent development in
        Nanotechnology and utilize there skills for the welfare of society and
        Humanity.
      </p>
    </div>
  );
};

export default HomeAbout;