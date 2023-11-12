const Navbar = () => {
  return (
    <div
      className="flex flex-row justify-between items-center
    w-full h-full bg-stone-700 text-slate-400  rounded-md  px-20 py-2"
    >
      <div className="font-semibold p-4">Roadmap</div>
      <ul className=" flex px-4 py-4 list-none">
        <li className="px-3 hover:bg-slate-300 hover:text-slate-900 rounded-lg cursor-pointer">
          Home
        </li>
        <li className="px-3 hover:bg-slate-300 hover:text-slate-900 rounded-lg cursor-pointer">
          About
        </li>
        <li className="px-3 hover:bg-slate-300 hover:text-slate-900 rounded-lg cursor-pointer">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
