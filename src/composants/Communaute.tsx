// src/pages/Communaute.tsx

import React, { useState } from 'react';
import {
    Box,
    Button,
    Heading,
    Input,
    Textarea,
    VStack,
    Text,
    Container,
} from '@chakra-ui/react';
import Navigation from '../composants/Navigation';

interface Message {
    id: number;
    auteur: string;
    contenu: string;
}

export default function Communaute() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [auteur, setAuteur] = useState('');
    const [contenu, setContenu] = useState('');

    const handleEnvoyer = () => {
        if (auteur.trim() && contenu.trim()) {
            const nouveauMessage: Message = {
                id: messages.length + 1,
                auteur,
                contenu,
            };
            setMessages([nouveauMessage, ...messages]);
            setContenu('');
        }
    };

    return (
        <Box bg="orange.50" minH="100vh" fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
            <Navigation />
            <Container maxW="800px" pt={10} pb={20}>
                <Box bg="white" p={6} borderRadius="xl" boxShadow="lg">
                    <Heading color="pink.600" size="lg" mb={6} textAlign="center">
                        Communauté des créateurs
                    </Heading>

                    <VStack spacing={4} align="stretch">
                        <Input
                            placeholder="Votre nom"
                            value={auteur}
                            onChange={(e) => setAuteur(e.target.value)}
                            bg="gray.50"
                        />
                        <Textarea
                            placeholder="Exprimez-vous..."
                            value={contenu}
                            onChange={(e) => setContenu(e.target.value)}
                            bg="gray.50"
                            resize="vertical"
                        />
                        <Button colorScheme="pink" onClick={handleEnvoyer}>
                            Envoyer
                        </Button>
                    </VStack>
                </Box>

                <Box mt={10}>
                    <Heading size="md" mb={4}>
                        Messages récents
                    </Heading>
                    <VStack spacing={4} align="stretch">
                        {messages.length === 0 ? (
                            <Text>Aucun message pour le moment.</Text>
                        ) : (
                            messages.map((msg) => (
                                <Box key={msg.id} p={4} bg="pink.50" borderRadius="md" boxShadow="sm">
                                    <Text fontWeight="bold" color="pink.700">
                                        {msg.auteur}
                                    </Text>
                                    <Text>{msg.contenu}</Text>
                                </Box>
                            ))
                        )}
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
}