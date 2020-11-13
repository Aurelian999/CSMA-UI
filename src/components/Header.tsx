import React from 'react';

export default function Header(): JSX.Element {
  return (
    <div className="px-6 py-12 bg-gray-800 text-white flex justify-between">
      <div className="flex items-center">
        <div className="font-bold text-lg">CSMA</div>
        <div className="mx-4 w-0 h-6 border-r border-white" />
        <div className="space-x-10 flex items-center ml-4">
          <a className="font-bold text-lg hover:underline" href="/">Acasa</a>
          <a className="font-bold text-lg hover:underline" href="/contact">Contact</a>
          <a className="font-bold text-lg hover:underline" href="/servicii">Servicii si preturi</a>
          <a className="font-bold text-lg hover:underline" href="/oferte">Oferte</a>
        </div>
      </div>
      <a className="font-bold text-lg" href="/login">Login</a>
    </div>
  );
}
