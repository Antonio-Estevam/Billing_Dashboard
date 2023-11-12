const express = require('express');
const cors = require ('cors');
const app = express();

const PORT = 3333;

app.use(cors());

const lastHourBilling = 100; 
const lastDayBilling = 500; 
const lastMonthBilling = 2000; 

const productDetails = [
        { 
            id: 1,
            brand: "Brand 1",
            category: "Category 1",
            billingDateTime: "12/11/2023 13:18Hrs",
            price: 19.99,
            description: "Product description 1"
        },
        { 
            id: 2,
            brand: "Brand 2",
            category: "Category 2",
            billingDateTime: "12/11/2023 13:15Hrs",
            price: 49.99,
            description: "Product description 2"
        },
        { 
            id: 3,
            brand: "Brand 3",
            category: "Category 3",
            billingDateTime: "12/11/2023 14:00Hrs",
            price: 29.99,
            description: "Product description 3"
        },
        { 
            id: 4,
            brand: "Brand 4",
            category: "Category 4",
            billingDateTime: "12/11/2023 14:45Hrs",
            price: 69.99,
            description: "Product description 4"
        },
        { 
            id: 5,
            brand: "Brand 5",
            category: "Category 5",
            billingDateTime: "12/11/2023 15:30Hrs",
            price: 39.99,
            description: "Product description 5"
        },
        { 
            id: 6,
            brand: "Brand 6",
            category: "Category 6",
            billingDateTime: "12/11/2023 16:15Hrs",
            price: 79.99,
            description: "Product description 6"
        },
        { 
            id: 7,
            brand: "Brand 7",
            category: "Category 7",
            billingDateTime: "12/11/2023 17:00Hrs",
            price: 129.99,
            description: "Product description 7"
        },
        { 
            id: 8,
            brand: "Brand 8",
            category: "Category 8",
            billingDateTime: "12/11/2023 17:45Hrs",
            price: 699.99,
            description: "Product description 8"
        },
        { 
            id: 9,
            brand: "Brand 9",
            category: "Category 9",
            billingDateTime: "12/11/2023 18:30Hrs",
            price: 299.99,
            description: "Product description 9"
        },
        { 
            id: 10,
            brand: "Brand 10",
            category: "Category 10",
            billingDateTime: "12/11/2023 19:15Hrs",
            price: 149.99,
            description: "Product description 10"
        },
        { 
            id: 11,
            brand: "Brand 11",
            category: "Category 11",
            billingDateTime: "12/11/2023 20:00Hrs",
            price: 59.99,
            description: "Product description 11"
        },
        { 
            id: 12,
            brand: "Brand 12",
            category: "Category 12",
            billingDateTime: "12/11/2023 20:45Hrs",
            price: 79.99,
            description: "Product description 12"
        },
        { 
            id: 13,
            brand: "Brand 13",
            category: "Category 13",
            billingDateTime: "12/11/2023 21:30Hrs",
            price: 129.99,
            description: "Product description 13"
        },
        { 
            id: 14,
            brand: "Brand 14",
            category: "Category 14",
            billingDateTime: "12/11/2023 22:15Hrs",
            price: 89.99,
            description: "Product description 14"
        },
        { 
            id: 15,
            brand: "Brand 15",
            category: "Category 15",
            billingDateTime: "12/11/2023 23:00Hrs",
            price: 29.99,
            description: "Product description 15"
        },
        { 
            id: 16,
            brand: "Brand 16",
            category: "Category 16",
            billingDateTime: "13/11/2023 00:00Hrs",
            price: 19.99,
            description: "Product description 16"
        },
        { 
            id: 17,
            brand: "Brand 17",
            category: "Category 17",
            billingDateTime: "13/11/2023 01:00Hrs",
            price: 149.99,
            description: "Product description 17"
        },
        { 
            id: 18,
            brand: "Brand 18",
            category: "Category 18",
            billingDateTime: "13/11/2023 02:00Hrs",
            price: 9.99,
            description: "Product description 18"
        },
        { 
            id: 19,
            brand: "Brand 19",
            category: "Category 19",
            billingDateTime: "13/11/2023 03:00Hrs",
            price: 299.99,
            description: "Product description 19"
        },
        { 
            id: 20,
            brand: "Brand 20",
            category: "Category 20",
            billingDateTime: "13/11/2023 04:00Hrs",
            price: 69.99,
            description: "Product description 20"
        },
        { 
            id: 21,
            brand: "Brand 21",
            category: "Category 21",
            billingDateTime: "13/11/2023 05:00Hrs",
            price: 7.99,
            description: "Product description 21"
        },
        { 
            id: 22,
            brand: "Brand 22",
            category: "Category 22",
            billingDateTime: "13/11/2023 06:00Hrs",
            price: 29.99,
            description: "Product description 22"
        },
        { 
            id: 23,
            brand: "Brand 23",
            category: "Category 23",
            billingDateTime: "13/11/2023 07:00Hrs",
            price: 14.99,
            description: "Product description 23"
        },
        { 
            id: 24,
            brand: "Brand 24",
            category: "Category 24",
            billingDateTime: "13/11/2023 08:00Hrs",
            price: 49.99,
            description: "Product description 24"
        },
        { 
            id: 25,
            brand: "Brand 25",
            category: "Category 25",
            billingDateTime: "13/11/2023 09:00Hrs",
            price: 24.99,
            description: "Product description 25"
        },
        { 
            id: 26,
            brand: "Brand 26",
            category: "Category 26",
            billingDateTime: "13/11/2023 10:00Hrs",
            price: 39.99,
            description: "Product description 26"
        },
        { 
            id: 27,
            brand: "Brand 27",
            category: "Category 27",
            billingDateTime: "13/11/2023 11:00Hrs",
            price: 34.99,
            description: "Product description 27"
        },
        { 
            id: 28,
            brand: "Brand 28",
            category: "Category 28",
            billingDateTime: "13/11/2023 12:00Hrs",
            price: 79.99,
            description: "Product description 28"
        },
        { 
            id: 29,
            brand: "Brand 29",
            category: "Category 29",
            billingDateTime: "13/11/2023 13:00Hrs",
            price: 19.99,
            description: "Product description 29"
        },
        { 
            id: 30,
            brand: "Brand 30",
            category: "Category 30",
            billingDateTime: "13/11/2023 14:00Hrs",
            price: 899.00,
            description: "Product description 30"
        }
    ];  

app.get('/billing', (req, res) => {
    const result = {
        lastHour: lastHourBilling,
        lastDay: lastDayBilling,
        lastMonth: lastMonthBilling,
    };
    res.json(result);
});


app.get('/productDetails', (req, res) => {
    res.json(productDetails);
});


app.get('/top10Products', (req, res) => {
    const top10Products = productDetails.slice(0, 10);
    res.json(top10Products);
});


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
