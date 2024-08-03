'use client'
import { useState } from 'react';

const CodeForm = () => {
  const [title, setTitle] = useState('');
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [jsx, setJsx] = useState('');
  const [tailwind, setTailwind] = useState('');
  const [framer, setFramer] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const res = await fetch('/api/snippets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, html, css, js, jsx, tailwind, framer })
    });
    if (res.ok) {
      alert('Snippet created successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={html} onChange={(e) => setHtml(e.target.value)} placeholder="HTML"></textarea>
      <textarea value={css} onChange={(e) => setCss(e.target.value)} placeholder="CSS"></textarea>
      <textarea value={js} onChange={(e) => setJs(e.target.value)} placeholder="JavaScript"></textarea>
      <textarea value={jsx} onChange={(e) => setJsx(e.target.value)} placeholder="JSX"></textarea>
      <textarea value={tailwind} onChange={(e) => setTailwind(e.target.value)} placeholder="Tailwind CSS"></textarea>
      <textarea value={framer} onChange={(e) => setFramer(e.target.value)} placeholder="Framer Motion"></textarea>
      <button type="submit">Create Snippet</button>
    </form>
  );
};

export default CodeForm;
