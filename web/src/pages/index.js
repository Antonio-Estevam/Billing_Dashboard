import Head from 'next/head'
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout'
import { OverviewBudget } from 'src/sections/overview/overview-budget'
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders'
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products'
import { useEffect, useState } from 'react'
import api from '../services/api'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const Page = () => {
  const [products, setProducts] = useState([])
  const [billing, setBilling] = useState({
    id: 0,
    lastHour: 0,
    lastDay: 0,
    lastMonth: 0,    
  })
  const [top10Products, setTop10Products] = useState([])

  useEffect(() => {
    try {
      api.get('billing').then((response) => {
        setBilling(response.data)
      })
      api.get('productDetails').then((response) => {
        setProducts(response.data)

        setTop10Products(
          response.data.slice(0, 10).map((product) => {
            return {
              id: product.id,
              name: product.description,
              price: product.price,
            }
          }),
        )
      })
    } catch (erro) {
      notify('Error when searching for data: ')
      console.error('Error when searching for data: ', erro.message)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Billing system</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          paddingBottom: '5px',
        }}
      ><Toaster />
        <Container maxWidth="xl">
          <Grid container spacing={3} sx={{ paddingBottom: '5px' }}>
            <Grid xs={12} sm={6} lg={4}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: '100%' }}
                value={`€ ${billing.lastHour}`}
                title="Hourly billing"
                icon="hour"
              />
            </Grid>

            <Grid xs={12} sm={6} lg={4}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: '100%' }}
                value={`€ ${billing.lastDay}`}
                title="Day billing"
                icon="day"
              />
            </Grid>

            <Grid xs={12} sm={6} lg={4}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: '100%' }}
                value={`€ ${billing.lastMonth}`}
                title="Month billing"
                icon="month"
              />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <OverviewLatestProducts
                products={top10Products}
                sx={{ height: '35vh', overflow: 'auto', marginLeft: '35px', minHeight: '250px',              
                "::-webkit-scrollbar": { width: "5px" },
                "::-webkit-scrollbar-thumb": { borderRadius: "50px", background: "#6366f126" },
                "::-webkit-scrollbar-track": { background: "#f2f4f752" }
              }
              }
              />
            </Grid>
            <Grid xs={12} md={12} lg={8}>
              <OverviewLatestOrders
                orders={products}
                sx={{
                  height: '35vh',
                  overflow: 'auto',
                  marginLeft: '35px',
                  minWidth: 550,
                  minHeight: '250px',
                  "::-webkit-scrollbar": { width: "5px" },
                  "::-webkit-scrollbar-thumb": { borderRadius: "50px", background: "#6366f126", cursor:"pointer" },
                  "::-webkit-scrollbar-track": { background: "#f2f4f752" }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Page
