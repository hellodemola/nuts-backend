const { format } = require('date-fns')

const formatDate = (date) => format(date, 'MM/dd/yyyy')

module.exports = { formatDate }