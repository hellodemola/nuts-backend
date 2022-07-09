let mongoose = require('mongoose');
const User = require('./schema.user')

const addNewuser = async (name, email) => {
  try {
    const newUser = User.create({
      email,
      name
    });
    return newUser
  } catch (error) 
  {
    throw new Error (error)
  }
}

const getUserByEmail = async (email) => {
  try {
    const find = await User.findOne({ email })
  
    if (find) {
      return find
    }
    return false
  } catch (error) {
      throw new Error(error)
    }
  
}

const getAllEmail = async () => {
  try {
    const findAll = User.find()
    return findAll
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { addNewuser, getAllEmail, getUserByEmail }