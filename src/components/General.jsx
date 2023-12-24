export default function General() {
  return (
    <div className="text-white flex flex-col mt-[50px] min-w-[70%] gap-[30px]">
      <h2 className="pl-[20px] text-3xl font-bold">General Information</h2>
      <div className=" bg-[#202020] p-[40px] rounded-lg gap-[20px] min-w-[100%]">
        <form className="grid grid-cols-2 gap-[50px]">
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Spongebob Squarepants"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="spongebob123@gmail.com"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold">Phone Number</label>
            <input
              type="number"
              placeholder="+123-1234567890"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold">Address</label>
            <input
              type="text"
              placeholder="City name"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
