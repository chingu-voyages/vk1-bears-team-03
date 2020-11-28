import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
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
    name: 'Assets',
    to: '/theme/colors',
    icon: 'cil-people',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Manage Request',
    to: '/theme/typography',
    icon: 'cil-people',
  },
  /*{
    _tag: 'CSidebarNavItem',
    name: 'Manage Users',
    to: '/theme/typography',
    icon: 'cil-people',
  },*/
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Background Data',
    route: '/icons',
    icon: 'cil-storage',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Location',
        to: '/icons/coreui-icons',
        icon: 'cil-location-pin',
        badge: {
          color: 'success',
          text: '',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Department',
        to: '/icons/flags',
        icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Supplier',
        to: '/icons/brands',
        icon: 'cil-people',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Icons',
    route: '/icons',
    icon: 'cil-star',
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

