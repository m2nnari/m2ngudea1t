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
          paddingY: "$20",
          gap: "2rem",
          paddingX: "$6",
          scrollMarginTop: "20px",
          pt: "$16",
        }}
        justify="center"
        wrap="wrap"
        direction="column"
        align="center"
      >
        <Flex direction="column" align="center">
          <Text h2>Hinnakiri</Text>
        </Flex>




        <Flex css={{ gap: "2rem", width: "100%" }} wrap="wrap" justify="center">
          {/* Esmaspäev - Neljapäev */}
          <Card css={{ padding: "$8", maxWidth: "360px", borderRadius: "$lg", boxShadow: "$md" }}>
            <Card.Header>
              <Grid.Container css={{ paddingLeft: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ textAlign: "center", width: "100%" }}>
                    Esmaspäev - Neljapäev
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8", textAlign: "center", width: "100%" }}>
                    Rendihind tööpäevadel
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>

            <Card.Body css={{ textAlign: "center" }}>
              <Flex css={{ alignItems: "center", gap: "0.5rem", justifyContent: "center" }}>
                <Text h2>125 €</Text>
                <Text css={{ color: "$accents8", fontSize: "$lg" }}>/ 3 h</Text>
              </Flex>
              <Button css={{ marginTop: "$4", width: "100%", backgroundColor: "#003049" }} onClick={() => setModalOpen(true)}>Broneeri</Button>
            </Card.Body>
          </Card>

          {/* Reede - Pühapäev */}
          <Card css={{ padding: "$8", maxWidth: "360px", borderRadius: "$lg", boxShadow: "$md" }}>
            <Card.Header>
              <Grid.Container css={{ paddingLeft: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ textAlign: "center", width: "100%" }}>
                    Reede - Pühapäev
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8", textAlign: "center", width: "100%" }}>
                    Nädalavahetuse hinnakiri 
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>

            <Card.Body css={{ textAlign: "center" }}>
              <Flex css={{ alignItems: "center", gap: "0.5rem", justifyContent: "center" }}>
                <Text h2>165 €</Text>
                <Text css={{ color: "$accents8", fontSize: "$lg" }}>/ 3 h</Text>
              </Flex>
              <Button css={{ marginTop: "$4", width: "100%", backgroundColor: "#003049" }} onClick={() => setModalOpen(true)}>Broneeri</Button>
            </Card.Body>
          </Card>
        </Flex>

        <Flex
          css={{ marginTop: "$6" }}
          justify="center"
          align="center"
        >
          <Text
            css={{
              color: "$accents8",
              textAlign: "center",
            }}
          >
            <b>NB! Riigipühadel kehtib nädalavahetuse hind.</b>
            <br />
            <b>Palume ürituse eest tasuda enne ürituse algust.</b>
            <br />
            <br />
            <b>
            Lumilind OÜ
            <br />
            EE847700771011165098
            </b>
          </Text>
        </Flex>

        </Flex>



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

      <Divider css={{ position: "absolute", left: "0", marginTop: "$15", opacity: "0.3" }} />
    </>
  );
};







