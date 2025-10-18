import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import food5 from "../assets/food5.png";
import food6 from "../assets/food6.png";
import rating from "../assets/rating.png";

function Menu() {
  return (
    <>
      <section className="w-[90%] mx-auto py-20">
        <div className="flex flex-col justify-center items-center text-center mb-15">
          <h1 className="font-semibold text-4xl pb-4">
            Our best Seller Dishes🔥🔥
          </h1>
          <p className="text-[#5C5C5C] w-2/4">
            Our fresh garden salad is a light and refreshing option. It features
            a mix of crisp lettuce, juicy tomatoe all tossed in your choice of
            dressing.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-10 w-7/8 mx-auto">
          <div className="shadow flex flex-col  rounded-b-2xl">
            <img src={food1} alt="food" className="w-full" />
            <div className="py-5 px-4">
              <div className="flex justify-between items-center pb-3">
                <h2 className="font-semibold text-xl">Breakfast Food</h2>
                <button className="bg-[#F03328] text-white px-4 py-1 rounded-2xl cursor-pointer">
                  Buy Now
                </button>
              </div>
              <div className="flex justify-between items-center">
                <img src={rating} alt="rating" className="h-4" />
                <p className="font-semibold text-xl">$230</p>
              </div>
            </div>
          </div>
          <div className="shadow flex flex-col  rounded-b-2xl">
            <img src={food2} alt="food" className="w-full" />
            <div className="py-5 px-4">
              <div className="flex justify-between items-center pb-3">
                <h2 className="font-semibold text-xl">Breakfast Food</h2>
                <button className="bg-[#F03328] text-white px-4 py-1 rounded-2xl cursor-pointer">
                  Buy Now
                </button>
              </div>
              <div className="flex justify-between items-center">
                <img src={rating} alt="rating" className="h-4" />
                <p className="font-semibold text-xl">$230</p>
              </div>
            </div>
          </div>
          <div className="shadow flex flex-col  rounded-b-2xl">
            <img src={food3} alt="food" className="w-full" />
            <div className="py-5 px-4">
              <div className="flex justify-between items-center pb-3">
                <h2 className="font-semibold text-xl">Breakfast Food</h2>
                <button className="bg-[#F03328] text-white px-4 py-1 rounded-2xl cursor-pointer">
                  Buy Now
                </button>
              </div>
              <div className="flex justify-between items-center">
                <img src={rating} alt="rating" className="h-4" />
                <p className="font-semibold text-xl">$230</p>
              </div>
            </div>
          </div>
          <div className="shadow flex flex-col  rounded-b-2xl">
            <img src={food4} alt="food" className="w-full" />
            <div className="py-5 px-4">
              <div className="flex justify-between items-center pb-3">
                <h2 className="font-semibold text-xl">Breakfast Food</h2>
                <button className="bg-[#F03328] text-white px-4 py-1 rounded-2xl cursor-pointer">
                  Buy Now
                </button>
              </div>
              <div className="flex justify-between items-center">
                <img src={rating} alt="rating" className="h-4" />
                <p className="font-semibold text-xl">$230</p>
              </div>
            </div>
          </div>
          <div className="shadow flex flex-col  rounded-b-2xl">
            <img src={food5} alt="food" className="w-full" />
            <div className="py-5 px-4">
              <div className="flex justify-between items-center pb-3">
                <h2 className="font-semibold text-xl">Breakfast Food</h2>
                <button className="bg-[#F03328] text-white px-4 py-1 rounded-2xl cursor-pointer">
                  Buy Now
                </button>
              </div>
              <div className="flex justify-between items-center">
                <img src={rating} alt="rating" className="h-4" />
                <p className="font-semibold text-xl">$230</p>
              </div>
            </div>
          </div>
          <div className="shadow flex flex-col  rounded-b-2xl">
            <img src={food6} alt="food" className="w-full" />
            <div className="py-5 px-4">
              <div className="flex justify-between items-center pb-3">
                <h2 className="font-semibold text-xl">Breakfast Food</h2>
                <button className="bg-[#F03328] text-white px-4 py-1 rounded-2xl cursor-pointer">
                  Buy Now
                </button>
              </div>
              <div className="flex justify-between items-center">
                <img src={rating} alt="rating" className="h-4" />
                <p className="font-semibold text-xl">$230</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
