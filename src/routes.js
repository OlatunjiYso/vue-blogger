import HomeComponent from './components/HomeComponent';
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';



export const routes = [
  {name: 'home',
  path: '/posts',
  component: HomeComponent
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