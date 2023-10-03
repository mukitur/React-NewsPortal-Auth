import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import qzone1 from '../../assets/qZone1.png';
import qzone2 from '../../assets/qZone2.png';
import qzone3 from '../../assets/qZone3.png';
const RightSideBar = () => {
  return (
    <div>
      <div className="border p-4">
        <h2 className="text-2xl font-bold ">Login With</h2>

        <button className=" btn btn-outline my-5 border px-3 py-2 w-full">
          <FaGoogle />
          Login with Google
        </button>

        {FaGoogle}
        <button className=" btn btn-outline border px-3 py-2 w-full">
          {' '}
          <FaGithub />
          Login with Github
        </button>
      </div>
      <div className="border p-4 mt-10 mb-4">
        <h2 className="text-2xl font-bold mb-6 ">Find Us On</h2>

        <p className="   px-3 py-2 mr-5 w-full">
          <a href="" className=" flex gap-3 items-center">
            <FaFacebook />
            Facebook
          </a>
        </p>

        {FaGoogle}
        <p className="  px-3 py-2 mr-5 flex gap-3 items-center w-full">
          {' '}
          <a href="" className="rounded-t-lg flex gap-3 items-center ">
            <FaTwitter />
            Twitter
          </a>
        </p>
        <p className="   px-3 py-2 flex gap-3 items-center w-full">
          {' '}
          <a href="" className=" flex gap-3 items-center ">
            <FaInstagram />
            InstraGram
          </a>
        </p>
      </div>
      {/* QZone */}
      <div className="bg-gray-100 p-4 mt-10">
        <h2 className="text-2xl font-bold ">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideBar;
