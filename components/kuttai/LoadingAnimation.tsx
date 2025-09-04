export default function LoadingAnimation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden font-mono">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        {/* Floating binary code */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/30 text-xs animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center relative z-10 w-80">
        {/* Terminal header */}
        <div className="w-full bg-gray-800 rounded-t-lg flex items-center px-4 py-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center text-gray-300 text-sm">terminal@kuttai:~</div>
        </div>
        
        {/* Terminal body */}
        <div className="w-full bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-b-lg p-4 shadow-xl">
          {/* Command line text */}
          <div className="text-green-400 mb-4 flex items-start">
            <span className="text-yellow-400 mr-2">$</span>
            <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-green-500 pr-1">loading system modules</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
            <div className="bg-gradient-to-r from-green-400 to-teal-500 h-2 rounded-full animate-pulse-width"></div>
          </div>
          
          {/* Spinner section */}
          <div className="flex items-center justify-center py-4">
            <div className="relative w-16 h-16">
              {/* Outer circle */}
              <div className="absolute inset-0 border-2 border-green-500/30 rounded-full animate-pulse"></div>
              
              {/* Rotating circle */}
              <div className="absolute inset-0 border-2 border-transparent rounded-full border-t-green-500 animate-spin-slow"></div>
              
              {/* Inner circles */}
              <div className="absolute inset-3 border-2 border-green-500/50 rounded-full animate-ping-slow"></div>
              
              {/* Center dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Status text */}
          <div className="text-gray-400 text-sm text-center mt-2">
            <span className="inline-block animate-bounce">[</span>
            <span className="text-green-500 mx-1">●</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>]</span>
            <span className="ml-2">Initializing system</span>
          </div>
        </div>
        
        {/* Footer text */}
        <p className="text-gray-500 text-xs mt-6 text-center animate-pulse">
          Kuttai OS v2.1.4 • © 2023 Terminal Systems
        </p>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes pulse-width {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-float {
          animation: float 5s infinite ease-in-out;
        }
        .animate-typing {
          animation: typing 3.5s steps(40, end) infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s infinite linear;
        }
        .animate-ping-slow {
          animation: ping-slow 2s infinite cubic-bezier(0, 0, 0.2, 1);
        }
        .animate-pulse-width {
          animation: pulse-width 2s infinite alternate;
        }
      `}</style>
    </div>
  );
}