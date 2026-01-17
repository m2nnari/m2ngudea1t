import { Divider, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { Typewriter } from "react-simple-typewriter";


type AirtableRecord = {
  id: string;
  fields: {
    Image?: { url: string }[];
    Order?: number;
  };
};

type HeroImage = {
  id: string;
  url: string;
  order: number;
};


const API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN!;
const BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_HERO_BASE_ID!;
const TABLE_NAME = process.env.NEXT_PUBLIC_AIRTABLE_HERO_TABLE!;


export const Hero = () => {
  const [images, setImages] = useState<HeroImage[]>([]);
  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const res = await fetch(
          `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(
            TABLE_NAME
          )}`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );

        if (!res.ok) throw new Error(`Airtable error ${res.status}`);

        const data = await res.json();

        const sortedImages: HeroImage[] = (data.records as AirtableRecord[])
          .map((record) => ({
            id: record.id,
            url: record.fields.Image?.[0]?.url ?? "",
            order: record.fields.Order ?? 999,
          }))
          .filter((img) => img.url)
          .sort((a, b) => a.order - b.order);

        setImages(sortedImages);
      } catch (err) {
        console.error("Failed to load hero images", err);
      }
    };

    fetchHeroImages();
  }, []);

  /* slideshow */
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <Flex
        css={{
          height: "100vh",
          width: "100vw",
          gap: "$8",
          px: "$6",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          paddingBottom: "$20",
          "@sm": {
            flexDirection: "row",
            textAlign: "left",
            justifyContent: "center",
            alignItems: "center",
            gap: "$20",
            padding: "$12",
            transform: "translateY(-110px)",
          },
        }}
      >
       
        <Box
          css={{
            maxWidth: "550px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "@sm": {
              textAlign: "center",
            },
          }}
        >
          <Text h1 css={{ display: "inline", mt: "-$1" }}>
            Korralda meeldejääv
          </Text>

          <Text h1 css={{ display: "inline", mt: "-$3" }} color="#003049">
            <Typewriter
              words={["Sünnipäev", "Klassiõhtu", "Koosviibimine"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </Text>
        </Box>

        
        <Box
          css={{
            position: "relative",
            width: "100%",
            maxWidth: "700px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            "@sm": {
              paddingLeft: "$10",
              width: "80%",
            },
          }}
        >
          {images.map((img, index) => (
            <img
              key={img.id}
              src={img.url}
              alt="Hero"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "opacity 1.5s ease-in-out",
                opacity: currentImage === index ? 1 : 0,
                borderRadius: "12px",
              }}
            />
          ))}
        </Box>
      </Flex>

      
      <Box
        css={{
          display: "none",
          position: "absolute",
          top: "790px",
          left: "50%",
          transform: "translateX(-50%)",
          "@sm": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="white"
          viewBox="0 0 256 256"
        >
          <path d="M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,164a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44V80a44.05,44.05,0,0,1,44-44h32a44.05,44.05,0,0,1,44,44ZM140,64v48a12,12,0,0,1-24,0V64a12,12,0,0,1,24,0Z" />
        </svg>
      </Box>

      <Divider css={{ position: "absolute", left: "0", mt: "$5", opacity: "0.3" }} />
    </>
  );
};
