import React from 'react';

function App() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://scontent.ftir1-2.fna.fbcdn.net/v/t39.30808-6/348423680_203289359200691_944283017405877416_n.png?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=gRxBemeiLYsAX-sl1Of&_nc_ht=scontent.ftir1-2.fna&oh=00_AfDDyGFCYlirSvkOmiR5c5HLKXoHHk3dqbwoHlNXCNC3RA&oe=65045702"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1 content-center">Sign in to portal</label>
        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
      </div>
    </section>
  );
}

export default App;