import { AppProps } from 'next/app';
import Header from '../components/Header';
import '../styles/globals.css'; 


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-[#F5F6F8]">
      <Header />
      <main className="p-6">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

