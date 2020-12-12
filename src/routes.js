
import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
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

const ComponentAsset = React.lazy(() => import('./views/components/ComponentAsset'));
const Components = React.lazy(() => import('./views/components/Components'));
const AddUser = React.lazy(() => import('./views/addUser/AddUser'));
const ReportsChart = React.lazy(() => import('./views/reports/Reports'));
const SeeAllAssets = React.lazy(() => import('./views/seeallassets/SeeAllAssets'));
const Category = React.lazy(() => import('./views/categories/Category'));
const Categories = React.lazy(() => import('./views/categories/Categories'));
const Profile = React.lazy(() => import('./views/users/profile/ViewProfile'));
const UpdateUser = React.lazy(() => import('./views/users/profile/updateuser/UpdateUser'));
const CreateNewUser = React.lazy(() => import('./views/users/profile/createnewuser/CreateNewUser'));
const CreateNewSoftware = React.lazy(() => import('./views/software/createnewsoftware/CreateNewSoftware'));
const CreateNewPermits = React.lazy(() => import('./views/permits/createnewpermits/CreateNewPermits'));
const CreateNewAssets = React.lazy(() => import('./views/assets/createnewassets/CreateNewAssets'));
const CreateNewAccessory = React.lazy(() => import('./views/accessories/createnewaccessory/CreateNewAccessory'));
const UpdateAssets = React.lazy(() => import('./views/assets/updateassets/UpdateAssets'));
const ViewMoreAssets = React.lazy(() => import('./views/assets/viewmoreassets/ViewMoreAssets'));
const ViewMoreComponent = React.lazy(() => import('./views/components/viewmorecomponent/ViewMoreComponents'));
const CreateNewComponent = React.lazy(() => import('./views/components/createnewcomponent/CreateNewComponent'));
const ReturnAssets = React.lazy(() => import('./views/assets/returnassets/ReturnAssets'));
const BorrowAssets = React.lazy(() => import('./views/assets/borrowassets/BorrowAssets'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: './views/assets/Assets', name: 'Assets', component: Assets },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/views/addUser/', exact: true, name: 'User Registration', component: AddUser },
  { path: '/views/assets', exact: true, name: 'Assets', component: Asset },
  { path: '/views/softwares', exact: true, name: 'Softwares', component: Softwares },
  { path: '/views/softwares/:id', exact: true, name: 'Software', component: Software },
  { path: '/views/components', exact: true, name: 'Components', component: Components },
  { path: '/views/components/:id', exact: true, name: 'Component', component: ComponentAsset },

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
  { path: '/views/permits/createnewpermits', exact: true, name: 'Create New Permits', component: CreateNewPermits },
  { path: '/views/assets/createnewassets', exact: true, name: 'Create New Assets', component: CreateNewAssets },
  { path: '/views/accessories/createnewaccessory', exact: true, name: 'Create New Accessory', component: CreateNewAccessory },
  { path: '/views/assets/updateassets', exact: true, name: 'Update Assets', component: UpdateAssets },
  { path: '/views/assets/viewmoreassets', exact: true, name: 'View More Assets', component: ViewMoreAssets },
  { path: '/views/component/viewmorecomponent', exact: true, name: 'View More Components', component: ViewMoreComponent },
  { path: '/views/components/createnewcomponent', exact: true, name: 'Create New Component', component: CreateNewComponent },
  { path: '/views/assets/returnassets', exact: true, name: 'Return Assets', component: ReturnAssets },
  { path: '/views/assets/borrowassets', exact: true, name: 'Borrow Assets', component: BorrowAssets },
];

export default routes;
