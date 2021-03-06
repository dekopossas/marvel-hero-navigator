import React from 'react';
import {
  Text,
  Box,
  Image,
  Badge,
  // StarIcon,
} from '@chakra-ui/react';

function CardHero() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'CASA DO IRONMAN',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <div>
      <Text fontSize="5xl">Home</Text>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={property.imageUrl} alt={property.imageAlt} />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds}
              beds &bull;
              {property.baths}
              baths
            </Box>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {property.title}
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>

          {/* <Box d="flex" mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, index) => (
                <StarIcon key={index} color={index < property.rating ? 'teal.500' : 'gray.300'} />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount}
              reviews
            </Box>
          </Box> */}
        </Box>
      </Box>
    </div>
  );
}

export default CardHero;
