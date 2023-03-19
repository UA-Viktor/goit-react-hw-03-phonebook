import React from 'react';
import { Main, Banner } from './Section.styled';

const Section = ({ text, childComponentFilter, childComponent }) => (
  <Main>
    <Banner>{text}</Banner>
    {childComponentFilter}
    {childComponent}
  </Main>
);

export default Section;
