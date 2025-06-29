import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import Navigation from '../composants/Navigation';

export default function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Email: ${email}\nMot de passe: ${password}`);
    };

    return (
        <Box
            fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            bg="orange.50"
            minH="100vh"
        >
            <Navigation />
            
            <Container maxW="400px" mt={12}>
                <Box
                    bg="white"
                    p={8}
                    borderRadius="xl"
                    boxShadow="xl"
                >
                    <Heading
                        as="h2"
                        size="lg"
                        textAlign="center"
                        color="pink.700"
                        mb={6}
                        fontWeight="700"
                    >
                        Se connecter
                    </Heading>
                    
                    <form onSubmit={handleSubmit}>
                        <VStack gap={5}>
                            <Box width="full">
                                <Text fontWeight="600" color="gray.600" mb={2} display="block">
                                    Email
                                </Text>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    borderRadius="lg"
                                    border="1px solid"
                                    borderColor="gray.300"
                                    required
                                    _focus={{
                                        borderColor: "pink.600",
                                        boxShadow: "0 0 0 1px var(--chakra-colors-pink-600)"
                                    }}
                                />
                            </Box>

                            <Box width="full">
                                <Text fontWeight="600" color="gray.600" mb={2} display="block">
                                    Mot de passe
                                </Text>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    borderRadius="lg"
                                    border="1px solid"
                                    borderColor="gray.300"
                                    required
                                    _focus={{
                                        borderColor: "pink.600",
                                        boxShadow: "0 0 0 1px var(--chakra-colors-pink-600)"
                                    }}
                                />
                            </Box>

                            <Button
                                type="submit"
                                colorScheme="pink"
                                size="lg"
                                width="full"
                                fontWeight="700"
                                fontSize="lg"
                                _hover={{ bg: "pink.700" }}
                            >
                                Connexion
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Container>
        </Box>
    );
}
