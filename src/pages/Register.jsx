import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function Register() {
  return (
    <>
      <section className="bg-[#FF9E0C] h-[100vh] flex justify-between items-center">
        <div className="h-full w-full flex justify-center items-center">
          <h1 className="text-white text-6xl font-bold font-lilita">Foodie</h1>
        </div>
        <div className="bg-white h-full w-full flex flex-col justify-center items-center">
          <div>
            <h2>Hello!</h2>
            <p>Sign Up to Get Started</p>
          </div>
          <form>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="Full Name" />
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder="Email Address" />
            </div>
            <div>
              <FontAwesomeIcon icon={faLock} />
              <input type="email" placeholder="Email Address" />
            </div>
            <button>Register</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
