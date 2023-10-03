import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
  return (
    <div className="mb-10 bg-gray-100 p-4 flex">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
