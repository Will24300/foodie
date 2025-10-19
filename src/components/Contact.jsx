import user from "../assets/user.png";
import chef from "../assets/chef.png";

function Contact() {
  return (
    <>
      <section className="pt-20 ">
        <div className="flex justify-between items-center gap-25 bg-amber-50 h-[100vh] px-20 ">
          <div className="w-2/4">
            <h1 className="font-semibold text-4xl pb-5">
              Customer <span className="text-[#F03328]">Feedback</span>
            </h1>
            <p className="text-[#3D3D3D] pb-5">
              I recently dined at your restaurant and wanted to share my
              experience. The food was absolutely delicious, and I was impressed
              by the freshness of the ingredients. Each dish was bursting with
              flavor, and the portion sizes were perfect. The service was quick
              and efficient, and the staff was incredibly friendly and
              welcoming.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-3">
                <img src={user} alt="user" />
                <div className="font-semibold">
                  <h2 className="text-[#F03328]">Tayyab Sohail</h2>
                  <p>UX/UI Designer</p>
                </div>
              </div>
              <div className="flex  gap-2">
                <div className="p-1.5 border cursor-pointer rounded-full border-[#F03328]"></div>
                <div className="p-1.5 border cursor-pointer bg-[#F03328] rounded-full border-[#F03328]"></div>
                <div className="p-1.5 border cursor-pointer rounded-full border-[#F03328]"></div>
              </div>
            </div>
          </div>
          <div className="w-2/5 relative">
            <div className="bg-[#FF9E0C]   h-76 flex justify-center items-center pb-20 [clip-path:polygon(0_59%,_100%_10%,_100%_100%,_0%_100%)]"></div>
            <img
              src={chef}
              alt="chef"
              className="h-96 absolute top-[-80px] left-7"
            />
          </div>
        </div>
        <div className="my-15 flex justify-between px-20">
          <div>
            <h1 className="font-semibold text-2xl pb-2">
              Join Our <span className="text-[#F03328]">Newsletter</span>
            </h1>
            <p className="text-[#5C5C5C] text-sm">
              Be the first to know about our latest updates, exclusive offers,
              and more.
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border border-gray-400 outline-none text-sm px-4 py-1.5 rounded-sm"
            />
            <button className="bg-[#F03328] text-white py-1.5 px-4 rounded-sm text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
