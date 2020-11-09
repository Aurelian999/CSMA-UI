import React from 'react';

export default function Header(): JSX.Element {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <div className="space-x-5 flex">
        <div className="font-bold text-lg">
          CSMA
        </div>
        <a href="/servicii">Servicii</a>
      </div>
    </div>
  );
}
