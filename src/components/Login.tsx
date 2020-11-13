import React from 'react';

export default function Login() {
  return (
    <div className="w-96 mx-auto">
      <div className="space-y-5">
        <label className="block">
          <div className="font-semibold">Email</div>
          <input id="email" className="border border-gray-300" name="username" placeholder="Email address" />
        </label>
        <label className="block">
          <div className="font-semibold">Password</div>
          <input id="email" className="border border-gray-300" name="username" placeholder="Email address" />
        </label>
      </div>
    </div>
  );
}
