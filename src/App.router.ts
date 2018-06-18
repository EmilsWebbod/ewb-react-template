import AboutComponent from './modules/about/About.component';
import HomePageComponent from './modules/core/HomePage/HomePage.component';

export interface IPath {
  path?: string;
  exact?: boolean;
  component?: any;
  routes?: IPath[];
}

const routes: IPath[] = [
  {
    component: HomePageComponent,
    exact: true,
    path: '/'
  },
  {
    component: AboutComponent,
    path: '/about'
  }
];

export default routes;
