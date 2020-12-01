import React from 'react'
// import CIcon from '@coreui/icons-react'
import { faBarcode, faPrint, faDatabase, faSave, faTachometerAlt, faFile, faKeyboard, faTint, faComment} from "@fortawesome/free-solid-svg-icons";
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
    name: ' Assets',
    to: '/views/assets',
    icon: <FontAwesomeIcon icon={faBarcode} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Software Licenses',
    to: '/views/software',
    icon: <FontAwesomeIcon icon={faSave} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Permits',
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
    to: '/views/consumable',
    icon: <FontAwesomeIcon icon={faTint} className="fonticons"/>,
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Manage Request',
    to: '/views/request',
    icon: <FontAwesomeIcon icon={faComment} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Background Data',
    icon: <FontAwesomeIcon icon={faDatabase} className="fonticons"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Location',
        to: '/views/location',
        icon: '',
        badge: {
          color: 'success',
          text: '',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Department',
        to: '/views/department',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Supplier',
        to: '/views/supplier',
        icon: '',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Reports',
    to: '/views/reports',
    icon: <FontAwesomeIcon icon={faPrint} className="fonticons"/>,
  }
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Reports',
  //   route: '/icons',
  //   icon: <FontAwesomeIcon icon={faPrint} className="fonticons"/>,
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  

  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // }
]

