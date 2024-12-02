import React from 'react';

const CreatorDashboard = () => {
  return (
    <div className="relative flex items-center justify-between min-h-screen bg-[#F8F9FD] px-6 overflow-hidden">
      {/* Welcome Message */}
      <div className="z-10 max-w-3xl bg-white p-10 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome, Artist!
        </h1>
        <p className="text-gray-700 text-xl">
          We’re thrilled to have you showcase your creativity with us. If you'd
          like to share your poems, photographs, or paintings, please email us
          at{' '}
          <a
            href="mailto:artexpressin@demo.net"
            className="text-indigo-600 font-bold underline"
          >
            artexpressin@demo.net
          </a>{' '}
          and our team will upload your art for you so people can enjoy your
          masterpieces.
        </p>
      </div>

      {/* Line Art on the Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

          {/* Dynamic Wave Shapes */}
          <svg
            className="absolute top-10 left-20 w-64 h-64 text-indigo-500 opacity-50 animate-pulse"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M43.2,-75.7C56.5,-66.3,66.5,-56.5,72.3,-44.9C78.1,-33.2,79.7,-19.7,80.6,-6.3C81.4,7.1,81.6,20.4,76.7,32.6C71.8,44.8,61.8,55.9,49.7,63.9C37.6,72,23.4,76.9,8.7,77.9C-6,78.9,-20.1,76.1,-30.3,68.4C-40.5,60.7,-46.9,48.1,-56,36.6C-65.1,25.2,-76.8,14.9,-78.3,3.3C-79.9,-8.4,-71.2,-21.2,-65.5,-34.7C-59.8,-48.2,-57.1,-62.3,-47.6,-72C-38,-81.7,-21.7,-86.8,-7.1,-81.6C7.6,-76.4,15.2,-60.9,43.2,-75.7Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Smaller Animated Circles */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full ${
                i % 2 === 0 ? 'animate-float' : 'animate-spin-slow'
              }`}
              style={{
                width: `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
                top: `${10 + i * 60}px`,
                left: `${i * 50}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;