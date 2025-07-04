import React, { useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Input,
    Select,
    SimpleGrid,
    Text,
    VStack,
} from '@chakra-ui/react';
import Navigation from "../composants/Navigation";

// Exemple de données à filtrer
const creations = [
    { id: 1, title: 'Écharpe', category: 'Accessoires' },
    { id: 2, title: 'T-shirt', category: 'Vêtements' },
    { id: 3, title: 'Jouet en bois', category: 'Jouets' },
    { id: 4, title: 'Bonnet', category: 'Accessoires' },
    { id: 5, title: 'Pantalon', category: 'Vêtements' },
];

export default function Rechercher() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    // Filtrer les créations selon recherche + catégorie
    const filteredCreations = creations.filter((creation) => {
        const matchesSearch = creation.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory ? creation.category === filterCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <Box fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" bg="orange.50" minH="100vh">
            <Navigation />

            <Container maxW="700px" mt={12} px={4}>
                <Box bg="white" p={8} borderRadius="xl" boxShadow="lg">
                    <Heading mb={6} color="pink.600">Rechercher une création</Heading>

                    <VStack spacing={4} mb={6}>
                        <Input
                            placeholder="Rechercher par nom..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            borderRadius="md"
                            borderColor="pink.300"
                            _focus={{ borderColor: "pink.500", boxShadow: "0 0 5px var(--chakra-colors-pink-500)" }}
                        />

                        <Select
                            placeholder="Filtrer par catégorie"
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            borderRadius="md"
                            borderColor="pink.300"
                            _focus={{ borderColor: "pink.500", boxShadow: "0 0 5px var(--chakra-colors-pink-500)" }}
                        >
                            <option value="Accessoires">Accessoires</option>
                            <option value="Vêtements">Vêtements</option>
                            <option value="Jouets">Jouets</option>
                        </Select>
                    </VStack>

                    {filteredCreations.length > 0 ? (
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            {filteredCreations.map(({ id, title, category }) => (
                                <Box
                                    key={id}
                                    p={4}
                                    bg="pink.50"
                                    borderRadius="md"
                                    boxShadow="sm"
                                >
                                    <Text fontWeight="bold" color="pink.700">{title}</Text>
                                    <Text fontSize="sm" color="gray.600">{category}</Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    ) : (
                        <Text>Aucune création trouvée.</Text>
                    )}
                </Box>
            </Container>
        </Box>
    );
}