const { sendMailFromVariables, sendEmailToRequest, verifyEmailDelivery } = require('../services/EmailsService')
const { createLead } = require('../services/LeadsService')
const { validate } = require('../utils/validation')

async function create(req, res) {
  const { isValid, error } = validate(req, 'email')
  if (!isValid) return res.status(error.status).json(error)

  const delivery = await sendEmailToRequest(req.body)
  const deliveryReport = await verifyEmailDelivery(delivery.id)
  if (deliveryReport.smtp_answer_code === 550 && req.body.variables.phoneNumber === '') return res.json({ error: deliveryReport?.smtp_answer_code })

  await sendMailFromVariables(req.body)
  const response = await createLead(req)

  return res.json(response)
}

module.exports = {
  create,
}
