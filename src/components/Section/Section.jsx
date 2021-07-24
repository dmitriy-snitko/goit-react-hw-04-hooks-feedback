import { Wrapper, Title } from "./Section.styles";
import PropTypes from 'prop-types';

const Section = ({ children = <div></div>, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Section;