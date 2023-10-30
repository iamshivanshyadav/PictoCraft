import React from 'react';
import { UilGithubAlt } from '@iconscout/react-unicons';
import { UilLinkedinAlt } from '@iconscout/react-unicons';
import { UilTwitterAlt } from '@iconscout/react-unicons';
import { UilBagAlt } from '@iconscout/react-unicons';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-[#ed9d48] sm:px-8 px-4 py-4 border-b border-b-[#f3aa5c]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#8f8ff5] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <footer className="py-4 bg-[#3a1653]">
        <h2 className="text-center text-xl font-bold text-gray-400 mb-2">Contact Me</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/iamshivanshyadav" target="_blank" rel="noopener noreferrer">
            <UilGithubAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://www.linkedin.com/in/shivanshyadav27/" target="_blank" rel="noopener noreferrer">
            <UilLinkedinAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://twitter.com/shivaayshivansh" target="_blank" rel="noopener noreferrer">
            <UilTwitterAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://shivaay-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            <UilBagAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
        </div>
        <p className="text-center mt-2 text-sm text-gray-400">
          Developed by Shivansh Yadav
        </p>
      </footer>
  </BrowserRouter>
  
);

export default App;
