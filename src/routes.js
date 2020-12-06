// import { Category } from '@material-ui/icons';
import React from 'react';
// import Categories from './views/categories/Categories';


const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Assets = React.lazy(() => import('./views/assets/Assets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const Asset = React.lazy(() => import('./views/assets/Assets'));
const Software = React.lazy(() => import('./views/software/Software'));
const Softwares = React.lazy(() => import('./views/software/Softwares'));
const Permits = React.lazy(() => import('./views/permits/Permits'));
const Accessories = React.lazy(() => import('./views/accessories/Accessories'));
const Accessory = React.lazy(() => import('./views/accessories/Accessory'));
const Consumables = React.lazy(() => import('./views/consumable/Consumables'));
const Consumable = React.lazy(() => import('./views/consumable/Consumable'));
const Requests = React.lazy(() => import('./views/request/Requests'));
const Request = React.lazy(() => import('./views/request/Request'));
const Locations = React.lazy(() => import('./views/location/Locations'));
const Location = React.lazy(() => import('./views/location/Location'));
const Departments = React.lazy(() => import('./views/department/Departments'));
const Department = React.lazy(() => import('./views/department/Department'));
const Supplier = React.lazy(() => import('./views/supplier/Supplier'));
const Suppliers = React.lazy(() => import('./views/supplier/Suppliers'));
const AddUser = React.lazy(() => import('./views/addUser/AddUser'));
const ReportsChart = React.lazy(() => import('./views/reports/Reports'));
const SeeAllAssets = React.lazy(() => import('./views/seeallassets/SeeAllAssets'));
const Category = React.lazy(() => import('./views/categories/Category'));
const Categories = React.lazy(() => import('./views/categories/Categories'));
const Profile = React.lazy(() => import('./views/users/profile/ViewProfile'));
const UpdateUser = React.lazy(() => import('./views/users/profile/updateuser/UpdateUser'));
const CreateNewUser = React.lazy(() => import('./views/users/profile/createnewuser/CreateNewUser'));
const CreateNewSoftware = React.lazy(() => import('./views/software/createnewsoftware/CreateNewSoftware'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: './views/assets/Assets', name: 'Assets', component: Assets },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/views/addUser/', exact: true, name: 'User Registration', component: AddUser },
  { path: '/views/assets', exact: true, name: 'Assets', component: Asset },
  { path: '/views/softwares', exact: true, name: 'Softwares', component: Softwares },
  { path: '/views/softwares/:id', exact: true, name: 'Software', component: Software },
  { path: '/views/permits', exact: true, name: 'Permits', component: Permits },
  { path: '/views/accessories', exact: true, name: 'Accessories', component: Accessories },
  { path: '/views/accessories/:id', exact: true, name: 'Accessories', component: Accessory },
  { path: '/views/consumables', exact: true, name: 'Consumables', component: Consumables },
  { path: '/views/consumables/:id', exact: true, name: 'Consumable', component: Consumable },
  { path: '/views/requests', exact: true, name: 'Requests', component: Requests },
  { path: '/views/requests/:id', exact: true, name: 'Request', component: Request },
  { path: '/views/locations', exact: true, name: 'Locations', component: Locations },
  { path: '/views/locations/:id', exact: true, name: 'Location', component: Location },
  { path: '/views/departments', exact: true, name: 'Departments', component: Departments },
  { path: '/views/departments/:id', exact: true, name: 'Department', component: Department },
  { path: '/views/suppliers', exact: true, name: 'Suppliers', component: Suppliers },
  { path: '/views/suppliers/:id', exact: true, name: 'Supplier', component: Supplier },
  { path: '/views/reports', exact: true, name: 'Charts', component: ReportsChart },
  { path: '/views/seeallassets', exact: true, name: 'See All Assets', component: SeeAllAssets },
  { path: '/views/categories', exact: true, name: 'Categories', component: Categories },
  { path: '/views/categories/:id', exact: true, name: 'Category', component: Category },
  { path: '/views/users/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/views/users/profile/updateuser', exact: true, name: 'Update User', component: UpdateUser },
  { path: '/views/users/profile/createnewuser', exact: true, name: 'Create New User', component: CreateNewUser },
  { path: '/views/software/createnewsoftware', exact: true, name: 'Create New Software', component: CreateNewSoftware },
];

export default routes;
