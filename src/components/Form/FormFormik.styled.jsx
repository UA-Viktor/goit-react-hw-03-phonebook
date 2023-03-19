import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const MainForma = styled(Form)`
  margin-top: 15px;
`;

export const Label = styled.label`
  margin-top: 5px;

  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const Input = styled(Field)`
  margin-top: 5px;
`;

export const Button = styled.button`
  margin-top: 10px;

  border: none;
  text-decoration: none;

  padding: 5px 10px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  background-color: #d1c9b1;
  color: #133642;
  border-radius: 5px;

  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  &:hover {
    background-color: #55a391;
    color: #f4efe3;
    border-radius: 15px;
  }
`;
