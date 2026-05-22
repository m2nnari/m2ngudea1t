// RESTORE INSTRUCTIONS:
// Copy this file's content back to pages/index.tsx to restore the full website.
// All components are still intact in the /components folder.

import type { NextPage } from 'next';
import Head from 'next/head';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Hero } from '../components/hero';
import { Box } from '../components/styles/box';
import { Features1 } from '../components/features1';
import { Features3 } from '../components/features3';
import { Plans } from '../components/plans';
import { Gallery } from '../components/gallery';
import { Faq } from '../components/faq';
import { Maps } from '../components/maps';
import { Footer } from '../components/footer';

const Home: NextPage = () => {
   return (
      <Layout>
         <Head>
            <title>M.AIT - Mängude Ait</title>
         </Head>
         <Nav />
         <Box as="main">
            <Hero />
            <Features1 />
            <Features3 />
            <Plans />
            <Gallery />
            <Faq />
            <Maps />
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
