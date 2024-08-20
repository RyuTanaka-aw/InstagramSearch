"use client";

import { useState } from 'react';
import Search from '/components/search';
import List from '/components/list';

export default function Main({ postData }) {
  const [text, setText] = useState('');
  const handleChange = (newValue) => {
    setText(newValue);
  }

  const hashtags = text.split(/[\s\u3000]+/).map(tag => tag.trim());
  const filteredData = postData.filter(item => 
    item.caption && hashtags.every(tag => item.caption.includes(`${tag}`)));
  
  return (
    <div>
      <Search onSearch={handleChange}/>
      <List postData={filteredData}/>
    </div>
  );
}