import General from "./components/General";
import Educational from "./components/Educational";
import Practical from "./components/Practical";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-[#171717]">
      <General />
      <Educational />
      <Practical />
    </div>
  );
}
