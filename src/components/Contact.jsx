import user from "../assets/user.png";
import chef from "../assets/chef.png";

function Contact() {
  return (
    <>
      <section className="w-[90%] mx-auto py-20">
        <div className="flex justify-between items-center gap-25">
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
      </section>
    </>
  );
}

export default Contact;
