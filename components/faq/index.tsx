import { Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';

export const Faq = () => {
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
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                     width: '100%',
                     display: 'block' 
                  }}
               >
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
               {[...Array(4)].map((_, index) => (
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
                        h3
                        css={{
                           textAlign: 'center', 
                           width: '100%' 
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                           textAlign: 'center',
                           width: '100%',
                           display: 'block'
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl aliquet aliquet.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                           textAlign: 'center',
                           width: '100%',
                           display: 'block'
                        }}
                     >
                        Elit. Sed condimentum, nisl ut aliquam lacinia, nisl nisl aliquet aliquet.
                     </Text>
                  </Flex>
               ))}
            </Flex>
         </Flex>

         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
         />
      </>
   );
};






