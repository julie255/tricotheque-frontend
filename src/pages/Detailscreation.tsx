import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Heading, Text, Image, VStack } from '@chakra-ui/react';
import Navigation from '../composants/Navigation';
import { creations as rawCreations } from '../data/Creations';

function DetailsCreation() {
    const { id } = useParams<{ id: string }>();
    const creation = rawCreations.find((c) => c.id === Number(id));

    if (!creation) {
        return (
            <Box p={10}>
                <Navigation />
                <Heading>Création non trouvée</Heading>
            </Box>
        );
    }

    return (
        <Box fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" bg="orange.50" minH="100vh">
            <Navigation />
            <Container maxW="1200px" mt={10} px={5} pb={10}>
                <Box bg="pink.50" p={8} borderRadius="xl" boxShadow="lg">
                    <Heading as="h1" size="xl" textAlign="center" color="pink.600" mb={10}>
                        Détails de la création
                    </Heading>

                    <Image
                        src={creation.image}
                        alt={creation.title}
                        width="100%"
                        maxHeight="400px"
                        objectFit="cover"
                        borderRadius="xl"
                        mb={6}
                    />
                    <VStack align="start" spacing={4}>
                        <Heading as="h2" size="lg" color="pink.700">
                            {creation.title}
                        </Heading>
                        <Text fontSize="md" color="gray.700">
                            {creation.description}
                        </Text>
                        <Text fontWeight="bold" color="pink.600">
                            Techniques utilisées : {creation.techniques ?? 'Non spécifié'}
                        </Text>
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
}

export default DetailsCreation;