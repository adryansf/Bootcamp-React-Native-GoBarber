import React from 'react';
import { useSelector } from 'react-redux';

import Auth from './auth.routes';
import Default from './default.routes';

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);

  if (!signed) {
    return <Auth />;
  }

  return <Default />;
}
