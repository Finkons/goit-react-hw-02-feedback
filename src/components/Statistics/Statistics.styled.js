import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  background-color: rgb(234, 241, 237);
  padding: 20px;
  border-radius: 10px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  & span {
    margin-left: 20px;
  }
  margin-right: 150px;
`;