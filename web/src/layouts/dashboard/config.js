import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon'
import CogIcon from '@heroicons/react/24/solid/CogIcon'
import UserIconLogout from '@heroicons/react/24/solid/ArrowRightOnRectangleIcon'
import { SvgIcon } from '@mui/material'

export const items = [
  {
    title: 'Dashboard',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'Logout',
    path: '/auth/login',
    icon: (
      <SvgIcon fontSize="small">
        <UserIconLogout />
      </SvgIcon>
    ),
  },
]
