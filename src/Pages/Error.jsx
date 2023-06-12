import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png"
        alt=""
        className="w-64 h-64 mb-6"
      />
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          <span>Error</span> {status || 404}
        </h2>
        <p className="text-gray-700 mb-4">{error?.message}</p>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
