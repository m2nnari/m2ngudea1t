import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
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
        backgroundColor: '#003049',
        gap: '2rem',
        padding: '2rem',
      }}>
        <Image
          src={Logo}
          alt="Mängude Ait"
          width={200}
          height={70}
          priority
          style={{ objectFit: 'contain' }}
        />
        <p style={{
          color: 'white',
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          fontFamily: '"Outfit", serif',
          fontWeight: 400,
          margin: 0,
          textAlign: 'center',
          letterSpacing: '0.01em',
        }}>
          Mängude Ait on hetkel puhkusel.
        </p>
      </main>
    </>
  );
};

export default Home;
