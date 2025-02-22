import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$10',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{width: '100%'}}>
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Flex
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'center',
                     },
                  }}
               >
                  <Flex
                     >
                     <Text span css={{color: '$accents8'}}>
                        made by m2. all rights reserved
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};

