import * as React from 'react';
import Helmet from 'react-helmet';

const Head = () => (
  <Helmet titleTemplate="C°F: %s">
    <title>Emils WebBod</title>
    <meta
      name="description"
      content="content"
    />
    <meta property="og:site_name" content="site name"/>
    <meta
      property="og:image"
      content="https://www.cleverfranke.com/images/CLEVER-FRANKE-Data-Visualization.jpg"
    />
    <meta property="og:locale" content="no_NB"/>
    <meta property="og:title" content="Emils WebBod"/>
    <meta
      property="og:description"
      content="Shop"
    />
    <meta property="og:card" content="summary"/>
    <meta property="og:site" content="@Emil's Webbod"/>
    <meta property="og:creator" content="@Emil's Webbod"/>
    <meta property="og:image:width" content="200"/>
    <meta property="og:image:height" content="200"/>
  </Helmet>
);

export default Head;
