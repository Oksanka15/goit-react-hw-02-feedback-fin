import {SectionStyled} from './Section.styled'

export const Section = ({ title, children }) => (
  <section>
    <SectionStyled>{title}</SectionStyled>
    {children}
  </section>
);
