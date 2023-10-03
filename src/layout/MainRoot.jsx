import { Outlet } from 'react-router-dom';

const MainRoot = () => {
  return (
    <div className="font-poppins max-w-6xl mx-auto">
      <Outlet />
    </div>
  );
};

export default MainRoot;
