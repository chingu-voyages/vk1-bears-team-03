
import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));

const Assets = React.lazy(() => import('./views/assets/Assets'));
const Asset = React.lazy(() => import('./views/assets/Assets'));
const AddAsset = React.lazy(() => import('./views/assets/addasset/AddAsset'));

const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const AddUser = React.lazy(() => import('./views/users/adduser/AddUser'));

const Software = React.lazy(() => import('./views/software/Software'));
const Softwares = React.lazy(() => import('./views/software/Softwares'));
const AddSoftware = React.lazy(() => import('./views/software/addSoftware/AddSoftware'));

const Permits = React.lazy(() => import('./views/permits/Permits'));
const AddPermit = React.lazy(() => import('./views/permits/addpermit/AddPermit'));

const Accessories = React.lazy(() => import('./views/accessories/Accessories'));
const Accessory = React.lazy(() => import('./views/accessories/Accessory'));
const AddAccessory = React.lazy(() => import('./views/accessories/addaccessory/AddAccessory'));

const Consumables = React.lazy(() => import('./views/consumable/Consumables'));
const Consumable = React.lazy(() => import('./views/consumable/Consumable'));
const AddConsumable = React.lazy(() => import('./views/consumable/addconsumable/AddConsumable'));

const Requests = React.lazy(() => import('./views/request/Requests'));
const Request = React.lazy(() => import('./views/request/Request'));

const Locations = React.lazy(() => import('./views/location/Locations'));
const Location = React.lazy(() => import('./views/location/Location'));
const AddLocation = React.lazy(() => import('./views/location/addlocation/AddLocation'));

const Departments = React.lazy(() => import('./views/department/Departments'));
const Department = React.lazy(() => import('./views/department/Department'));
const AddDepartment = React.lazy(() => import('./views/department/adddepartment/AddDepartment'));

const Supplier = React.lazy(() => import('./views/supplier/Supplier'));
const Suppliers = React.lazy(() => import('./views/supplier/Suppliers'));
const AddSupplier = React.lazy(() => import('./views/supplier/addsupplier/AddSupplier'));

const ComponentAsset = React.lazy(() => import('./views/component/ComponentAsset'));
const Components = React.lazy(() => import('./views/component/Components'));

const ReportsChart = React.lazy(() => import('./views/reports/Reports'));
const SeeAllAssets = React.lazy(() => import('./views/seeallassets/SeeAllAssets'));
const Category = React.lazy(() => import('./views/categories/Category'));
const Categories = React.lazy(() => import('./views/categories/Categories'));
// const Profile = React.lazy(() => import('./views/users/profile/ViewProfile'));
const UpdateUser = React.lazy(() => import('./views/users/profile/updateuser/UpdateUser'));


const CreateNewAccessory = React.lazy(() => import('./views/accessories/addaccessory/AddAccessory'));
const AddComponent = React.lazy(() => import('./views/component/addComponent/AddComponent'));

const StatusLabel = React.lazy(() => import('./views/status/StatusLabel'));
const StatusLabels = React.lazy(() => import('./views/status/StatusLabels'));

const ViewMoreAssets = React.lazy(() => import('./views/assets/viewmoreassets/ViewMoreAssets'));

const UpdateAssets = React.lazy(() => import('./views/assets/updateassets/UpdateAssets'));

const BorrowAssets = React.lazy(() => import('./views/assets/borrowassets/BorrowAssets'));

const ReturnAssets = React.lazy(() => import('./views/assets/returnassets/ReturnAssets'));

const UpdateComponents = React.lazy(() => import('./views/component/updatecomponent/UpdateComponent'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/views/assets/Assets', name: 'Assets', component: Assets },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/user/:id', exact: true, name: 'User Details', component: User },
  { path: '/users/adduser', exact: true, name: 'User Registration', component: AddUser },

  { path: '/views/assets', exact: true, name: 'Assets', component: Asset },
  { path: '/views/assets/addasset', exact: true, name: 'Create New Assets', component: AddAsset },

  { path: '/views/softwares', exact: true, name: 'Softwares', component: Softwares },
  { path: '/views/software/:id', exact: true, name: 'Software', component: Software },
  { path: '/views/softwares/addsoftware', exact: true, name: 'Add New Software', component: AddSoftware },

  { path: '/views/components', exact: true, name: 'Components', component: Components },
  { path: '/views/component/:id', exact: true, name: 'Component', component: ComponentAsset },
  { path: '/views/components/addcomponent', exact: true, name: 'Add New Component', component: AddComponent },

  { path: '/views/permits', exact: true, name: 'Permits', component: Permits },
  { path: '/views/permits/addpermit', exact: true, name: 'Add New Permit', component: AddPermit },

  { path: '/views/accessories', exact: true, name: 'Accessories', component: Accessories },
  { path: '/views/accessory/:id', exact: true, name: 'Accessories', component: Accessory },
  { path: '/views/accessories/addaccessory', exact: true, name: 'Add New Accessory', component: AddAccessory },

  { path: '/views/consumables', exact: true, name: 'Consumables', component: Consumables },
  { path: '/views/consumable/:id', exact: true, name: 'Consumable', component: Consumable },
  { path: '/views/consumables/addconsumable', exact: true, name: 'Add New Consumable', component: AddConsumable },

  { path: '/views/requests', exact: true, name: 'Requests', component: Requests },
  { path: '/views/requests/:id', exact: true, name: 'Request', component: Request },

  { path: '/views/locations', exact: true, name: 'Locations', component: Locations },
  { path: '/views/location/:id', exact: true, name: 'Location', component: Location },
  { path: '/views/locations/addlocation', exact: true, name: 'Add New Location', component: AddLocation },

  { path: '/views/departments', exact: true, name: 'Departments', component: Departments },
  { path: '/views/department/:id', exact: true, name: 'Department', component: Department },
  { path: '/views/departments/adddepartment', exact: true, name: 'Add New Department', component: AddDepartment },

  { path: '/views/suppliers', exact: true, name: 'Suppliers', component: Suppliers },
  { path: '/views/supplier/:id', exact: true, name: 'Supplier', component: Supplier },
  { path: '/views/suppliers/addsupplier', exact: true, name: 'Add New Supplier', component: AddSupplier },

  { path: '/views/reports', exact: true, name: 'Charts', component: ReportsChart },
  { path: '/views/seeallassets', exact: true, name: 'See All Assets', component: SeeAllAssets },
  { path: '/views/categories', exact: true, name: 'Categories', component: Categories },
  { path: '/views/categories/:id', exact: true, name: 'Category', component: Category },
  // { path: '/views/users/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/views/users/profile/updateuser', exact: true, name: 'Update User', component: UpdateUser },
  
  { path: '/views/accessories/createnewaccessory', exact: true, name: 'Create New Accessory', component: CreateNewAccessory },
  

  { path: '/views/status', exact: true, name: 'Status Lables', component: StatusLabels },
  { path: '/views/status/:id', exact: true, name: 'Status Label', component: StatusLabel },
  { path: '/views/assets/viewmoreassets', exact: true, name: 'View More Assets', component: ViewMoreAssets },
  { path: '/views/assets/updateassets', exact: true, name: 'Update Assets', component: UpdateAssets },

  { path: '/views/assets/borrowassets', exact: true, name: 'Borrow Assets', component: BorrowAssets },

  { path: '/views/assets/returnassets', exact: true, name: 'Return Assets', component: ReturnAssets },

  { path: '/views/component/updatecomponent', exact: true, name: 'Update Component', component: UpdateComponents },

];

export default routes;
