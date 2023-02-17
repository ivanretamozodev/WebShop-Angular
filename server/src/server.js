require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { checkoutController } = require('./controllers/checkout.controller');
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/checkout', checkoutController);

app.listen(PORT, () => {
  console.log(`Server running at port ->> ${PORT}`);
});
