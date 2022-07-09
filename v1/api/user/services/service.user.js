const { addNewuser, getUserByEmail, getAllEmail } = require('../models/modal.user.js')

const isUserExist = async (email) => {
  console.log('email', email)
  try {
    const isExist = await getUserByEmail(email);
    if (isExist) return isExist
    return false
  } catch (error) {
    throw new Error (error)
  }
}

const addNewUser = async (name, email) => {
  try {
    const checkisUser = await isUserExist(email);
    if (checkisUser) return false
    return await addNewuser(name, email)
  } catch (error)
  {
    throw new Error (error)
  }

}

const getAllUser = async () => {
  try {
    return await getAllEmail();
  } catch (error) {
    throw new Error (error)
  }
 
}

module.exports = { isUserExist, addNewUser, getAllUser }