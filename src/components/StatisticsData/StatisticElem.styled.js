import styled from 'styled-components';
import { getRandomHexColor } from 'modules/getRandomColor';

export const Wrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;
export const Percentage = styled.span`
  display: block;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`;
