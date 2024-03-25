const Navbar = () => {
  return (
    <>
      <nav className="py-9  bg-[#FAE3B6]">
        <div className="container flex justify-between items-center">
          <div>
            <img src="/logo.png" alt="" />
          </div>
          <ul className="flex gap-14 font-semi-bold text-2xl">
            <li>
              <a>Men</a>
            </li>
            <li>
              <a>Women</a>
            </li>
            <li>
              <a>Kids</a>
            </li>
            <li>
              <a>Collection</a>
            </li>
            <li>
              <a>Trends</a>
            </li>
          </ul>
          <div className="flex gap-3">
             <button className="bg-[black] text-[#FFF] rounded-xl px-8 py-3.5 font-semibold text-2xl shadow-lg  hover:bg-[red]">
              Login
            </button>
            <button className="bg-[black] text-white rounded-xl px-8 py-3.5 font-semibold text-2xl  hover:bg-[red] hover:text-[#fff] shadow-lg">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
