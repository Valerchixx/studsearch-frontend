import * as React from 'react';
import { Route } from 'react-router-dom';

import MyRatingApp from './myrating';
import Offers from './page/Offers';
import PersonalArea from '../Pages/PersonalArea/PersonalArea';

const redesignRoutes = <>
  {/* <Route path="/myrating/:page?" component={MyRatingApp} /> */}
  <Route path="/myoffers/" component={Offers} />
</>

export default redesignRoutes;