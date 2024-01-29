import styled from "styled-components";

export const HeaderTable = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.inputText};
`;

export const NumRow = styled.p`
  font-family: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: inherit;

  width: 70px;
  padding: 13px 8px;
`;

export const NameRow = styled.p`
  font-family: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: inherit;

  width: 180px;
  padding: 13px 8px;
`;

export const QuantityRow = styled.p`
  font-family: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: inherit;

  width: 86px;
  padding: 13px 8px;
`;

export const SumRow = styled.p`
  font-family: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: inherit;

  width: 140px;
  padding: 13px 8px;
`;

export const PMethodRow = styled.p`
  font-family: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: inherit;

  width: 143px;
  padding: 13px 8px;
`;

export const DeliveryRow = styled.p`
  font-family: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: inherit;

  width: 180px;
  padding: 13px 8px;
`;

export const StatusFilter = styled.select`
  font-family: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: inherit;

  width: 150px;
  padding: 13px 8px;
`;

export const OrderItem = styled.li`
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
`;