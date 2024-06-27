"use client";

import { useState } from 'react';

export default function Search({onSearch}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const searchSubmit = () => {
    onSearch(inputValue);
  }

  const resetList = () => {
    setInputValue('');
    onSearch('');
    document.getElementById('inputText').value = '';
  }

  const handleKeyDown = (event) => {
    if(event.nativeEvent.isComposing || event.key !== 'Enter') return
    searchSubmit();
  }

  return (
    <div className='md:flex'>
      <input className='py-2 mr-4 px-4 border-solid border rounded-md border- border-black w-full md:w-[200px]' id="inputText" type="text" onKeyDown={handleKeyDown} onChange={handleChange}/>
      <div className='mt-4 flex md:mt-0 md:block'>
        <button className="w-1/2 md:w-auto bg-blue-500 text-white px-4 py-2 rounded-md md:hover:opacity-70" id="searchButton" type="button" onClick={searchSubmit}>検索</button>
        <button className="w-1/2 md:w-auto bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2 md:hover:opacity-70" id="clearButton" type="button" onClick={resetList}>クリア</button>
      </div>
    </div>
  )
}