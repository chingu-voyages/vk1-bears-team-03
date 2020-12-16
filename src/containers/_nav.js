import React from 'react'
import { faUsers, faBarcode, faPrint, faDatabase, faSave, faTachometerAlt, faFile, faKeyboard, faTint, faComment, faHdd} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "src/containers/_nav.css"


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
    name: ' Users',
    to: '/users',
    icon: <FontAwesomeIcon icon={faUsers} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: ' Assets',
    to: '/views/assets',
    icon: <FontAwesomeIcon icon={faBarcode} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Components',
    to: '/views/components',
    icon: <FontAwesomeIcon icon={faHdd} className="fonticons"/>,
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
    name: 'Consumables',
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
    _tag: 'CSidebarNavDropdown',
    name: 'Background Data',
    route: '/icons',
    icon: <FontAwesomeIcon icon={faDatabase} className="fonticons"/>,
    
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Locations',
        to: '/views/locations',
        icon: '',
        badge: {
          color: 'success',
          text: '',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Departments',
        to: '/views/departments',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Suppliers',
        to: '/views/suppliers',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Categories',
        to: '/views/categories',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Status Labels',
        to: '/views/status',
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
    ],
  },
]

