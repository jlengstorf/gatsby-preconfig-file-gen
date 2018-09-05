import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 2)}</pre>}
  />
);
