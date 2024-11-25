"use client";
import styled from "styled-components";

const FeaturesSection = styled.section`
  padding: 60px 20px;
  background: #f3f4f6;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #4b5563;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const FeatureCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #1f2937;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #6b7280;
`;

const Features: React.FC = () => {
  const features = [
    {
      title: "Responsive Design",
      description: "Works perfectly on all devices.",
    },
    {
      title: "Modern Stack",
      description: "Built with React, Next.js, and Styled Components.",
    },
    {
      title: "Customizable",
      description: "Easily tweak the design to fit your needs.",
    },
  ];

  return (
    <FeaturesSection id="features">
      <FeaturesTitle>Features</FeaturesTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default Features;
