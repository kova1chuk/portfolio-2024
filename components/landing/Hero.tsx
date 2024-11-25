"use client";
import styled from "styled-components";

const HeroSection = styled.section`
  background: linear-gradient(90deg, #4f46e5, #6d28d9);
  color: white;
  text-align: center;
  padding: 100px 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #facc15;
  color: #1f2937;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #eab308;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroTitle>Welcome to Our Platform</HeroTitle>
      <HeroSubtitle>
        Your ultimate solution for managing your workflow effectively.
      </HeroSubtitle>
      <CTAButton href="#features">Explore Features</CTAButton>
    </HeroSection>
  );
};

export default Hero;
