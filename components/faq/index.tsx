import { Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';

export const Faq = () => {

   const faqs = [
      {
         question: 'Kui palju mahub peoruumi inimesi?',
         answer: [
            'Peoruum mahutab lahedalt kuni 30 inimest.'
         ]
      },
      {
         question: 'Kas olemas on vajalikud sööginõud?',
         answer: [
            'Jah, olemas on serveerimiseks ning ka söömiseks vajalikudnõud ja söögiriistad.'
         ]
      },
      {
         question: 'Kas on olemas ka kohvimasin? Kas pean kaasa võtma oma kohvi?',
         answer: [
            'Teil on võimalus kasutada kogu ürituse vältel kohvimasinat, mis valmistab värsketest kohviubadest erinevaid kohvisid ja kohvijooke kõigest ühe nupuvajutusega -',
            'latte, cappuccino, piimakohv, must kohv, espresso. Kaasa palun võtta endale meelepärane piim (piimajook).'
         ]
      },
      {
         question: 'Kas pean ise koristama või saan selle teenusena juurde osta?',
         answer: [
            'Lisatasu (20 €) eest on võimalik tellida koristusteenus mängutoa poolt.'
         ]
      },
      {
         question: 'Milliseid lisateenuseid veel pakute?',
         answer: [
            'Võimalik on rentida pallipalee enda isiklikule üritusele või lisavõimalusena M.AIT peoruumi. Rent isiklikule üritusele 24h- 100€, üritusele 50€ (lisaks juurde võimalik soetada õhupalle).',
            'Täidetud snäkisein peole - 50€ (popkorn, krõpsud, küpsised, kastmed, erinevad kommid).'
         ]
      },
      {
         question: 'Kus on võimalik leida lisainfot M.AIT peoruumi kohta?',
         answer: [
            'Lisainfot meie peoruumi kohta leiab Facebookist M.AIT ning Instagramist @mangudeait.',
            'Täidetud snäkisein peole - 50€ (popkorn, krõpsud, küpsised, kastmed, erinevad kommid).'
         ]
      },
      {
         question: 'Kas pakute ka toitlustust?',
         answer: [
            'Meie toitlustust ei paku, kuid teeme koostööd Käsu Hans restoga, mis aitab katta teie peolaua vastavalt teie soovidele.'
         ]
      }
   ];

   return (
      <>
         <Flex
            id="faq"
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            {/* Header Section */}
            <Flex 
               direction={'column'}
               css={{
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '100%'
               }}
            >
               <Text 
                  h2 
                  css={{
                     '@sm': { textAlign: 'center', width: '100%' }
                  }}
               >
                  Korduma kippuvad küsimused
               </Text>
            </Flex>

            {/* FAQ Items */}
            <Flex
               css={{
                  gap: '$10',
                  '@lg': { px: '$64' },
               }}
               direction={'column'}
            >
               {faqs.map((faq, index) => (
                  <Flex 
                     key={index}
                     direction="column"
                     css={{ 
                        gap: '$5', 
                        alignItems: 'center', 
                        textAlign: 'center',
                        width: '100%'
                     }} 
                  >
                     <Text 
                        h4
                        css={{
                           textAlign: 'center', 
                           width: '100%' 
                        }}
                     >
                        {faq.question}
                     </Text>
                     {faq.answer.map((line, i) => (
                        <Text
                           key={i}
                           span
                           css={{
                              color: '$accents8',
                              textAlign: 'center',
                              width: '100%',
                              display: 'block'
                           }}
                        >
                           {line}
                        </Text>
                     ))}
                  </Flex>
               ))}
            </Flex>
         </Flex>

         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5', opacity: "0.3" }}
         />
      </>
   );
};








