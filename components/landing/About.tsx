"use client";

import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// Fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Section (filtering out isVisible)
const AboutSection = styled.section<{ $isVisible: boolean }>`
  padding: 60px 20px;
  text-align: center;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) => (props.$isVisible ? fadeIn : "none")} 1s ease-in-out;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #4b5563;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 800px;
  margin: 0 auto;
`;

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <AboutSection id="about" ref={sectionRef} $isVisible={isVisible}>
      <AboutTitle>About Us</AboutTitle>
      <AboutText>
        We are a team of passionate developers dedicated to building scalable
        and user-friendly web applications.
      </AboutText>
    </AboutSection>
  );
};

export default About;
