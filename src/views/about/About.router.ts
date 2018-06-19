import { IPath } from '../../App.router';
import AboutUsComponent from './AboutUsComponent/AboutUs.component';

export const aboutRoutes: IPath[] = [
  {
    component: AboutUsComponent,
    exact: true,
    path: '/about/us'
  }
];