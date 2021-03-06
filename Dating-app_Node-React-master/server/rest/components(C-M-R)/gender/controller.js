const Gender = require('./model');

const gender = new Gender();

async function getGenders(request, response) {
  try {
    const call = await gender.getAll();
    response.status(200).json(call);
  } catch (err) {
    if (process.env.VERBOSE === 'true') console.log(err);
    response.status(206).send(err);
  }
}

async function getGenderById(request, response) {
  const id = parseInt(request.params.id, 10);
  try {
    const call = await gender.getBy('id', id);
    response.status(200).json(call);
  } catch (err) {
    if (process.env.VERBOSE === 'true') console.log(err);
    response.status(206).send(err);
  }
}

module.exports.getGenders = getGenders;
module.exports.getGenderById = getGenderById;
