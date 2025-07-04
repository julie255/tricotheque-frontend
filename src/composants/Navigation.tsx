import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Flex,
    Text,
    Button,
    IconButton,
    VStack,
    HStack,
    useDisclosure,
} from "@chakra-ui/react";

export default function Navigation() {
    const { open, onOpen, onClose } = useDisclosure();

    return (
        <Box
            bg="pink.50"
            borderBottom="1px solid"
            borderColor="pink.200"
            px={8}
            py={4}
            position="sticky"
            top={0}
            zIndex={1000}
            fontFamily="'Segoe UI', sans-serif"
        >
            <Flex justify="space-between" align="center">
                <Link to="/" onClick={onClose}>
                    <Text
                        fontSize="1.8rem"
                        fontWeight="bold"
                        color="pink.600"
                        _hover={{ textDecoration: "none" }}
                    >
                        FIL & CRÉATION
                    </Text>
                </Link>

                {/* Desktop Navigation */}
                <HStack gap={6} display={{ base: "none", md: "flex" }}>
                    <Link to="/" onClick={onClose}>
                        <Text color="gray.600" fontWeight="500" _hover={{ color: "pink.600" }}>
                            Accueil
                        </Text>
                    </Link>
                    <Link to="/apropos" onClick={onClose}>
                        <Text color="gray.600" fontWeight="500" _hover={{ color: "pink.600" }}>
                            À propos
                        </Text>
                    </Link>
                    <Link to="/publication" onClick={onClose}>
                        <Text color="gray.600" fontWeight="500" _hover={{ color: "pink.600" }}>
                            Publier
                        </Text>
                    </Link>
                    <Link to="/inscription" onClick={onClose}>
                        <Text color="gray.600" fontWeight="500" _hover={{ color: "pink.600" }}>
                            S'inscrire
                        </Text>
                    </Link>
                    <Link to="/connexion" onClick={onClose}>
                        <Button
                            variant="outline"
                            colorScheme="pink"
                            size="sm"
                            _hover={{ bg: "pink.600", color: "white" }}
                        >
                            Se connecter
                        </Button>
                    </Link>
                    <Link to="/rechercher" onClick={onClose}>
                        <Button
                            variant="outline"
                            colorScheme="pink"
                            size="sm"
                            _hover={{ bg: "pink.600", color: "white" }}
                        >
                            Rechercher
                        </Button>
                    </Link>
                </HStack>

                {/* Mobile Menu Button */}
                <IconButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onOpen}
                    variant="ghost"
                    aria-label="Toggle menu"
                    color="pink.600"
                >
                    ☰
                </IconButton>
            </Flex>

            {/* Mobile Navigation */}
            {open && (
                <Box
                    display={{ base: "block", md: "none" }}
                    position="absolute"
                    top="100%"
                    left={0}
                    right={0}
                    bg="pink.50"
                    borderTop="1px solid"
                    borderColor="pink.200"
                    py={4}
                >
                    <VStack gap={4} align="stretch" px={8}>
                        <Link to="/" onClick={onClose}>
                            <Text color="gray.600" fontWeight="500" _hover={{ color: "pink.600" }}>
                                Accueil
                            </Text>
                        </Link>
                        <Link to="/apropos" onClick={onClose}>
                            <Text color="gray.600" fontWeight="500" _hover={{ color: "pink.600" }}>
                                À propos
                            </Text>
                        </Link>
                        <Link to="/publication" onClick={onClose}>
                            <Text color="gray.600" fontWeight="500" _hover={{ color: "pink.600" }}>
                                Publier
                            </Text>
                        </Link>
                        <Link to="/inscription" onClick={onClose}>
                            <Text color="gray.600" fontWeight="500" _hover={{ color: "pink.600" }}>
                                S'inscrire
                            </Text>
                        </Link>
                        <Link to="/connexion" onClick={onClose}>
                            <Button
                                variant="outline"
                                colorScheme="pink"
                                width="full"
                                _hover={{ bg: "pink.600", color: "white" }}
                            >
                                Se connecter
                            </Button>
                        </Link>
                        <Link to="/rechercher" onClick={onClose}>
                            <Button
                                variant="outline"
                                colorScheme="pink"
                                width="full"
                                _hover={{ bg: "pink.600", color: "white" }}
                            >
                                Rechercher
                            </Button>
                        </Link>
                        <Link to="/communaute">Communauté</Link>
                    </VStack>
                </Box>
            )}
        </Box>
    );
}
