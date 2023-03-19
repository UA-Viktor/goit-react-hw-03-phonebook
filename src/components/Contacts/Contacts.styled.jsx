import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
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
    background-color: #d9877e;
    color: #f4efe3;
    border-radius: 15px;
  }
`;
