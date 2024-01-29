import React, { FC } from "react";
import {
  CatalogNavigationLink,
  CatalogNavigationList,
  CatalogNavigationSlash,
} from "./CatalogNavigation.styled";

interface navigationArray {
  hash: string;
  name: string;
  $active?: boolean;
}
interface CatalogNavigationProps {
  navigationLinks: navigationArray[];
}

const CatalogNavigation: FC<CatalogNavigationProps> = ({ navigationLinks }) => {
  return (
    <CatalogNavigationList>
      <li>
        <CatalogNavigationLink to="/">Головна</CatalogNavigationLink>
      </li>
      <li>
        <CatalogNavigationSlash>/</CatalogNavigationSlash>
      </li>
      {navigationLinks.map(({ hash, name, $active }, index) => (
        <React.Fragment key={hash}>
          <li>
            <CatalogNavigationLink to={hash} active={String($active)}>
              {name}
            </CatalogNavigationLink>
          </li>
          {index < navigationLinks.length - 1 && (
            <li>
              <CatalogNavigationSlash>/</CatalogNavigationSlash>
            </li>
          )}
        </React.Fragment>
      ))}
    </CatalogNavigationList>
  );
};

export default CatalogNavigation;
