const express = require('express');
const { Transaction } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const transactionsFromDB = await Transaction.findAll();
    const transactions = transactionsFromDB.map((transaction) => {
      return {
        id: transaction.id,
        text: transaction.text,
        amount: transaction.amount
      }
    })
    res.json(transactions);
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

router.post('/', async (req, res) => {
  try {
    const { text, amount } = req.body;
    console.log(req.body);
    const transaction = await Transaction.create({
      text,
      amount
    });
    res.json(transaction);
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Transaction.destroy({
      where: {
        id,
      }
    });
    res.json({ isTransactionDeleted: true });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
