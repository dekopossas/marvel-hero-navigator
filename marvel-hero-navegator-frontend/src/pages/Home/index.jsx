import React from 'react';
import {
  Stack,
} from '@chakra-ui/react';
import CardHero from '../../components/CardHero';
import TopBar from '../../components/TopBar';

function Home() {
  return (
    <div>
      <Stack spacing={3}>
        <h1> home</h1>
        <TopBar />
        <CardHero />
      </Stack>
    </div>
  );
}

export default Home;
