import { Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
];

export const Gallery = () => {
  return (
    <>
      <Flex
        id="gallery"
        css={{
          py: "$20",
          gap: "1rem",
          px: "$6",
          scrollMarginTop: "80px", // Prevents being hidden under a navbar
        }}
        justify="center"
        direction="column"
        align="center"
      >
        <Text h2>Galerii</Text>

        {/* Responsive Grid */}
        <Flex
          css={{
            display: "grid",
            gridTemplateColumns: "1fr", // Default: 1 column (mobile)
            gap: "1rem",
            maxWidth: "1000px",
            width: "100%",
            "@sm": {
              gridTemplateColumns: "repeat(2, 1fr)", // 2 columns on small screens
            },
            "@md": {
              gridTemplateColumns: "repeat(3, 1fr)", // 3 columns on medium screens
            },
            "@lg": {
              gridTemplateColumns: "repeat(3, 1fr)", // Keeps 3 columns on larger screens
            },
          }}
        >
          {images.map((src, index) => (
            <Card
              key={index}
              isPressable
              isHoverable
              css={{
                width: "100%",
                height: "250px",
                overflow: "hidden",
                borderRadius: "$lg",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" }, // Subtle zoom effect
              }}
            >
              <Card.Body
                css={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                }}
              />
            </Card>
          ))}
        </Flex>
      </Flex>

      <Divider
        css={{
          position: "absolute",
          left: "0",
          mt: "$5",
          opacity: "0.3",
        }}
      />
    </>
  );
};




