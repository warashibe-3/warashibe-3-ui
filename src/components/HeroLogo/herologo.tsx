import { Container, Image } from "@nextui-org/react";

export const HeroLogo: React.FC = () => {
  return (
    <Container xs>
      <Image src="/images/warashibe.png" alt="warashibe3.0" showSkeleton />
    </Container>
  );
};
