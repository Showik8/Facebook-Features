const Header = () => {
  return (
    <div className="bg-white h-[70px] w-full sticky top-0  shadow-sm flex justify-between px-5 items-center">
      <h1 className="text-lg text-orange-400 cursor-pointer hover:text-orange-500 transition-colors">
        ზუმერი
      </h1>

      <div className="border-2 border-gray-300 rounded-[10px] px-4 h-[40px] flex items-center gap-2">
        <input
          type="text"
          placeholder="ძიება"
          className="focus:outline-none border-none w-2/3"
        />
        <button className="border-none cursor-pointer hover:text-orange-500 transition-colors">
          ძებნა
        </button>
      </div>

      <button className="rounded-[10px] border-2 border-gray-300 px-4 h-[40px] cursor-pointer hover:text-orange-500 transition-colors">
        კალათა
      </button>
    </div>
  );
};

export default Header;
