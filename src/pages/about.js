import React from 'react';
import {graphql} from 'gatsby';
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';

export default function About({data}) {
  return (
    <LayoutDefault>
      <SectionTitleWings tag="h2">
        About {data.site.siteMetadata.title}
      </SectionTitleWings>
      <SectionContent>
        <p>
          We're the only site running on your computer dedicated to showing the
          best photos and videos of pandas eating lots of food.
        </p>
      </SectionContent>
    </LayoutDefault>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
