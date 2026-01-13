import { Divider, Text } from "@nextui-org/react";
import React from "react";
import { ConsoleIcon } from "../icons/ConsoleIcon";
import { VRIcon } from "../icons/VRIcon";
import { CarTrackIcon } from "../icons/CarTrackIcon";
import { BallPitIcon } from "../icons/BallPitIcon";
import { PhotoIcon } from "../icons/PhotoIcon";
import { InteractiveGamesIcon } from "../icons/InteractiveGamesIcon";
import { Flex } from "../styles/flex";

export const Features1 = () => {
  const features = [
    { name: "Playstation 5", icon: <ConsoleIcon /> },
    { name: "Virtuaalreaalsus", icon: <VRIcon /> },
    { name: "RC autorada", icon: <CarTrackIcon /> },
    { name: "Fotonurk", icon: <PhotoIcon /> },
    { name: "Interaktiivsed mängud", icon: <InteractiveGamesIcon /> },
  ];

  return (
    <>
      <Flex
        id="features1"
        direction="column"
        css={{
          scrollMarginTop: "80px", // Prevent content from hiding under navbar
          gap: "1rem",
          pt: "$20",
          justifyContent: "center",
          alignItems: "center",
          px: "$4",
          "@sm": { px: "$16" },
        }}
      >
        <Text h2 css={{ textAlign: "center" }}>
          Meie juurest leiad:
        </Text>

        <Flex
          css={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // Mobile: 2x3
            gap: "16px",
            width: "100%",
            maxWidth: "1000px",
            textAlign: "center",
            justifyContent: "center",
            "@md": { gridTemplateColumns: "repeat(5, 1fr)" }, // Desktop: 3x2
          }}
        >
          {features.map((feature, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              css={{
                gap: "12px",
                padding: "20px",
                justifyContent: "center",
              }}
            >
              {feature.icon}
              <Text span>{feature.name}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Divider
        css={{
          position: "absolute",
          inset: "0p",
          left: "0",
          mt: "$5",
          opacity: "0.5",
        }}
      />
    </>
  );
};







