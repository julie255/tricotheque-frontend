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

const Publication = () => {
    const [Titre, setTitre] = useState('');
    const [Description, setDescription] = useState('');
    const [temps, setTemps] = useState('');
    const [Auteur, setAuteur] = useState('');
    const [Typeprojet, setTypeProjet] = useState('');
    const [Typefil, setTypeFil] = useState('');
    const [preview, setPreview] = useState<string | null>(null);

    // Gestion du changement d'image
    const gestionImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fichier = e.target.files?.[0];
        if (fichier) {
            setPreview(URL.createObjectURL(fichier));
        }
    };

    const gestionPublication = () => {
        if (!Titre || !Description) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        alert('Projet publié avec succès !');

        // Reset des champs
        setTitre('');
        setDescription('');
        setTemps('');
        setAuteur('');
        setTypeProjet('');
        setTypeFil('');
        setPreview(null);
    };

    return (
        <Box
            fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            bg="orange.50"
            minH="100vh"
        >
            <Navigation />
            
            <Container maxW="600px" mt={10} px={5}>
                <Box
                    bg="pink.50"
                    p={8}
                    borderRadius="xl"
                    boxShadow="lg"
                >
                    <Heading
                        as="h2"
                        size="lg"
                        textAlign="center"
                        color="pink.600"
                        mb={6}
                    >
                        Ajouter une création
                    </Heading>
                    
                    <VStack gap={5}>
                        <Box width="full">
                            <Text fontWeight="600" color="pink.700" mb={2} display="block">
                                Nom du projet*
                            </Text>
                            <Input
                                type="text"
                                value={Titre}
                                onChange={(e) => setTitre(e.target.value)}
                                required
                                borderRadius="lg"
                                border="1.5px solid"
                                borderColor="pink.200"
                                _focus={{
                                    borderColor: "pink.500",
                                    boxShadow: "0 0 5px var(--chakra-colors-pink-500)"
                                }}
                            />
                        </Box>

                        <Box width="full">
                            <Text fontWeight="600" color="pink.700" mb={2} display="block">
                                Description du projet*
                            </Text>
                            <Input
                                type="text"
                                placeholder="Description"
                                value={Description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                borderRadius="lg"
                                border="1.5px solid"
                                borderColor="pink.200"
                                _focus={{
                                    borderColor: "pink.500",
                                    boxShadow: "0 0 5px var(--chakra-colors-pink-500)"
                                }}
                            />
                        </Box>

                        <Box width="full">
                            <Text fontWeight="600" color="pink.700" mb={2} display="block">
                                Type de projet
                            </Text>
                            <select
                                value={Typeprojet}
                                onChange={(e) => setTypeProjet(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1.5px solid #fbbf24',
                                    backgroundColor: 'white',
                                    fontSize: '1rem'
                                }}
                            >
                                <option value="">Choisir</option>
                                <option value="Accessoires">Accessoires</option>
                                <option value="Vêtements">Vêtements</option>
                                <option value="Sacs">Sacs</option>
                            </select>
                        </Box>

                        <Box width="full">
                            <Text fontWeight="600" color="pink.700" mb={2} display="block">
                                Type de fil
                            </Text>
                            <select
                                value={Typefil}
                                onChange={(e) => setTypeFil(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1.5px solid #fbbf24',
                                    backgroundColor: 'white',
                                    fontSize: '1rem'
                                }}
                            >
                                <option value="">Choisir</option>
                                <option value="Laine">Laine</option>
                                <option value="Acrylique">Acrylique</option>
                                <option value="Coton">Coton</option>
                            </select>
                        </Box>

                        <Box width="full">
                            <Text fontWeight="600" color="pink.700" mb={2} display="block">
                                Temps de réalisation du projet
                            </Text>
                            <Input
                                type="text"
                                placeholder="Temps"
                                value={temps}
                                onChange={(e) => setTemps(e.target.value)}
                                borderRadius="lg"
                                border="1.5px solid"
                                borderColor="pink.200"
                                _focus={{
                                    borderColor: "pink.500",
                                    boxShadow: "0 0 5px var(--chakra-colors-pink-500)"
                                }}
                            />
                        </Box>

                        <Box width="full">
                            <Text fontWeight="600" color="pink.700" mb={2} display="block">
                                Auteur du projet
                            </Text>
                            <Input
                                type="text"
                                placeholder="Auteur"
                                value={Auteur}
                                onChange={(e) => setAuteur(e.target.value)}
                                borderRadius="lg"
                                border="1.5px solid"
                                borderColor="pink.200"
                                _focus={{
                                    borderColor: "pink.500",
                                    boxShadow: "0 0 5px var(--chakra-colors-pink-500)"
                                }}
                            />
                        </Box>

                        <Box width="full">
                            <Text fontWeight="600" color="pink.700" mb={2} display="block">
                                Ajouter une image du projet
                            </Text>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={gestionImage}
                                borderRadius="lg"
                                border="1.5px solid"
                                borderColor="pink.200"
                                _focus={{
                                    borderColor: "pink.500",
                                    boxShadow: "0 0 5px var(--chakra-colors-pink-500)"
                                }}
                            />
                        </Box>

                        {preview && (
                            <Box width="full" textAlign="center">
                                <Text fontStyle="italic" color="pink.700" mb={3}>
                                    Aperçu de l'image :
                                </Text>
                                <img
                                    src={preview}
                                    alt="Aperçu projet"
                                    style={{
                                        maxWidth: '100%',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                                    }}
                                />
                            </Box>
                        )}

                        <Button
                            onClick={gestionPublication}
                            colorScheme="pink"
                            size="lg"
                            width="full"
                            fontWeight="700"
                            fontSize="lg"
                            _hover={{ bg: "pink.600" }}
                        >
                            Publier
                        </Button>
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
};

export default Publication;
