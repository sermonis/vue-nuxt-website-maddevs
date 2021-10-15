import 'regenerator-runtime/runtime'
import * as controller from '../LeadsController'
import * as emailsService from '../../services/EmailsService'
import * as leadsService from '../../services/LeadsService'
import * as IPService from '../../services/IPService'

jest.mock('../../services/EmailsService', () => ({
  sendEmailToRequest: jest.fn(),
  verifyEmailDelivery: jest.fn(),
  sendMailFromVariables: jest.fn(),
}))

jest.mock('../../services/LeadsService', () => ({
  createLead: jest.fn(),
}))

jest.mock('../../services/IPService', () => ({
  getIPByRequest: jest.fn(),
  getLocationByIP: jest.fn(),
  isBlockedIP: jest.fn(),
}))
// mocks
const sendEmail = jest.fn(() => Promise.resolve({ id: '1' }))
const getDelivery = jest.fn(() => Promise.resolve({ smtp_answer_code: 200 }))
const createLead = jest.fn(() => Promise.resolve({ data: 'data' }))
const getIPByRequest = jest.fn(() => Promise.resolve('212.42.107.134'))
const getLocationByIP = jest.fn(() => Promise.resolve({
  country: 'Kyrgyzstan',
  city: 'Bishkek',
}))

emailsService.sendEmailToRequest.mockImplementation(sendEmail)
emailsService.verifyEmailDelivery.mockImplementation(getDelivery)
emailsService.sendMailFromVariables.mockImplementation(sendEmail)
leadsService.createLead.mockImplementation(createLead)
IPService.getIPByRequest.mockImplementation(getIPByRequest)
IPService.getLocationByIP.mockImplementation(getLocationByIP)

describe('leadsController', () => {
  let json
  let req
  let res

  beforeEach(() => {
    json = jest.fn(data => data)

    req = {
      body: {},
    }

    res = {
      json,
      status: jest.fn(() => ({
        json,
      })),
    }
  })

  it('should correctly handle invalid templateId in req.body', async () => {
    await controller.create(req, res)
    expect(res.status)
      .toHaveBeenCalledWith(500)
    expect(json)
      .toHaveBeenCalledWith({
        message: 'templateId key not found or incorrect',
        status: 500,
      })
  })

  it('should correctly handle invalid variables in req.body', async () => {
    req.body.templateId = 123
    await controller.create(req, res)
    expect(res.status)
      .toHaveBeenCalledWith(500)
    expect(json)
      .toHaveBeenCalledWith({
        message: 'variables key not found',
        status: 500,
      })
  })

  it('should correctly call sendEmail and createLead methods', async () => {
    IPService.isBlockedIP.mockImplementation(jest.fn(() => false))
    req.body.templateId = 123
    req.body.variables = { phoneNumber: '' }
    const data = await controller.create(req, res)
    expect(data)
      .toEqual({ data: 'data' })
    expect(emailsService.sendEmailToRequest)
      .toHaveBeenCalledTimes(1)
    expect(emailsService.verifyEmailDelivery)
      .toHaveBeenCalledTimes(1)
    expect(emailsService.sendMailFromVariables)
      .toHaveBeenCalledTimes(1)
    expect(leadsService.createLead)
      .toHaveBeenCalledTimes(1)
  })
  it('should correctly return error if user blocked', async () => {
    IPService.isBlockedIP.mockImplementation(jest.fn(() => true))
    const data = await controller.create(req, res)
    expect(data)
      .toEqual({
        message: 'templateId key not found or incorrect',
        status: 500,
      })
  })
})
