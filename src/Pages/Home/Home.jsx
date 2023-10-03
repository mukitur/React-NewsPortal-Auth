import Header from '../../Shared/Header/Header';
import NavBar from '../../Shared/NavBar/NavBar';
import RightSideBar from '../../Shared/RightSideBar/RightSideBar';
import BreakingNews from './BreakingNews';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
        <div>
          <LeftSideBar />
        </div>
        <div className="md:col-span-2">
          {' '}
          <h2 className="text-5xl">Content coning soon</h2>
        </div>
        <div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
