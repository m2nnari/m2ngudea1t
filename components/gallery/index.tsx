import { Card, Divider, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Flex } from "../styles/flex";

/* =====================
   Types
===================== */
type AirtableRecord = {
  id: string;
  fields: {
    Image?: { url: string }[];
    Order?: number;
  };
};

type GalleryImage = {
  id: string;
  url: string;
  order: number;
};

/* =====================
   Airtable config
===================== */
const API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN!;
const BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID!;
const TABLE_NAME = process.env.NEXT_PUBLIC_AIRTABLE_GALLERY_TABLE!;

/* =====================
   Component
===================== */
export const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
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

        const data = await res.json();

        const sortedImages: GalleryImage[] = (data.records as AirtableRecord[])
          .map((record) => ({
            id: record.id,
            url: record.fields.Image?.[0]?.url ?? "",
            order: record.fields.Order ?? 999,
          }))
          .filter((img) => img.url)
          .sort((a, b) => a.order - b.order);

        setImages(sortedImages);
      } catch (error) {
        console.error("Failed to load gallery images", error);
      }
    };

    fetchImages();
  }, []);

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
          }}
        >
          {images.map(({ id, url }) => (
            <Card
              key={id}
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
                  backgroundImage: `url(${url})`,
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
