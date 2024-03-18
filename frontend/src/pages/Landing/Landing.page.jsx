
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

const Landing = () => {
  return (
    <>
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Easy to use album creator for{' '}
          <Text component="span" inherit className={classes.highlight}>
            Photographers
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Discover, Explore, and Immerse Yourself in the Art of Photography. Where every click unveils a new chapter. Post it, Share it, Click It, Love it.
          </Text>
        </Container>
      </div>
    </div>

    </>
    
  );
};

export default Landing;
