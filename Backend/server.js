const express = require("express");
const app = express()
const cors = require('cors')
// const bodyParser = require('body-parser')

app.use(cors())
// app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/logo.svg', require('./router/payment'))

// app.post('/',  (req, res) => {
// 	console.log("Got response: " + res.statusCode);
// 	console.log(req.body); 
// })
app.post('/data', require('./router/payment'))

app.post('/verification', require('./router/payment'))

app.post('/razorpay', require('./router/payment'))

app.listen(5000, () => {
	console.log('Listening on 5000')
})







// const express = require("express");
// const cors = require("cors");

// require('dotenv').config({
//   path:'./config.env'
// });

// const app = express();


// const Razorpay = require("razorpay");
// const instance = new Razorpay({
//     key_id: process.env.RAZOR_PAY_KEY_ID,
//     key_secret: process.env.RAZOR_PAY_KEY_SECRET,
// });

// app.use(cors());

// app.get("/download", (req, res) => {
//     try {
//       const options = {
//         amount: 10 * 100, // amount == Rs 10
//         currency: "INR",
//         receipt: "receipt#1",
//         payment_capture: 0,
//    // 1 for automatic capture // 0 for manual capture
//       };
//     instance.orders.create(options, async function (err, order) {
//       if (err) {
//         return res.status(500).json({
//           message: "Something Went Wrong",
//         });
//       }
//     return res.status(200).json(order);
//    });
//   } catch (err) {
//     return res.status(500).json({
//       message: "Something Went Wrong",
//     });
//    }
//   });

//   app.post("/capture/:paymentId", (req, res) => {
//     try {
//       return request(
//        {
//        method: "POST",
//        url: `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
//        form: {
//           amount: 10 * 100, // amount == Rs 10 // Same As Order amount
//           currency: "INR",
//         },
//       },
//      async function (err, response, body) {
//        if (err) {
//         return res.status(500).json({
//            message: "Something Went Wrong",
//          });
//        }
//         console.log("Status:", response.statusCode);
//         console.log("Headers:", JSON.stringify(response.headers));
//         console.log("Response:", body);
//         return res.status(200).json(body);
//       });
//     } catch (err) {
//       return res.status(500).json({
//         message: "Something Went Wrong",
//      });
//     }
//   });


// app.listen(3001, () => {
//     console.log("Server is listening at http://localhost:3001");
// });