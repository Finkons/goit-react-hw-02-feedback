import PropsType from 'prop-types';
import { SectionContainer, Title } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <Title>{title}</Title>}
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropsType.string,
};

export default Section;
