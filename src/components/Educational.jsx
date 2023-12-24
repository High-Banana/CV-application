export default function Educational() {
  return (
    <div className="flex flex-col text-white my-[50px] mx-[100px] gap-[30px]">
      <h2 className="text-white text-3xl font-bold pl-[20px]">Educational Experience</h2>
      <div className=" bg-[#202020] p-[40px] rounded-lg gap-[20px] min-w-[100%]">
        <form className="grid grid-cols-2 gap-[50px]">
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold">
              School Name <small>(Short form works)</small>
            </label>
            <input
              type="text"
              placeholder="Name of the school"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold">Title of Study</label>
            <input type="text" className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold">Date of Study</label>
            <input
              type="text"
              placeholder="From-To (Year)"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold">
              Address <small>(Optional)</small>
            </label>
            <input
              type="text"
              placeholder="School Address"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
