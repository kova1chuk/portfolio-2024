"use client";
import styled from "styled-components";

const TestimonialsSection = styled.section`
  padding: 60px 20px;
  background: #e5e7eb;
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #4b5563;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 10px;
`;

const TestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #1f2937;
`;

const Testimonials: React.FC = () => {
  const testimonials = [
    { text: "This platform is a game changer!", author: "Alex K." },
    { text: "Highly recommend it to everyone.", author: "Maria P." },
    { text: "Excellent support and features.", author: "John D." },
  ];

  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsTitle>What People Say</TestimonialsTitle>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialText>&quot;{testimonial.text}&quot;</TestimonialText>
            <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

export default Testimonials;
