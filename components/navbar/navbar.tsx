import { Button, Link, Navbar, Modal, Text, useTheme } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoDark from "./logo.png";
import LogoLight from "./logo_blue.png";
import { InlineWidget } from "react-calendly";

export const Nav = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      setTimeout(() => {
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });

        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";

        const navbarToggle = document.querySelector(".nextui-navbar-toggle");
        if (navbarToggle) {
          (navbarToggle as HTMLElement).click();
        }
      }, 100);
    }
  };

  const collapseItems = [
    { label: "Võimalused", id: "features1" },
    { label: "Kodukord", id: "rules" },
    { label: "Hinnakiri", id: "pricing" },
    { label: "Galerii", id: "gallery" },
    { label: "KKK", id: "faq" },
    { label: "Asukoht", id: "location" },
  ];

  return (
    <>
      <Navbar
        isBordered
        css={{
          "& .nextui-navbar-container": {
            background: "$background",
            borderBottom: "none",
          },
        }}
      >
        <Navbar.Brand>
          <Image
            src={isDark ? LogoDark : LogoLight}
            alt="Logo"
            width={118}
            height={41}
            priority
          />

          <Navbar.Content hideIn="sm" css={{ pl: "3rem" }}>
            {collapseItems.map((item) => (
              <Navbar.Link key={item.id} onClick={() => handleScroll(item.id)}>
                {item.label}
              </Navbar.Link>
            ))}
          </Navbar.Content>
        </Navbar.Brand>

        <Navbar.Collapse>
          {collapseItems.map((item) => (
            <Navbar.CollapseItem key={item.id}>
              <Link
                color="inherit"
                css={{ minWidth: "100%", cursor: "pointer" }}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>

        <Navbar.Content>
          <Navbar.Item>
            <Button
              auto
              flat
              css={{ backgroundColor: "#003049", color: "white" }}
              onClick={() => setModalOpen(true)}
            >
              Broneeri aeg
            </Button>
          </Navbar.Item>

          <Navbar.Item showIn="sm">
            <Navbar.Toggle aria-label="toggle navigation" />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

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
          <InlineWidget
            url="https://m2ngudea1t.setmore.com"
            styles={{ height: "600px" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};



