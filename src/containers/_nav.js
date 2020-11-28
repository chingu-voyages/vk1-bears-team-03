import React from 'react'
import CIcon from '@coreui/icons-react'
import { faBarcode, faPrint, faDatabase, faSave, faTachometerAlt, faFile  } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
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
    to: '/theme/colors',
    icon: <FontAwesomeIcon icon={faBarcode} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Software Licenses',
    to: '/theme/colors',
    icon: <FontAwesomeIcon icon={faSave} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Permits',
    to: '/theme/colors',
    icon: <FontAwesomeIcon icon={faFile} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Accessories',
    to: '/theme/colors',
    icon: <FontAwesomeIcon icon={faKeyboard} className="fonticons"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Consumable',
    to: '/theme/colors',
    icon: <FontAwesomeIcon icon={faTint} className="fonticons"/>,
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Manage Request',
    to: '/theme/typography',
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
        name: 'Location',
        to: '/icons/coreui-icons',
        icon: '',
        badge: {
          color: 'success',
          text: '',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Department',
        to: '/icons/flags',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Supplier',
        to: '/icons/brands',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Categories',
        to: '/icons/brands',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Status',
        to: '/icons/brands',
        icon: '',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/icons',
    icon: <FontAwesomeIcon icon={faPrint} className="fonticons"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
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

