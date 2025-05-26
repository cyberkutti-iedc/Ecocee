'use client';

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 text-center">
      <DotLottieReact
        src="https://lottie.host/483bcbc1-7fa7-4624-b335-40417b66cbf7/AgRNV9mbJn.lottie"
        autoplay
        loop
        style={{ width: 300, height: 300 }}
      />

      <h1 className="text-5xl font-extrabold text-blue-700 mt-4">404 - Page Not Found</h1>

      <p className="mt-2 text-gray-600 text-lg max-w-xl">
        Our Ecocee cartoon engineer tried fixing something… and got zapped!
      </p>

      <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-xl mt-4 max-w-md">
        <p className="text-yellow-800 italic">
          “What do we do now?” – wonders our techie.
        </p>
      </div>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Back to Ecocee Home
      </Link>
    </div>
  );
}
