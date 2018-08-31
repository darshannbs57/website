import React from 'react';
import { HomeComponent } from '@containers/Home';
import { withRouteData } from 'react-static';

export const HomeRouteContainer = ({ enableVideo }) => (
  <HomeComponent enableVideo={enableVideo} />
);

export default withRouteData(HomeRouteContainer);
