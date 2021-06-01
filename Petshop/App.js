import React from 'react';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Default from './src/screens/Default';
import Routes from './src/Routes';

export default function App() {
  return (
    <Default>
      <Routes/>
    </Default>
  )
}