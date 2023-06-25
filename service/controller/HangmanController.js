const db = require('../models');

const Words = db.Word;

export const getWords =async (req, res) =>{
  let words = await Words.findAll({
    attributes : ['name']
  })
  res.send(words);
}