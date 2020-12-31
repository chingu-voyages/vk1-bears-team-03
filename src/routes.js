
import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));

////////////////////////////// Assets //////////////////////////////////

const Assets = React.lazy(() => import('./views/assets/Assets'));
const UpdateAsset = React.lazy(() => import('./views/assets/updateassets/UpdateAsset'));
// const Asset = React.lazy(() => import('./views/assets/Assets'));
const AddAsset = React.lazy(() => import('./views/assets/addasset/AddAsset'));
const ViewMoreAssets = React.lazy(() => import('./views/assets/viewmoreassets/ViewMoreAssets'));
const BorrowAssets = React.lazy(() => import('./views/assets/borrowassets/BorrowAssets'));
const ReturnAssets = React.lazy(() => import('./views/assets/returnassets/ReturnAssets'));



////////////////////////////// Users //////////////////////////////////

const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const AddUser = React.lazy(() => import('./views/users/adduser/AddUser'));
const SeeAllAssets = React.lazy(() => import('./views/seeallassets/SeeAllAssets'));


////////////////////////////// Softwares //////////////////////////////////

const Software = React.lazy(() => import('./views/softwares/Software'));
const Softwares = React.lazy(() => import('./views/softwares/Softwares'));
const AddSoftware = React.lazy(() => import('./views/softwares/addSoftware/AddSoftware'));
const UpdateSoftware = React.lazy(() => import('./views/softwares/updatesoftware/UpdateSoftware'));
const ViewMoreSoftware = React.lazy(() => import('./views/softwares/viewmoresoftware/ViewMoreSoftware'));
const BorrowSoftware = React.lazy(() => import('./views/softwares/borrowsoftware/BorrowSoftware'));
const ReturnSoftware = React.lazy(() => import('./views/softwares/returnsoftware/ReturnSoftware'));


////////////////////////////// Permits //////////////////////////////////

const Permits = React.lazy(() => import('./views/permits/Permits'));
const AddPermit = React.lazy(() => import('./views/permits/addpermit/AddPermit'));
const ViewMorePermit = React.lazy(() => import('./views/permits/viewmorepermit/ViewMorePermit'));
const UpdatePermit = React.lazy(() => import('./views/permits/updatepermit/UpdatePermit'));
const BorrowPermit = React.lazy(() => import('./views/permits/borrowpermit/BorrowPermit'));
const ReturnPermit = React.lazy(() => import('./views/permits/returnpermit/ReturnPermit'));


////////////////////////////// Accessories //////////////////////////////////


const Accessories = React.lazy(() => import('./views/accessories/Accessories'));
const Accessory = React.lazy(() => import('./views/accessories/Accessory'));
const AddAccessory = React.lazy(() => import('./views/accessories/addaccessory/AddAccessory'));
const CreateNewAccessory = React.lazy(() => import('./views/accessories/addaccessory/AddAccessory'));
const UpdateAccessory = React.lazy(() => import('./views/accessories/updateaccessory/UpdateAccessory'));
const ViewMoreAccessory = React.lazy(() => import('./views/accessories/viewmoreaccessory/ViewMoreAccessory'));
const BorrowAccessory = React.lazy(() => import('./views/accessories/borrowaccessory/BorrowAccessory'));
const ReturnAccessory = React.lazy(() => import('./views/accessories/returnaccessory/ReturnAccessory'));


////////////////////////////// Consumables //////////////////////////////////


const Consumables = React.lazy(() => import('./views/consumables/Consumables'));
const Consumable = React.lazy(() => import('./views/consumables/Consumable'));
const AddConsumable = React.lazy(() => import('./views/consumables/addconsumable/AddConsumable'));
const ViewMoreConsumable = React.lazy(() => import('./views/consumables/viewmoreconsumble/ViewMoreConsumable'));
const UpdateConsumable = React.lazy(() => import('./views/consumables/updateconsumable/UpdateConsumable'));
const BorrowConsumable = React.lazy(() => import('./views/consumables/borrowconsumable/BorrowConsumable'));


////////////////////////////// Request //////////////////////////////////


const Requests = React.lazy(() => import('./views/request/Requests'));
const Request = React.lazy(() => import('./views/request/Request'));

////////////////////////////// Locations //////////////////////////////////

const Locations = React.lazy(() => import('./views/locations/Locations'));
const Location = React.lazy(() => import('./views/locations/Location'));
const AddLocation = React.lazy(() => import('./views/locations/addlocation/AddLocation'));
const UpdateLocation = React.lazy(() => import('./views/locations/updatelocation/UpdateLocation'));
const ViewMoreLocation = React.lazy(() => import('./views/locations/viewmorelocation/ViewMoreLocation'));
const ViewMoreDepartment = React.lazy(() => import('./views/departments/viewmoredepartment/ViewMoreDepartment'));

////////////////////////////// Departments //////////////////////////////////

const Departments = React.lazy(() => import('./views/departments/Departments'));
const Department = React.lazy(() => import('./views/departments/Department'));
const AddDepartment = React.lazy(() => import('./views/departments/adddepartment/AddDepartment'));
const UpdateDepartment = React.lazy(() => import('./views/departments/updatedepartment/UpdateDepartment'));


////////////////////////////// Suppliers //////////////////////////////////

const Supplier = React.lazy(() => import('./views/suppliers/Supplier'));
const Suppliers = React.lazy(() => import('./views/suppliers/Suppliers'));
const AddSupplier = React.lazy(() => import('./views/suppliers/addsupplier/AddSupplier'));
const ViewMoreSupplier = React.lazy(() => import('./views/suppliers/viewmoresupplier/ViewMoreSupplier'));
const UpdateSupplier = React.lazy(() => import('./views/suppliers/updatesupplier/UpdateSupplier'));



////////////////////////////// Component //////////////////////////////////

const ComponentAsset = React.lazy(() => import('./views/components/ComponentAsset'));
const Components = React.lazy(() => import('./views/components/Components'));
const AddComponent = React.lazy(() => import('./views/components/addComponent/AddComponent'));
const UpdateComponent = React.lazy(() => import('./views/components/updatecomponent/UpdateComponent'));
const ViewMoreComponent = React.lazy(() => import('./views/components/viewmorecomponent/ViewMoreComponents'));
const BorrowComponent = React.lazy(() => import('./views/components/borrowcomponent/BorrowComponent'));
const ReturnComponent = React.lazy(() => import('./views/components/returncomponent/ReturnComponent'));


////////////////////////////// Reports //////////////////////////////////


const ReportsChart = React.lazy(() => import('./views/reports/Reports'));

////////////////////////////// Categories //////////////////////////////////

const Category = React.lazy(() => import('./views/categories/Category'));
const Categories = React.lazy(() => import('./views/categories/Categories'));
const AddCategory = React.lazy(() => import('./views/categories/addcategory/AddCategory'));
// const ViewMoreCategory = React.lazy(() => import('./views/categories/viewmorecategory/ViewMoreCategory'));
const UpdateCategory = React.lazy(() => import('./views/categories/updatecategory/UpdateCategory'));




////////////////////////////// Profile //////////////////////////////////

const Profile = React.lazy(() => import('./views/profile/Profile'));




// const StatusLabel = React.lazy(() => import('./views/status/StatusLabel'));
// const StatusLabels = React.lazy(() => import('./views/status/StatusLabels'));
// const AddStatus = React.lazy(() => import('./views/status/addstatus/AddStatus'));

// const UpdateStatus = React.lazy(() => import('./views/status/updatestatus/UpdateStatus'));

// const ViewMoreStatus = React.lazy(() => import('./views/status/viewmorestatus/ViewMoreStatus'));

// const Acceptance = React.lazy(() => import('./views/acceptance/Acceptance'));




const routes = [
  

  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  // { path: '/views/assets/Assets', name: 'Assets', component: Assets },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  
  ////////////////////////////// Users //////////////////////////////////

  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/user/:id', exact: true, name: 'User Details', component: User },
  { path: '/users/adduser', exact: true, name: 'User Registration', component: AddUser },
  { path: '/views/seeallassets', exact: true, name: 'See All Assets', component: SeeAllAssets },

  ////////////////////////////// Profile //////////////////////////////////

  { path: '/users/profile', exact: true, name: 'Profile', component: Profile },

  ////////////////////////////// Assets //////////////////////////////////

  { path: '/assets', exact: true, name: 'Assets', component: Assets },
  { path: '/assets/addasset', exact: true, name: 'Create New Assets', component: AddAsset },
  { path: '/views/assets/viewmoreassets', exact: true, name: 'View More Assets', component: ViewMoreAssets },
  { path: '/assets/updateasset/:id', exact: true, name: 'Update Assets', component: UpdateAsset },
  { path: '/views/assets/borrowassets', exact: true, name: 'Borrow Assets', component: BorrowAssets },
  { path: '/views/assets/returnassets', exact: true, name: 'Return Assets', component: ReturnAssets },


  ////////////////////////////// Softwares //////////////////////////////////
  
  { path: '/views/softwares', exact: true, name: 'Softwares', component: Softwares },
  { path: '/views/software/:id', exact: true, name: 'Software', component: Software },
  { path: '/views/softwares/addsoftware', exact: true, name: 'Add New Software', component: AddSoftware },
  { path: '/views/softwares/updatesoftware', exact: true, name: 'Update Software', component: UpdateSoftware },
  { path: '/views/softwares/viewmoresoftware', exact: true, name: 'View More Software', component: ViewMoreSoftware },
  { path: '/views/softwares/borrowsoftware', exact: true, name: 'Borrow Software', component: BorrowSoftware },
  { path: '/views/softwares/returnsoftware', exact: true, name: 'Return Software', component: ReturnSoftware },


  ////////////////////////////// Component //////////////////////////////////
  
  
  { path: '/views/components', exact: true, name: 'Components', component: Components },
  { path: '/views/component/:id', exact: true, name: 'Component', component: ComponentAsset },
  { path: '/views/components/addcomponent', exact: true, name: 'Add New Component', component: AddComponent },
  { path: '/views/components/updatecomponent', exact: true, name: 'Update Component', component: UpdateComponent },
  { path: '/views/components/viewmorecomponent', exact: true, name: 'View More Component', component: ViewMoreComponent },
  { path: '/views/components/borrowcomponent', exact: true, name: 'Borrow Component', component: BorrowComponent },
  { path: '/views/components/returncomponent', exact: true, name: 'Return Component', component: ReturnComponent },
  

   ////////////////////////////// Permits //////////////////////////////////

  { path: '/views/permits', exact: true, name: 'Permits', component: Permits },
  { path: '/views/permits/addpermit', exact: true, name: 'Add New Permit', component: AddPermit },
  { path: '/views/permits/viewmorepermit', exact: true, name: 'View More Permit', component: ViewMorePermit },
  { path: '/views/permits/updatepermit', exact: true, name: 'Update Permit', component: UpdatePermit },
  { path: '/views/permits/borrowpermit', exact: true, name: 'Update Permit', component: BorrowPermit },
  { path: '/views/permits/returnpermit', exact: true, name: 'Return Permit', component: ReturnPermit },


  ////////////////////////////// Accessories //////////////////////////////////

  { path: '/views/accessories', exact: true, name: 'Accessories', component: Accessories },
  { path: '/views/accessory/:id', exact: true, name: 'Accessories', component: Accessory },
  { path: '/views/accessories/addaccessory', exact: true, name: 'Add New Accessory', component: AddAccessory },
  { path: '/views/accessories/createnewaccessory', exact: true, name: 'Create New Accessory', component: CreateNewAccessory },
  { path: '/views/accessories/updateaccessory', exact: true, name: 'Update Accessory', component: UpdateAccessory },
  { path: '/views/accessories/viewmoreaccessory', exact: true, name: 'View More Accessory', component: ViewMoreAccessory },
  { path: '/views/accessories/borrowaccessory', exact: true, name: 'Borrow Accessory', component: BorrowAccessory },
  { path: '/views/accessories/returnaccessory', exact: true, name: 'Return Accessory', component: ReturnAccessory },


  ////////////////////////////// Consumables //////////////////////////////////

  { path: '/views/consumables', exact: true, name: 'Consumables', component: Consumables },
  { path: '/views/consumable/:id', exact: true, name: 'Consumable', component: Consumable },
  { path: '/views/consumables/addconsumable', exact: true, name: 'Add New Consumable', component: AddConsumable },
  { path: '/views/consumables/viewmoreconsumable', exact: true, name: 'View More Consumable', component: ViewMoreConsumable },
  { path: '/views/consumables/updateconsumable', exact: true, name: 'Update Consumable', component: UpdateConsumable },
  { path: '/views/consumables/borrowconsumable', exact: true, name: 'Borrow Consumable', component: BorrowConsumable },


  ////////////////////////////// Request //////////////////////////////////

  { path: '/views/requests', exact: true, name: 'Requests', component: Requests },
  { path: '/views/requests/:id', exact: true, name: 'Request', component: Request },

  ////////////////////////////// Locations //////////////////////////////////

  { path: '/locations', exact: true, name: 'Locations', component: Locations },
  { path: '/views/location/:id', exact: true, name: 'Location', component: Location },
  { path: '/locations/addlocation', exact: true, name: 'Add New Location', component: AddLocation },
  { path: '/locations/updatelocation/:id', exact: true, name: 'Update Location', component: UpdateLocation },
  { path: '/views/locations/viewmorelocation', exact: true, name: 'View More Location', component: ViewMoreLocation },

  ////////////////////////////// Departments //////////////////////////////////

  { path: '/departments', exact: true, name: 'Departments', component: Departments },
  { path: '/department/:id', exact: true, name: 'Department', component: Department },
  { path: '/departments/adddepartment', exact: true, name: 'Add New Department', component: AddDepartment },
  { path: '/views/departments/viewmoredepartment', exact: true, name: 'View More Department', component: ViewMoreDepartment },
  { path: '/departments/updatedepartment/:id', exact: true, name: 'Update Department', component: UpdateDepartment },


  ////////////////////////////// Suppliers //////////////////////////////////

  { path: '/suppliers', exact: true, name: 'Suppliers', component: Suppliers },
  { path: '/supplier/:id', exact: true, name: 'Supplier', component: Supplier },
  { path: '/suppliers/addsupplier', exact: true, name: 'Add New Supplier', component: AddSupplier },
  { path: '/views/suppliers/viewmoresupplier', exact: true, name: 'View More Supplier', component: ViewMoreSupplier },
  { path: '/suppliers/updatesupplier/:id', exact: true, name: 'Update Supplier', component: UpdateSupplier },


  ////////////////////////////// Reports //////////////////////////////////

  { path: '/views/reports', exact: true, name: 'Charts', component: ReportsChart },

  ////////////////////////////// Categories //////////////////////////////////
  { path: '/categories/addcategory', exact: true, name: 'Add Category', component: AddCategory },
  { path: '/categories', exact: true, name: 'Categories', component: Categories },
  { path: '/categories/:id', exact: true, name: 'Category', component: Category },
    // { path: '/views/categoriesmodule/viewmorecategory', exact: true, name: 'View More Category', component: ViewMoreCategory },
  { path: '/categories/updatecategory/:id', exact: true, name: 'Update Category', component: UpdateCategory },


  // { path: '/views/status', exact: true, name: 'Status Lables', component: StatusLabels },
  // { path: '/views/status/:id', exact: true, name: 'Status Label', component: StatusLabel },
  // { path: '/status/addstatus', exact: true, name: 'Add Status', component: AddStatus },
  // { path: '/views/status/updatestatus', exact: true, name: 'Update Status', component: UpdateStatus },
  // { path: '/views/status/viewmorestatus', exact: true, name: 'View More Status', component: ViewMoreStatus },
  // { path: '/views/acceptance', exact: true, name: 'Acceptance', component: Acceptance },


  
];

export default routes;