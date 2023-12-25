import General from "./components/General";
import Educational from "./components/Educational";
import Practical from "./components/Practical";
import CVPage from "./components/CVPage";
import { useState } from "react";

export default function App() {
  const [info, setInfo] = useState({
    name: "Spongebob Squarepants",
    email: "spongebob123@gmail.com",
    phoneNumber: "+123 1234567890",
    address: "City name",
  });
  return (
    <div className="grid grid-cols-2 min-h-screen min-w-full bg-[#171717]">
      <div className="left-side">
        <General getGeneralInfo={setInfo} generalInfo={info} />
        <Educational />
        <Practical />
      </div>
      <div className="right-side">
        <CVPage fullName={info.name} emailAddress={info.email} phoneNumber={info.phoneNumber} address={info.address} />
      </div>
    </div>
  );
}
