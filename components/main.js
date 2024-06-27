"use client";

import { useState } from 'react';
import Search from '/components/search';
import List from '/components/list';

export default function Main({ postData }) {
  const [text, setText] = useState('');
  const handleChange = (newValue) => {
    setText(newValue);
  }

  const filteredData = postData.filter(item => item.caption.includes(text));
  
  return (
    <div>
      <Search onSearch={handleChange}/>
      <List postData={filteredData}/>
    </div>
  );
}