
import {IPath} from '../../App.router';
import AboutUsComponent from './AboutUsComponent/AboutUs.Component';

export const aboutRoutes: IPath[] = [
  {
    component: AboutUsComponent,
    exact: true,
    path: '/about/us'
  }
];