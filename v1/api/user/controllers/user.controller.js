const { isUserExist, getAllUser, addNewUser } = require('../services/service.user')


const UserController = async (req, res) => {
  try {
    const allUser = await getAllUser();
     if (allUser.length === 0) return res.status(404).send({ message: 'No user avaliable' })
      res.send({message: "users avaliable", data: allUser});
  } catch (error) {
      res.status('400').send({ message: error })
  }
}

const UserByEmail = async (req, res) => {
  const { email } = req.query
  console.log(email)
  try {
    const isUser = await isUserExist(email);
    if (isUser) return res.send({ message: 'User exist', data: isUser })
    res.send({ message: 'User does not exist' });
  } catch (error) {
    throw new Error (error)
  }
}

const addUserController = async (req, res) => {
  const { email, name } = req.body
  try {
    const add = await addNewUser(name, email)
    if (!add) return res.status(409).send({ data: 'user aleady exist' })
    return res.status(201).send({ message: 'User added successfully', data: add })
    
  } catch (error) {
    res.status('400').send({ message: error })
  }
}

module.exports = { UserController, UserByEmail, addUserController };