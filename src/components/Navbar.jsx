import logo from "../assets/logo.png";
import food from "../assets/food.png";
import bg from "../assets/bg.png";
import comment from "../assets/comment.png";
import delivery from "../assets/delivery.png";
import location from "../assets/location.png";

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
        <div className="flex justify-center items-center gap-10 px-10">
          <div className="w-2/4">
            <div className="flex justify-start gap-3 mb-3">
              <h1 className="text-5xl font-semibold pt-3">Desire</h1>
              <img src={food} alt="food" className="h-20" />
            </div>
            <h1 className="text-5xl font-semibold">for Your Taste</h1>

            <p className="mt-5 text-gray-600">
              Food is what we eat to stay alive and healthy. It comes in many
              different forms and flavors, from fruits and vegetables to meats
              and grains.
            </p>
            <button className="bg-[#F03328] text-white py-2 px-8 mt-7 rounded-4xl cursor-pointer">
              Order Now
            </button>
          </div>
          <div className="w-2/4 flex justify-center items-center relative">
            <div className="bg-[#FF9E0C] h-[300px] w-[400px] rounded-4xl mt-15"></div>
            <img src={bg} alt="bg" className="h-90 absolute" />
            <img
              src={comment}
              alt="comment"
              className="absolute bottom-0 left-0 h-15 "
            />
            <img
              src={location}
              alt="location"
              className="absolute bottom-20 right-0 h-12"
            />
            <img
              src={delivery}
              alt="delivery"
              className="absolute top-20 left-0 h-12"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
