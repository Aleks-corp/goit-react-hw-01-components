import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;

  margin: 0 auto;
  padding-top: 20px;
  background-color: #fff;

  border: 0;
  border-radius: 5px;
  box-shadow: 2px 4px 10px 0px rgba(71, 123, 206, 0.5);
`;

export const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const StatisticsItem = styled.li`
  width: calc(100% / 5);
`;
export const StatisticsList = styled.ul`
  display: flex;
`;
