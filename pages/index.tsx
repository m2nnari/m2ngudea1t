import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';
import Logo from '../components/navbar/logo.png';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mängude Ait</title>
      </Head>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#000000',
        gap: '1.5rem',
        padding: '2rem',
      }}>
        <Image
          src={Logo}
          alt="Mängude Ait"
          width={120}
          height={42}
          priority
          style={{ objectFit: 'contain' }}
        />
        <p style={{
          color: 'white',
          fontSize: 'clamp(1.7rem, 4vw, 2.8rem)',
          fontFamily: '"Outfit", serif',
          fontWeight: 700,
          margin: 0,
          textAlign: 'center',
          letterSpacing: '0.01em',
        }}>
          Mängude Ait on hetkel puhkusel.
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', marginTop: '0.5rem' }}>
          <a
            href="https://www.facebook.com/profile.php?id=61572659780040"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', opacity: 0.85, transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
          >
            <Facebook size={28} />
          </a>
          <a
            href="https://www.instagram.com/mangudeait"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', opacity: 0.85, transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
          >
            <Instagram size={28} />
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
