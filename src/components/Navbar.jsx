import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav className="bg-yellow-50 h-[100vh]">
        <div className="flex justify-between items-center py-15 px-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-8" />
            <h1 className="text-2xl font-semibold text-[#F03328]">
              Foo<span className="text-[#FF9E0C]">die</span>
            </h1>
          </div>
          <div className="flex items-center gap-10">
            <ul className="flex items-center gap-20">
              <li>
                <a
                  href="#home"
                  className="text-[#F03328] pb-1 border-b-2 border-[#F03328]"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#menu">Our Menu</a>
              </li>
              <li>
                <a href="#food">Food</a>
              </li>
              <li>
                <a href="#aboutus">About us</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
            </ul>
            <button className="bg-transparent text-[#F03328] border-2 py-1.5 px-8 border-[#F03328] rounded-4xl cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
