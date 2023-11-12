import PropTypes from 'prop-types'
import TimeIcon from '@heroicons/react/24/solid/ClockIcon'
import MonthIcon from '@heroicons/react/24/solid/CalendarDaysIcon'
import DaysIcon from '@heroicons/react/24/solid/CalendarIcon'
import InformationIcon from '@heroicons/react/24/solid/InformationCircleIcon'
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material'

export const OverviewBudget = (props) => {
  const { sx, value, title, icon } = props

  const iconComponents = {
    hour: <TimeIcon />,
    day: <DaysIcon />,
    month: <MonthIcon />,
    default: <InformationIcon />,
  }
  const selectedIcon = iconComponents[icon] || iconComponents.default

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {title}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: '#6366F1',
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>{selectedIcon}</SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  )
}

OverviewBudget.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
}
