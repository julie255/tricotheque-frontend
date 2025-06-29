import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    VStack,
    Flex,
} from "@chakra-ui/react";
import Navigation from "../composants/Navigation";

export default function Accueil() {
    const navigate = useNavigate();

    const services = [
        {
            title: "L'univers du crochet",
            description: "Explore des créations uniques faites main, parfaites pour les amoureux du fil.",
            image: "/images/crochet.jpg",
            link: "/modeles"
        },
        {
            title: "Notre communauté",
            description: "Rejoins une communauté passionnée par le crochet et le partage.",
            image: "/images/communaute.jpg",
            link: "/communaute"
        },
        {
            title: "Contact et aide",
            description: "Besoin de nous contacter ? Nous sommes là pour vous aider.",
            image: "/images/contact.jpg",
            link: "/contact"
        }
    ];

    return (
        <Box
            fontFamily="'Segoe UI', sans-serif"
            bg="orange.50"
            minH="100vh"
            px={4}
        >
            <Navigation />

            <Container maxW="1200px" py={0}>
                {/* Hero Section */}
                <Box
                    textAlign="center"
                    py={12}
                    px={4}
                    bg="linear-gradient(to right, #ffe4e6, #fce7f3)"
                    color="orange.800"
                    borderRadius="lg"
                    my={8}
                >
                    <Heading
                        as="h1"
                        size="2xl"
                        mb={4}
                        color="orange.800"
                    >
                        Bienvenue dans l'univers du crochet 🧶
                    </Heading>
                    <Text fontSize="xl" color="orange.700">
                        Découvre, partage et crée dans un monde fait de fil, de passion et de créativité.
                    </Text>
                </Box>

                {/* Services Section */}
                <VStack gap={8} my={12} maxW="1000px" mx="auto">
                    {services.map((service, index) => (
                        <Box
                            key={index}
                            bg="white"
                            borderRadius="xl"
                            overflow="hidden"
                            boxShadow="lg"
                            cursor="pointer"
                            transition="transform 0.3s"
                            _hover={{ transform: "scale(1.02)" }}
                            onClick={() => navigate(service.link)}
                            width="full"
                        >
                            <Flex direction={{ base: "column", md: "row" }}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={{ base: "100%", md: "40%" }}
                                    height="200px"
                                    objectFit="cover"
                                />
                                <Box
                                    p={6}
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                    width={{ base: "100%", md: "60%" }}
                                >
                                    <Heading
                                        as="h2"
                                        size="lg"
                                        mb={2}
                                        color="pink.600"
                                    >
                                        {service.title}
                                    </Heading>
                                    <Text color="gray.600">
                                        {service.description}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </VStack>

                {/* Footer */}
                <Box
                    textAlign="center"
                    fontSize="sm"
                    color="gray.500"
                    mt={16}
                    pb={8}
                >
                    © 2025 FIL & CRÉATION - Tous droits réservés.
                </Box>
            </Container>
        </Box>
    );
}
