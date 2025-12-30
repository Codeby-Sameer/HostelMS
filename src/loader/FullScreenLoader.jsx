export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-gray-50 flex overflow-hidden">
      {/* Sidebar Skeleton */}
      <div className="hidden lg:flex w-72 flex-col bg-white border-r border-gray-200 p-4 space-y-4">
        <div className="h-8 w-32 bg-gray-300 rounded animate-pulse mb-6" />

        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-full bg-gray-200 rounded animate-pulse"
          />
        ))}
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header Skeleton */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <div className="h-5 w-40 bg-gray-300 rounded animate-pulse mb-2" />
            <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gray-300 rounded-xl animate-pulse" />
            <div className="hidden sm:block">
              <div className="h-4 w-24 bg-gray-300 rounded animate-pulse mb-1" />
              <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 shadow"
              >
                <div className="h-4 w-24 bg-gray-300 rounded animate-pulse mb-3" />
                <div className="h-8 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>

          {/* Table / Chart Block */}
          <div className="bg-white rounded-xl shadow p-4">
            <div className="h-5 w-48 bg-gray-300 rounded animate-pulse mb-6" />

            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-1/6 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Skeleton */}
        <div className="bg-white border-t border-gray-200 px-6 py-3">
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mx-auto" />
        </div>
      </div>
    </div>
  );
}
