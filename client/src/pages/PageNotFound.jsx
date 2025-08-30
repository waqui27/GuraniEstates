import { Link } from "react-router-dom"; // or your preferred routing solution

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 z-10">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-9xl font-bold text-[#017987] mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-[#017987] text-white font-medium rounded-lg hover:bg-[#016978] transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Need help?{" "}
            <a href="/contact" className="text-[#017987] hover:underline">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
