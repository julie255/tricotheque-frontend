import React, { useState } from 'react';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';

interface InteractionsProps {
    id: number;
    likes: number;
    comments: string[];
    onLike: (id: number) => void;
    onAddComment: (id: number, comment: string) => void;
}

const Interactions: React.FC<InteractionsProps> = ({ id, likes, comments, onLike, onAddComment }) => {
    const [commentText, setCommentText] = useState('');

    const handleLikeClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Bloquer la propagation du clic
        onLike(id);
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation(); // Bloquer propagation du submit
        if (commentText.trim()) {
            onAddComment(id, commentText.trim());
            setCommentText('');
        }
    };

    return (
        <Box width="100%">
            <Button
                size="sm"
                colorScheme="pink"
                onClick={handleLikeClick}
                mr={2}
            >
                ❤ Like ({likes})
            </Button>

            <form onSubmit={handleCommentSubmit}>
                <VStack align="start" spacing={2} mt={2}>
                    <Input
                        placeholder="Ajouter un commentaire..."
                        size="sm"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        onClick={(e) => e.stopPropagation()} // Bloquer clic dans input
                    />
                    <Button
                        type="submit"
                        size="sm"
                        colorScheme="pink"
                        onClick={(e) => e.stopPropagation()} // Bloquer clic sur bouton commenter
                    >
                        Commenter
                    </Button>
                </VStack>
            </form>

            {comments.length > 0 && (
                <Box mt={2}>
                    {comments.map((comment, idx) => (
                        <Text key={idx} fontSize="sm" color="gray.600">
                            💬 {comment}
                        </Text>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Interactions;