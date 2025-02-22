import { Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Features3 = () => {
  return (
    <>
      <Box
        id="rules"
        css={{
          px: "$6",
          pb: "$14",
          scrollMarginTop: "80px", // Prevent hiding under navbar
        }}
      >
        <Flex direction="column" justify="center" align="center" css={{ pt: "$20" }}>
          <Text h2>Kodukord</Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
            Ülevaade esmaolulistest heakorra punktidest meie ruumis, mida palume sündmuse korraldamisel
            järgida ning kindlasti tutvustada ka enda külalistele! Heakorra reeglite põhimõte on, et oleks
            tore endal ja jätkuks rõõmu ka teistele.
          </Text>
        </Flex>

        <Flex
          align="center"
          justify="center"
          wrap="wrap"
          css={{
            gap: "1rem",
            pt: "$14",
          }}
        >
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <CheckIcon />
                <Flex direction="column">
                  <Text h4>Lubatud on</Text>
                  <Text span>
                    ruumi rentida kokkulepitud sündmuseks ning ruumi inventari ja sisustust kasutada
                    heaperemehelikult. Kohapeale võite korraldada just endale meelepärase meelelahutuse ja
                    söögid-joogid.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <CheckIcon />
                <Flex direction="column">
                  <Text h4>Suhtume hästi, kui</Text>
                  <Text span>
                    jälgid kella ja peo lõpus enda järel koristad nii, et ruum on kasutusvalmis ka järgmistele
                    külalistele, st: paned kasutatud nõud masinasse, pesed vaagnad ja muud kasutatud
                    serveerimisalused.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>

        <Flex
          align="center"
          wrap="wrap"
          justify="center"
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <CheckIcon />
                <Flex direction="column">
                  <Text h4>Keelatud on</Text>
                  <Text span>
                    ruumi vara lõhkuda või endaga kaasa võtta. Väldime ohtlike olukordi - turnimine, ronimine,
                    hüppamine on lubatud ainult selleks ettenähtud atraktsioonidel.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <CheckIcon />
                <Flex direction="column">
                  <Text h4>Vastutus</Text>
                  <Text span>
                    Lapsed ja alaealised viibivad ruumis täiskasvanud ürituse korraldaja järelvalvel. Ühise
                    heaolu nimel võib ruumis viibida vaid sokkides või sussides.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5", opacity: "0.5" }}
      />
    </>
  );
};

