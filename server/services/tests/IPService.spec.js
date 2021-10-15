import 'regenerator-runtime'
import fetch from 'node-fetch'
import * as IPService from '../IPService'

jest.mock('node-fetch', () => (
  {
    default: jest.fn(),
  }
))

jest.mock('../../config/env', () => ({
  IP_BAN_LIST: '212.42.107.138, 212.42.107.133',
}))

const getLocationData = locationData => Promise.resolve({
  json: jest.fn(() => Promise.resolve(locationData)),
})

describe('IPService', () => {
  it('should correctly return IP by request', async () => {
    const requestData = {
      headers: {
        'x-forwarded-for': '212.42.107.138',
      },
    }
    const userIP = IPService.getIPByRequest(requestData)
    expect(userIP)
      .toBe(requestData.headers['x-forwarded-for'])
  })

  it('should correctly return True if user blocked', async () => {
    const IP = '212.42.107.138'

    const isBlocked = IPService.isBlockedIP(IP)
    expect(isBlocked)
      .toBeTruthy()
  })

  it('should correctly return Location by IP', async () => {
    fetch.default.mockImplementation(() => getLocationData({
      city: 'bishkek',
      country: 'Kyrgyzstan',
    }))

    const location = await IPService.getLocationByIP()
    expect(location)
      .toEqual({
        city: 'bishkek',
        country: 'Kyrgyzstan',
      })
  })
  it('should correctly return Location by IP (alternative case)', async () => {
    fetch.default.mockImplementation(() => getLocationData({}))

    const location = await IPService.getLocationByIP()
    expect(location)
      .toEqual({
        city: '-',
        country: '-',
      })
  })
})
