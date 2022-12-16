const express = require("express");

require('dotenv').config({
    path:'./config/config.env'
  });

const path = require('path')
const shortid = require('shortid')
const Razorpay = require("razorpay");
// const { Router } = require("express");

const router = express.Router();


const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_KEY_SECRET
})

let charges=0;

// router.get('/logo.svg', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'logo.svg'))
// })
router.post('/data',  (req, res) => {
	console.log("Got response: " + res.statusCode);
	charges = req.body.amount
	console.log(req.body.amount); 
})
router.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

router.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = charges
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})
// const express = require("express");

// require('dotenv').config({
//     path:'./config/config.env'
//   });

// const path = require('path')
// const shortid = require('shortid')
// // const Razorpay = require("razorpay");
// // const { Router } = require("express");
// const app = express();
// // app.use(cors());

// const router = express.Router();

// const Razorpay = require("razorpay");
// const instance = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
// });
// app.get("/order", (req, res) => {
// 	try {
// 	  const options = {
// 		amount: 10 * 100, // amount == Rs 10
// 		currency: "INR",
// 		receipt: "receipt#1",
// 		payment_capture: 0,
//    // 1 for automatic capture // 0 for manual capture
// 	  };
// 	instance.orders.create(options, async function (err, order) {
// 	  if (err) {
// 		return res.status(500).json({
// 		  message: "Something Went Wrong",
// 		});
// 	  }
// 	return res.status(200).json(order);
//    });
//   } catch (err) {
// 	return res.status(500).json({
// 	  message: "Something Went Wrong",
// 	});
//    }
//   });
//   app.post("/capture/:paymentId", (req, res) => {
// 	try {
// 	  return request(
// 	   {
// 	   method: "POST",
// 	   url: `https://${config.RAZORPAY_KEY_ID}:${config.RAZORPAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
// 	   form: {
// 		  amount: 10 * 100, // amount == Rs 10 // Same As Order amount
// 		  currency: "INR",
// 		},
// 	  },
// 	 async function (err, response, body) {
// 	   if (err) {
// 		return res.status(500).json({
// 		   message: "Something Went Wrong",
// 		 }); 
// 	   }
// 		console.log("Status:", response.statusCode);
// 		console.log("Headers:", JSON.stringify(response.headers));
// 		console.log("Response:", body);
// 		return res.status(200).json(body);
// 	  });
// 	} catch (err) {
// 	  return res.status(500).json({
// 		message: "Something Went Wrong",
// 	 });
// 	}
//   });
module.exports = router;