const generateDeliveryDate = (date = new Date()) => {
  const weekDay = date.getDay();
  const today = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear()
  const tuesday = 2
    // if today is Tuesday, generate for next Tuesday
  if (weekDay === 2) {
    // what is next week tuesday
    const delivery = today + 7
    const newDate = convertDate(month, delivery, year)
    return { deliveryDate: newDate, orderDate: date };
  }
  // if today is before / after Tuesday, generate for the next tuesday
  if (weekDay !== tuesday) {
    if (weekDay < tuesday) {
      const getDate = tuesday - weekDay
      const delivery = today + getDate
      const newDate = convertDate(month, delivery, year)
      return { deliveryDate: newDate, orderDate: date }
    }
    if (weekDay > tuesday) {
      const getTuesday = weekDay - tuesday
      const tuesdayDate = today - getTuesday
      // next week date
      const delivery = tuesdayDate + 7
      const newDate = convertDate(month, delivery, year)
      return { deliveryDate: newDate, orderDate: date }
  }
  }
  return 
}


const convertDate = (month, delivery, year) => Date(`${year}/${month + 1}/${delivery + 1}`);

module.exports = { generateDeliveryDate };