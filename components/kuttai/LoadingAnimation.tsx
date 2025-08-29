export default function LoadingAnimation() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-green-500 rounded-full animate-ping"></div>
          </div>
        </div>
        <p className="mt-6 text-green-500 text-xl font-semibold">Loading Kuttai...</p>
      </div>
    </div>
  );
}