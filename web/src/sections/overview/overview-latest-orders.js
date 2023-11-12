import PropTypes from 'prop-types'
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { Scrollbar } from 'src/components/scrollbar'
import { SeverityPill } from 'src/components/severity-pill'

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error',
}
export const OverviewLatestOrders = (props) => {
  const { orders = [], sx } = props
  return (
    <Card>
      <CardHeader title="Summary" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={sx}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>category</TableCell>
                <TableCell sortDirection="desc">Date</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                return (
                  <TableRow hover key={order.id}>
                    <TableCell>{order.description}</TableCell>
                    <TableCell>{order.brand}</TableCell>
                    <TableCell>{order.category}</TableCell>
                    <TableCell>{order.billingDateTime}</TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[order.status]}>
                        {order.price}
                      </SeverityPill>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  )
}

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
}
