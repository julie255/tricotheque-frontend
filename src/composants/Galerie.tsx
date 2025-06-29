import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import Navigation from './Navigation';

// Exemple de données (tu pourras les récupérer d'un JSON ou d'une API)
const creations = [
    {
        id: 1,
        title: "Écharpe en laine douce",
        description: "Une écharpe tricotée main pour l'hiver, très douce et chaude.",
        image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        title: "Bonnet coloré",
        description: "Bonnet multicolore, parfait pour l'automne.",
        image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        title: "Sac à main crocheté",
        description: "Sac élégant fait main avec du coton naturel.",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    },
    // Ajoute autant d'objets que tu veux ici
];

export default function Galerie() {
    return (
        <Box
            fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            bg="orange.50"
            minH="100vh"
        >
            <Navigation />
            
            <Container maxW="1200px" mt={10} px={5} pb={10}>
                <Box
                    bg="pink.50"
                    p={8}
                    borderRadius="xl"
                    boxShadow="lg"
                >
                    <Heading
                        as="h1"
                        size="xl"
                        textAlign="center"
                        color="pink.600"
                        mb={10}
                    >
                        Galerie des créations
                    </Heading>
                    
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 3 }}
                        gap={8}
                        minChildWidth="280px"
                    >
                        {creations.map((creation) => (
                            <Box
                                key={creation.id}
                                bg="white"
                                borderRadius="xl"
                                boxShadow="lg"
                                overflow="hidden"
                                cursor="pointer"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-8px)",
                                    boxShadow: "xl"
                                }}
                            >
                                <Image
                                    src={creation.image}
                                    alt={creation.title}
                                    width="100%"
                                    height="200px"
                                    objectFit="cover"
                                />
                                <VStack align="start" p={4} gap={2}>
                                    <Heading
                                        as="h3"
                                        size="md"
                                        color="pink.700"
                                    >
                                        {creation.title}
                                    </Heading>
                                    <Text color="gray.600">
                                        {creation.description}
                                    </Text>
                                </VStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
}
