import { Divider, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Maps = () => {
  return (
    <>
      <Box
        id="location"
        css={{
          px: "$6",
          pb: "$14",
          scrollMarginTop: "80px",
        }}
      >
        <Flex direction="column" justify="center" align="center" css={{ pt: "$15" }}>
          <Text h2>Asukoht</Text>

          {/* Google Map */}
          <Box
            css={{
              width: "100%",
              maxWidth: "600px",
              height: "300px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              mt: "$8",
            }}
          >
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.928374264474!2d26.316506076360734!3d58.32240330131532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692e18010e9b0a1%3A0x4aebcf10f6c0e4b!2sViljandi%20tee%2011%2C%20Puhja%2C%2061232%20Tartu%20maakond%2C%20Estonia!5e0!3m2!1sen!2s!4v1710769898765"
            />
          </Box>

          {/* Email – very close under map */}
          <Flex justify="center" css={{ mt: "$10" }}>
            <Text css={{ color: "$accents8", textAlign: "center" }}>
              <b>E-mail: lumilind24@gmail.com</b>
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", left: "0", mt: "$5", opacity: "0.5" }}
      />
    </>
  );
};




