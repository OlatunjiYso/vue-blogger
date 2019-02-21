import HomeComponent from './components/HomeComponent';
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import BlogComponent from './components/BlogComponent';


export const routes = [
{
  name: 'home',
  path: '/blogposts',
  component: HomeComponent
},
{
  name: 'blog',
  path: '/blogpost/:id',
  component: BlogComponent
},
{
  name: 'create',
  path: '/create',
  component: CreateComponent
},
{
  name: 'edit',
  path: '/edit/:id',
  component: EditComponent
},
{ 
  path: '*', 
  redirect: '/posts' 
},
]