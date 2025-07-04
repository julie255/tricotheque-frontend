import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Interactions from './Interactions';

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Image,
    Text,
    VStack,
    Button,
} from '@chakra-ui/react';
import Navigation from './Navigation';

const rawCreations = [
    {
        id: 1,
        title: "Écharpe en laine douce",
        description: "Une écharpe tricotée main pour l'hiver, très douce et chaude.",
        image: "https://cache.marieclaire.fr/data/photo/w800_ci/4z/whistler-scarf_1.jpg",
    },
    {
        id: 2,
        title: "Bonnet coloré",
        description: "Bonnet multicolore, parfait pour l'automne.",
        image: "https://www.lahalle.com/on/demandware.static/-/Sites-lahalle_master/default/dwd39f1258/bonnet-tricote-multicolore-femme-vue1-36165600818811060.jpg",
    },
    {
        id: 3,
        title: "Sac à main crocheté",
        description: "Sac élégant fait main avec du coton naturel.",
        image: "https://i0.wp.com/merycrochet.com/wp-content/uploads/2020/10/sacaucrochetexplicationsgratuites.jpeg?resize=1024%2C1024&ssl=1",
    },
    {
        id: 4,
        title: "Robe au crochet",
        description: "Robe d'été faite en acrylique.",
        image: "https://cdn.shopify.com/s/files/1/2077/6477/products/Robe_ete_tricote_crochet_-_Epaules_nues_2_grande.jpg?v=1528833518",
    },
];

export default function Galerie() {
    const navigate = useNavigate();
    const [creations, setCreations] = useState(
        rawCreations.map((c) => ({ ...c, likes: 0, comments: [] }))
    );

    const handleLike = (id: number) => {
        setCreations((prev) =>
            prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
        );
    };

    const handleAddComment = (id: number, comment: string) => {
        setCreations((prev) =>
            prev.map((c) =>
                c.id === id ? { ...c, comments: [...c.comments, comment] } : c
            )
        );
    };

    const handleCommander = (id: number) => {
        navigate('/commande?id=${id}');
    };

    return (
        <Box fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" bg="orange.50" minH="100vh">
            <Navigation />

            <Container maxW="1200px" mt={10} px={5} pb={10}>
                <Box bg="pink.50" p={8} borderRadius="xl" boxShadow="lg">
                    <Heading as="h1" size="xl" textAlign="center" color="pink.600" mb={10}>
                        Galerie des créations
                    </Heading>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} minChildWidth="280px">
                        {creations.map((creation) => (
                            <Box
                                key={creation.id}
                                borderRadius="xl"
                                boxShadow="lg"
                                overflow="hidden"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-8px)",
                                    boxShadow: "xl",
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
                                    <Heading as="h3" size="md" color="pink.700">
                                        {creation.title}
                                    </Heading>
                                    <Text color="gray.600">{creation.description}</Text>

                                    <Interactions
                                        id={creation.id}
                                        likes={creation.likes}
                                        comments={creation.comments}
                                        onLike={handleLike}
                                        onAddComment={handleAddComment}
                                    />

                                    <Button
                                        onClick={() => handleCommander(creation.id)}
                                        colorScheme="pink"
                                        variant="outline"
                                        mt={2}
                                        width="full"
                                    >
                                        Commander
                                    </Button>
                                </VStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
}