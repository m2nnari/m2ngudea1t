import React from 'react';
import { Box } from '../styles/box';
import { Svg } from '../styles/svg';

export const CheckIcon = () => {
   return (
      <Box
         css={{
            width: 'auto',
            height: 'fit-content',
         }}
      >
         <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
            fill="currentColor"
         >
            <path
               d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"
               style={{ fill: 'var(--accents9)' }} // Replace with your theme variable if needed
            />
         </Svg>
      </Box>
   );
};
