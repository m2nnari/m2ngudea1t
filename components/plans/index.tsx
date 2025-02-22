import { Button, Card, Divider, Grid, Text, Modal } from "@nextui-org/react";
import React, { useState } from "react";
import { Flex } from "../styles/flex";

export const Plans = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Flex
        id="pricing"
        css={{
          paddingY: "$20", // Use 'paddingY' instead of 'py'
          gap: "1rem",
          paddingX: "$6", // Use 'paddingX' instead of 'px'
          scrollMarginTop: "80px",
        }}
        justify="center"
        wrap="wrap"
        direction="column"
        align="center"
      >
        <Flex direction="column" align="center">
          <Text h2>Hinnakiri</Text>
        </Flex>

        <Flex css={{ gap: "1rem", width: "100%" }} wrap="wrap" justify="center">
          {/* Esmaspäev - Neljapäev */}
          <Card css={{ padding: "$6", maxWidth: "400px", minHeight: "350px" }}>
            <Card.Header>
              <Grid.Container css={{ paddingLeft: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Esmaspäev - Neljapäev
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Rendihind tööpäevadel – ideaalne väiksemate sündmuste jaoks.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>

            <Card.Body css={{ paddingY: "$7", paddingX: "$10" }}>
              <Flex css={{ alignItems: "center", gap: "0.5rem" }}>
                <Text h2>125 €</Text>
                <Text css={{ color: "$accents8", fontSize: "$lg" }}>/ 3 h</Text>
              </Flex>
            </Card.Body>
            <Button css={{ marginBottom: "$5" }} onClick={() => setModalOpen(true)}>Broneeri</Button>
          </Card>

          {/* Reede - Pühapäev */}
          <Card css={{ padding: "$6", maxWidth: "400px", minHeight: "350px" }}>
            <Card.Header>
              <Grid.Container css={{ paddingLeft: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Reede - Pühapäev
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Nädalavahetuse hinnakiri – ideaalne suuremate koosviibimiste ja pidude jaoks.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>

            <Card.Body css={{ paddingY: "$7", paddingX: "$10" }}>
              <Flex css={{ alignItems: "center", gap: "0.5rem" }}>
                <Text h2>165 €</Text>
                <Text css={{ color: "$accents8", fontSize: "$lg" }}>/ 3 h</Text>
              </Flex>
            </Card.Body>
            <Button css={{ marginBottom: "$5" }} onClick={() => setModalOpen(true)}>Broneeri</Button>
          </Card>
        </Flex>

        <Flex css={{ marginTop: "$8" }} justify="center">
          <Text css={{ color: "$accents8" }}>
            NB! Riigipühadel kehtib nädalavahetuse hind.
          </Text>
        </Flex>
      </Flex>

      <Divider css={{ position: "absolute", left: "0", marginTop: "$5", opacity: "0.3" }} />

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        width="800px"
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Broneeri aeg
          </Text>
        </Modal.Header>
        <Modal.Body>
          <iframe 
            src="https://m2ngudea1t.setmore.com"
            style={{ height: "600px", width: "100%" }}
            frameBorder="0"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};





