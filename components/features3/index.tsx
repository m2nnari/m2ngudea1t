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
            järgida ning kindlasti tutvustada ka enda külalistele! <br />
            Heakorra reeglite põhimõte on, et oleks tore endal ja jätkuks rõõmu ka teistele.
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
                  ruumi rentida kokkulepitud sündmuseks ning kasutada inventaari ja sisustust heaperemehelikult.
                  Kohapeal saate korraldada just endale sobiva meelelahutuse ning tuua kaasa soovitud söögid ja joogid.
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
                  kui jälgid kella ja peo lõpus on ruum samas konditsioonis või paremas kui enne. <br />
                  Oleme viisakad inimesed ning järgime heaperemehelikkuse põhimõtteid.
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
                    ruumi vara lõhkuda või kaasa võtta, suitsetamine (k.a e-sigaret), narkootiliste ainete tarbimine. <br />
                    Ohtlike olukordade vältimiseks on turnimine, ronimine ja hüppamine lubatud vaid nendeks ettenähtud atraktsioonidel.
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
                  Ürituse korraldaja vastutab laste ja alaealiste järelvalve eest kogu ruumi kasutamise aja jooksul. <br />
                  Kõigi heaolu ja puhtuse tagamiseks palume ruumis viibida vaid sokkides või sussides.
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

