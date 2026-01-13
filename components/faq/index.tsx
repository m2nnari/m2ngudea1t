import { Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';
import { Facebook, Instagram } from 'lucide-react';

export const Faq = () => {
   const faqs = [
      {
         question: 'Kui palju mahub peoruumi inimesi?',
         answer: ['Peoruum mahutab lahedalt kuni 30 inimest.']
      },
      {
         question: 'Kas olemas on vajalikud sööginõud?',
         answer: [
            'Jah, olemas on serveerimiseks ning ka söömiseks vajalikud korduvkasutatavad nõud ja söögiriistad.',
            'Peoruumi rentimise ajal on võimalik kasutada kööki ning selle inventari (nõudepesumasin, mikrolaineahi, pliit).'
         ]
      },
      {
         question: 'Kas on olemas ka kohvimasin? Kas pean kaasa võtma oma kohvi?',
         answer: [
            'Teil on võimalus kasutada kogu ürituse vältel kohvimasinat, mis valmistab värsketest kohviubadest erinevaid kohvijooke',
            'kõigest ühe nupuvajutusega - latte, cappuccino, piimakohv, must kohv, espresso. Kaasa palun võtta endale meelepärane piim (piimajook).'
         ]
      },
      {
         question: 'Kas pean ise koristama või saan selle teenusena juurde osta?',
         answer: ['Lisatasu (20 €) eest on võimalik tellida koristusteenus mängutoa poolt.']
      },
      {
         question: 'Milliseid lisateenuseid veel pakute?',
         answer: [
            'Täidetud snäkisein peole - 50€ (popkorn, krõpsud, küpsised, kastmed, erinevad kommid).'
         ]
      },
      {
         question: 'Kus on võimalik leida lisainfot M.AIT peoruumi kohta?',
         answer: ['Lisainfot meie peoruumi kohta leiab Facebookist M.AIT ning Instagramist @mangudeait.']
      },
      {
         question: 'Kas pakute ka toitlustust?',
         answer: ['Meie toitlustust ei paku, kuid soovi korral aitame leida lahenduse.']
      },
      
   ];

   return (
      <>
         <Flex id="faq" css={{ py: '$20', gap: '$18', px: '$6' }} direction={'column'}>
            <Flex direction={'column'} css={{ alignItems: 'center', textAlign: 'center', width: '100%' }}>
               <Text h2 css={{ '@sm': { textAlign: 'center', width: '100%' } }}>Korduma kippuvad küsimused</Text>
            </Flex>
            <Flex css={{ gap: '$10', '@lg': { px: '$64' } }} direction={'column'}>
               {faqs.map((faq, index) => (
                  <Flex key={index} direction="column" css={{ gap: '$5', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                     <Text h4 css={{ textAlign: 'center', width: '100%' }}>{faq.question}</Text>
                     {faq.answer.map((line, i) => (
                        <Text key={i} span css={{ color: '$accents8', textAlign: 'center', width: '100%', display: 'block' }}>{line}</Text>
                     ))}
                  </Flex>
               ))}
            </Flex>
            {/* Social Icons */}
            <Flex css={{ gap: '$6', justifyContent: 'center', mt: '$10' }}>
               <a href="https://www.facebook.com/profile.php?id=61572659780040" target="_blank" rel="noopener noreferrer">
                  <Facebook size={32} color="white" />
               </a>
               <a href="https://www.instagram.com/mangudeait" target="_blank" rel="noopener noreferrer">
                  <Instagram size={32} color="white" />
               </a>
            </Flex>
         </Flex>
         <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$ 0', opacity: "0.3" }} />
      </>
   );
};









