import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <div>
      <div className="text-center ">
        <img className="mt-12 text-center mx-auto mb-5" src={logo} alt="" />
        <p className="text-md">Journalism Without Fear or Favour</p>
        <p className="text-xl my-5">{moment().format('dddd, MMMM D, YYYY')}</p>
      </div>
    </div>
  );
};

export default Header;
