import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <hr className="h-1 text-gray-400 w-full mx-auto" />
        <div className="p-15 flex justify-between items-center">
          <div>
            <h2 className="font-semibold mb-2">Product & Service</h2>
            <ul className="text-[#5C5C5C] text-sm flex flex-col gap-2 ">
              <li>Products</li>
              <li>Services</li>
              <li>Appliances</li>
              <li>
                Storage{" "}
                <span className="border bg-amber-50 border-[#FF9E0C] text-[#FF9E0C] px-2 rounded-2xl mx-1">
                  New
                </span>
              </li>
              <li>Lifestyle</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Shop Now</h2>
            <ul className="text-[#5C5C5C] text-sm flex flex-col gap-2 ">
              <li>Offer</li>
              <li>Promos</li>
              <li>Online Shop FAQ</li>
              <li>
                Business{" "}
                <span className="border bg-amber-50 border-[#FF9E0C] text-[#FF9E0C] px-2 rounded-2xl mx-1">
                  Offer
                </span>
              </li>
              <li>Student Offer</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Support</h2>
            <ul className="text-[#5C5C5C] text-sm flex flex-col gap-2 ">
              <li>Contact</li>
              <li>Email Support</li>
              <li>Live Chat</li>
              <li>Phone Support</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Account</h2>
            <ul className="text-[#5C5C5C] text-sm flex flex-col gap-2 ">
              <li>My Products</li>
              <li>Orders</li>
              <li>Wishlist</li>
              <li>
                Service{" "}
                <span className="border bg-amber-50 border-[#FF9E0C] text-[#FF9E0C] px-2 rounded-2xl mx-1">
                  New
                </span>
              </li>
              <li>Rewards</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">About</h2>
            <ul className="text-[#5C5C5C] text-sm flex flex-col gap-2 ">
              <li>Company Info</li>
              <li>Brand Guidelines</li>
              <li>Careers</li>
              <li>
                Investors{" "}
                <span className="border bg-amber-50 border-[#FF9E0C] text-[#FF9E0C] px-2 rounded-2xl mx-1">
                  New
                </span>
              </li>
              <li>Abour Us</li>
            </ul>
          </div>
        </div>
        <hr className="h-1 text-gray-400 w-full mx-auto" />
        <div className="flex justify-between items-center pt-5 pb-10 px-10">
          <ul className="text-[#5C5F66] flex justify-center items-center gap-7 pl-110 text-sm">
            <li>English</li>
            <li>Privacy</li>
            <li>Legal</li>
          </ul>
          <p className="text-[#A6A7AB] text-sm">
            &copy; 2025 Volonte Rwicha, All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
