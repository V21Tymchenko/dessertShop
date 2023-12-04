import {
  ContentHelpText,
  HelpArmyText,
  StyledLink,
} from "./ArmyHelp.styled";

const ArmyHelp = () => {
  return (
    <ContentHelpText>
      <HelpArmyText>
        10% з продажів йде на допомогу для ЗСУ. Звіти можна побачити у нашому
        профілі у
      </HelpArmyText>
      <StyledLink
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Instagram"
      >
        Instagram
      </StyledLink>
    </ContentHelpText>
  );
};
export default ArmyHelp;
