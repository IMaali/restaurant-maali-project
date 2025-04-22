// src/pages/_app.tsx
import { AppProps } from 'next/app';
import Header from '../components/Header';
import '../styles/globals.css';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [category, setCategory] = useState("Drinks");
  
  return (
    <div className="min-h-screen bg-[#F5F6F8]">
      <Header category={category} setCategory={setCategory} />
      <main>
        <Component {...pageProps} category={category} setCategory={setCategory} />
      </main>
    </div>
  );
}
