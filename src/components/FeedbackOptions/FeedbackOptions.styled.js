import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  &:not(:last-child) {
    margin-right: 40px;
  }
  cursor: pointer;
  width: 80px;
  height: 40px;
  background-color: #e4e9ed;
  border: 1px solid #030e1845;
  border-radius: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:nth-of-type(1):hover{
    background-color: rgb(173, 241, 167);
  }
  &:nth-of-type(2):hover{
    background-color: rgb(206, 206, 206);
  }
  &:nth-of-type(3):hover{
    background-color: rgb(241, 167, 167);
  }
`;