"use client";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 60px 20px;
  background: #1f2937;
  color: white;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background: #facc15;
  color: #1f2937;
  border: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background: #eab308;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea rows={4} placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
