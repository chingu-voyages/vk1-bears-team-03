import React from 'react'
// import CIcon from '@coreui/icons-react'
import { faBarcode, faPrint, faDatabase, faSave, faTachometerAlt, faFile, faKeyboard, faTint, faComment, faTags} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "src/containers/_nav.css"



// import { dom } from '@fortawesome/fontawesome-svg-core';
export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <FontAwesomeIcon icon={faTachometerAlt} className="fonticons"/>,
    badge: {
      color: 'info',
      text: '',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['info']
  },
  {
    _tag: 'CSidebarNavItem',
    name: ' Assets',
    to: '/views/assets',
    icon: <FontAwesomeIcon icon={faBarcode} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Software Licenses',
    to: '/views/softwares',
    icon: <FontAwesomeIcon icon={faSave} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Government Permits',
    to: '/views/permits',
    icon: <FontAwesomeIcon icon={faFile} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Accessories',
    to: '/views/accessories',
    icon: <FontAwesomeIcon icon={faKeyboard} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Consumable',
    to: '/views/consumables',
    icon: <FontAwesomeIcon icon={faTint} className="fonticons"/>,
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Requests',
    to: '/views/requests',
    icon: <FontAwesomeIcon icon={faComment} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Generate Labels',
    to: '/views/request',
    icon: <FontAwesomeIcon icon={faTags} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Background Data',
    route: '/icons',
    icon: <FontAwesomeIcon icon={faDatabase} className="fonticons"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Location',
        to: '/views/locations',
        icon: '',
        badge: {
          color: 'success',
          text: '',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Department',
        to: '/views/departments',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Supplier',
        to: '/views/suppliers',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Categories',
        to: '/views/categories',
        icon: '',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/icons/',
    icon: <FontAwesomeIcon icon={faPrint} className="fonticons"/>,

    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Charts',
        to: '/views/reports',
        badge: {
          color: 'success',
          text: '',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
]

