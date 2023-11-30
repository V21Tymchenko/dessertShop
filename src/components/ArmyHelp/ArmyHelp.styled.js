import styled from "styled-components";

export const ContentHelpText = styled.div`
  width: 100%;
  height: 56px;
  text-align: center;

  display: flex;
  gap: 6px;
  padding: 4px 0px;
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.radii.text};
  background: ${({ theme }) => theme.colors.accentBlue};
`;
export const HelpArmyText = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 22.4px;
`;
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-decoration-line: underline;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.radii.button};
  transition: ${({ theme }) => theme.transitions.primary};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
  }
`;
