import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    color: #666;
    font-weight: 500;
  }

  input,
  select,
  textarea {
    padding: 12px 16px;
    background: #f5f5f5;
    border: 1px solid transparent;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    transition: all 0.2s ease;

    &:focus {
      background: #fff;
      border-color: #454545;
    }
  }

  textarea {
    min-height: 120px;
    resize: none;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 12px;
  width: 140px;
  padding: 12px;
  background: #444;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #333;
  }

  &:active {
    transform: scale(0.98);
  }
`;
