import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, Links } from "react-router-dom";

function Register() {
  return (
    <>
      <section className="bg-[#FF9E0C] h-[100vh] flex justify-between items-center">
        <div className="h-full w-full flex justify-center items-center">
          <h1 className="text-white text-6xl font-bold font-lilita">Foodie</h1>
        </div>
        <div className="bg-white h-full w-full flex flex-col justify-center items-center rounded-tr-4xl relative">
          <Link to="/">
            <button className="bg-[#FF9E0C] text-white py-1.5 px-4 rounded cursor-pointer absolute bottom-3 right-3">
              Back
            </button>
          </Link>
          <div className="w-3/5 mx-auto">
            <div className="pb-5">
              <h2 className="font-semibold text-xl">Hello!</h2>
              <p className="text-sm">Sign Up to Get Started</p>
            </div>
            <form className="">
              <div className="bg-gray-200 py-2 px-2 flex items-center gap-2 rounded mb-3">
                <FontAwesomeIcon icon={faUser} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="outline-none w-full"
                />
              </div>
              <div className="bg-gray-200 py-2 px-2 flex items-center gap-2 rounded mb-3">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="outline-none w-full"
                />
              </div>
              <div className="bg-gray-200 py-2 px-2 flex items-center gap-2 rounded mb-3">
                <FontAwesomeIcon icon={faLock} />
                <input
                  type="password"
                  placeholder="Password"
                  className="outline-none w-full"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#FF9E0C] w-full text-white py-1.5 px-4 rounded mt-3 cursor-pointer"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
