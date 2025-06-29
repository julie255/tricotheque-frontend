import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Input,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import { toaster } from '../components/ui/toaster';
import { useRegister } from '../api/hooks/useAuth';
import Navigation from '../composants/Navigation';

export default function Inscription() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    
    const registerMutation = useRegister();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (password !== confirm) {
            toaster.create({
                title: "Erreur",
                description: "Les mots de passe ne correspondent pas !",
                type: "error",
            });
            return;
        }

        registerMutation.mutate(
            { firstName, lastName, email, password },
            {
                onSuccess: () => {
                    toaster.create({
                        title: "Succès",
                        description: "Inscription réussie ! Vous êtes maintenant connecté.",
                        type: "success",
                    });

                },
                onError: () => {
                    toaster.create({
                        title: "Erreur",
                        description: "Erreur lors de l'inscription. Veuillez réessayer.",
                        type: "error",
                    });
                },
            }
        );
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
                        Créer un compte
                    </Heading>
                    
                    <form onSubmit={handleSubmit}>
                        <VStack gap={5}>
                            <Box width="full">
                                <Text fontWeight="600" color="gray.600" mb={2} display="block">
                                    Prénom
                                </Text>
                                <Input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    borderRadius="lg"
                                    border="1px solid"
                                    borderColor="gray.300"
                                    color="gray.800"
                                    bg="white"
                                    required
                                    _focus={{
                                        borderColor: "pink.600",
                                        boxShadow: "0 0 0 1px var(--chakra-colors-pink-600)"
                                    }}
                                />
                            </Box>

                            <Box width="full">
                                <Text fontWeight="600" color="gray.600" mb={2} display="block">
                                    Nom
                                </Text>
                                <Input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    borderRadius="lg"
                                    border="1px solid"
                                    borderColor="gray.300"
                                    color="gray.800"
                                    bg="white"
                                    required
                                    _focus={{
                                        borderColor: "pink.600",
                                        boxShadow: "0 0 0 1px var(--chakra-colors-pink-600)"
                                    }}
                                />
                            </Box>

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
                                    color="gray.800"
                                    bg="white"
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
                                    color="gray.800"
                                    bg="white"
                                    required
                                    _focus={{
                                        borderColor: "pink.600",
                                        boxShadow: "0 0 0 1px var(--chakra-colors-pink-600)"
                                    }}
                                />
                            </Box>

                            <Box width="full">
                                <Text fontWeight="600" color="gray.600" mb={2} display="block">
                                    Confirmer mot de passe
                                </Text>
                                <Input
                                    type="password"
                                    value={confirm}
                                    onChange={(e) => setConfirm(e.target.value)}
                                    borderRadius="lg"
                                    border="1px solid"
                                    borderColor="gray.300"
                                    color="gray.800"
                                    bg="white"
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
                                disabled={registerMutation.isPending}
                            >
                                {registerMutation.isPending ? "Inscription en cours..." : "S'inscrire"}
                            </Button>
                        </VStack>
                    </form>

                    <Box mt={6} textAlign="center">
                        <Text color="gray.600">
                            Déjà inscrit ?{' '}
                            <Link to="/connexion">
                                <Text as="span" color="pink.600" _hover={{ textDecoration: "underline" }}>
                                    Connectez-vous
                                </Text>
                            </Link>
                        </Text>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
