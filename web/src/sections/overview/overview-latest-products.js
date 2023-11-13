import PropTypes from 'prop-types'
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon'
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon,
} from '@mui/material'

export const OverviewLatestProducts = (props) => {
  const { products = [], sx } = props

  return (
    <Card>
      <CardHeader title="Top 10 Products" />
      <List sx={sx}>
        {products.map((product, index) => {
          const hasDivider = index < products.length - 1

          return (
            <ListItem divider={hasDivider} key={product.id}>
              <ListItemText
                primary={`${++index}º  ${product.name}`}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={product.price}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              <IconButton edge="end">
                <SvgIcon>
                  <EllipsisVerticalIcon />
                </SvgIcon>
              </IconButton>
            </ListItem>
          )
        })}
      </List>
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

OverviewLatestProducts.propTypes = {
  products: PropTypes.array,
  sx: PropTypes.object,
}
