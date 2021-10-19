const express = require('express');
const cors = require('cors')

const transactionsRouter = require('./routes/transactions.router');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/transactions', transactionsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
