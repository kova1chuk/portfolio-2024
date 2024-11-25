"use client";
import styled from "styled-components";

const PricingSection = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const PricingTitle = styled.h2`
  font-size: 2.5rem;
  color: #4b5563;
  margin-bottom: 40px;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const PricingCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PricingAmount = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #4f46e5;
  margin-bottom: 10px;
`;

const PricingDescription = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 20px;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #4f46e5;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #4338ca;
  }
`;

const Pricing: React.FC = () => {
  const plans = [
    { price: "$0", description: "Basic features for personal use." },
    { price: "$29", description: "Advanced features for small teams." },
    { price: "$99", description: "All features for large businesses." },
  ];

  return (
    <PricingSection id="pricing">
      <PricingTitle>Pricing</PricingTitle>
      <PricingGrid>
        {plans.map((plan, index) => (
          <PricingCard key={index}>
            <PricingAmount>{plan.price}</PricingAmount>
            <PricingDescription>{plan.description}</PricingDescription>
            <CTAButton href="#contact">Get Started</CTAButton>
          </PricingCard>
        ))}
      </PricingGrid>
    </PricingSection>
  );
};

export default Pricing;
