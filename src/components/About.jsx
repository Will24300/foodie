import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import dish from "../assets/dish.png";
import bike from "../assets/bike.png";
import options from "../assets/options.png";
import burger from "../assets/burger.png";

function About() {
  return (
    <>
      <section className="py-20 px-10">
        <div className="grid grid-cols-4 gap-7">
          <div className=" shadow-xl flex flex-col justify-center items-center text-center py-4 px-3 rounded-2xl">
            <img src={icon1} alt="icon1" className="h-20" />
            <h2 className="font-semibold text-2xl py-3">Quality Food</h2>
            <p className="text-gray-600">
              Contrary to popular belief, Lorem Ipsum is not simply random text
              random text
            </p>
            <span className="text-gray-900 pt-3 font-bold cursor-pointer">
              Learn more
            </span>
          </div>

          <div className=" shadow-xl flex flex-col justify-center items-center text-center py-4 px-3 rounded-2xl">
            <img src={icon2} alt="icon2" className="h-20" />
            <h2 className="font-semibold text-2xl py-3">Quality Food</h2>
            <p className="text-gray-600">
              Contrary to popular belief, Lorem Ipsum is not simply random text
              random text
            </p>
            <span className="text-gray-900 pt-3 font-bold cursor-pointer">
              Learn more
            </span>
          </div>
          <div className=" shadow-xl flex flex-col justify-center items-center text-center py-4 px-3 rounded-2xl">
            <img src={icon3} alt="icon3" className="h-20" />
            <h2 className="font-semibold text-2xl py-3">Quality Food</h2>
            <p className="text-gray-600">
              Contrary to popular belief, Lorem Ipsum is not simply random text
              random text
            </p>
            <span className="text-gray-900 pt-3 font-bold cursor-pointer">
              Learn more
            </span>
          </div>
          <div className=" shadow-xl flex flex-col justify-center items-center text-center py-4 px-3 rounded-2xl">
            <img src={icon4} alt="icon4" className="h-20" />
            <h2 className="font-semibold text-2xl py-3">Quality Food</h2>
            <p className="text-gray-600">
              Contrary to popular belief, Lorem Ipsum is not simply random text
              random text
            </p>
            <span className="text-gray-900 pt-3 font-bold cursor-pointer">
              Learn more
            </span>
          </div>
        </div>
        <div className="mt-20 flex gap-10 px-10">
          <div>
            <img src={dish} alt="breakfast" className="rounded-4xl" />
          </div>
          <div className="flex flex-col items-center w-4/5 space-y-10">
            <h1 className="font-semibold text-4xl mb-10">
              Why People Choose us?
            </h1>
            <div className="bg-white shadow flex justify-center items-center p-3 gap-5 w-7/8 rounded-2xl">
              <div>
                <img src={bike} alt="bike" className="h-20 w-30" />
              </div>
              <div>
                <h2 className="font-semibold text-lg mb-2">
                  Convenient and Reliable
                </h2>
                <p className="text-gray-500 text-sm">
                  Whether you dine in, take out, or order delivery, our service
                  is convenient, fast, and reliable, making mealtime
                  hassle-free.
                </p>
              </div>
            </div>
            <div className="bg-white shadow flex justify-center items-center p-3 gap-5 w-7/8 rounded-2xl">
              <div>
                <img src={options} alt="options" className="h-20 w-25" />
              </div>
              <div>
                <h2 className="font-semibold text-lg mb-2">
                  Variety of Options
                </h2>
                <p className="text-gray-500 text-sm">
                  From hearty meals to light snacks, we offer a wide range of
                  options to suit every taste and craving.
                </p>
              </div>
            </div>
            <div className="bg-white shadow flex justify-center items-center p-3 gap-5 w-7/8 rounded-2xl">
              <div>
                <img src={burger} alt="bike" className="h-20 w-30" />
              </div>
              <div>
                <h2 className="font-semibold text-lg mb-2">Eat Burger</h2>
                <p className="text-gray-500 text-sm">
                  Our burgers are grilled to perfection, with juicy patties and
                  flavorful toppings that make every bite a delicious
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
