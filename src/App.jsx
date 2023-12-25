import General from "./components/General";
import Educational from "./components/Educational";
import Practical from "./components/Practical";
import CVPage from "./components/CVPage";
import { useState } from "react";

export default function App() {
  const [info, setInfo] = useState({
    fullName: "Spongebob Squarepants",
    birthDate: "July 14th, 1986",
    email: "spongebob123@gmail.com",
    phoneNumber: "707 663-GARY",
    address: "Bikini Bottom",
    schoolName: "Mrs. Puff's Boating School",
    studyTitle: "Boating",
    studyDate: "1999-Present",
    schoolAddress: "Bikini Bottom",
    companyName: "The Krusty Krab",
    jobPosition: "Fry cook",
    jobDescription:
      "I have to cook burgers which tastes extremely good on taste buds of your tongue. I also have to clean the floor sometimes.",
    jobDate: "1998 - Present",
  });
  return (
    <div className="grid grid-cols-2 min-h-screen min-w-full bg-[#171717]">
      <div className="left-side">
        <General getGeneralInfo={setInfo} generalInfo={info} />
        <Educational getGeneralInfo={setInfo} generalInfo={info} />
        <Practical getGeneralInfo={setInfo} generalInfo={info} />
      </div>
      <div className="right-side">
        <CVPage person={info} />
      </div>
    </div>
  );
}
