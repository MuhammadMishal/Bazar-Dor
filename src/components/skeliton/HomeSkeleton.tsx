export default function HomeSkeleton() {
  return (
    <div className="w-full space-y-6 animate-pulse">
      <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 w-full md:w-3/5">
          <div className="w-32 h-4 bg-gray-200 rounded"></div>
          <div className="w-4/5 h-8 sm:h-10 bg-gray-200 rounded-xl"></div>
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
          <div className="w-32 h-10 bg-gray-200 rounded-xl mt-2"></div>
        </div>
        <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gray-200 rounded-full shrink-0"></div>
      </div>
      {[...Array(3)].map((_, secIndex) => (
        <div key={secIndex} className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            <div className="w-36 h-6 bg-gray-200 rounded"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, cardIndex) => (
              <div
                key={cardIndex}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0"></div>
                  <div className="space-y-2 flex-1">
                    <div className="w-24 h-4 bg-gray-200 rounded"></div>
                    <div className="w-12 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-5 bg-gray-200 rounded"></div>
                    <div className="w-14 h-6 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
