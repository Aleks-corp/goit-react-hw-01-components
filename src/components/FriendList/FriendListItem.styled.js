import styled from 'styled-components';

export const OnlineStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin-left: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return isOnline ? '#ff0000' : '#00ff00';
  }};
`;

export const Image = styled.img`
  margin-left: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

export const FriendName = styled.p`
  margin-left: 20px;
  font-size: 18px;
  font-weight: 500;
`;
