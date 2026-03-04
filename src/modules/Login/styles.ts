import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1f2a37, #3b4a5a);
`;

export const Card = styled.div`
  background: #ffffff;
  width: 420px;
  padding: 40px 32px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  font-size: 24px;
  letter-spacing: 1px;
  color: #1f2933;
`;

export const Field = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #4b5563;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

export const Remember = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #4b5563;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }
`;

export const Forgot = styled.a`
  display: block;
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #2563eb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
