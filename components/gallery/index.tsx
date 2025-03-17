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
  "/image77.jpg",
  "/image8.jpg",
  "/image9.jpg",
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
          scrollMarginTop: "80px",
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
            gridTemplateColumns: "1fr", 
            gap: "1rem",
            maxWidth: "1000px",
            width: "100%",
            "@sm": {
              gridTemplateColumns: "repeat(2, 1fr)", 
            },
            "@md": {
              gridTemplateColumns: "repeat(3, 1fr)", 
            },
            "@lg": {
              gridTemplateColumns: "repeat(3, 1fr)", 
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
                "&:hover": { transform: "scale(1.05)" }, 
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




