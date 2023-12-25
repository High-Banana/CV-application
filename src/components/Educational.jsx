export default function Educational() {
  return (
    <div className="flex flex-col text-white my-[50px] mx-[50px] gap-[30px] col-start-1">
      <h2 className="text-white text-3xl font-bold pl-[20px]">Educational Experience</h2>
      <div className=" bg-[#202020] p-[40px] rounded-lg gap-[20px] min-w-[100%]">
        <form className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="schoolName">
              School Name <small>(Short form works)</small>
            </label>
            <input
              type="text"
              placeholder="Name of the school"
              id="schoolName"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="studyTitle">
              Title of Study
            </label>
            <input
              type="text"
              id="studyTitle"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="studyDate">
              Date of Study
            </label>
            <input
              type="text"
              placeholder="From-To (Year)"
              id="studyDate"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="schoolAddress">
              Address <small>(Optional)</small>
            </label>
            <input
              type="text"
              placeholder="School Address"
              id="schoolAddress"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
