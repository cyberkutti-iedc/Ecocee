import React from 'react';
import { X } from 'lucide-react'; // optional: use any icon lib you prefer

type ModalProps = {
  show: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const InternModal: React.FC<ModalProps> = ({ show, onClose, title, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-opacity">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {title && (
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">{title}</h2>
        )}

        <div className="text-gray-700 text-center space-y-2">
          {children}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            Close
          </button>
        </div>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default InternModal;
