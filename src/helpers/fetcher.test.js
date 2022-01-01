import { parseParameters } from './fetcher'

describe('Fetcher helper', () => {
  it('empty object to be an empty string', () => {
    const parsedParameters = parseParameters({ })

    expect(parsedParameters).toBe('')
  })

  it('parse a parameter', () => {
    const parsedParameters = parseParameters({ key: 'value' })

    expect(parsedParameters).toBe('key=value')
  })

  it('parse multiple parameters', () => {
    const parsedParameters = parseParameters({
      param1: 'value',
      param2: 'second parameter',
    })

    expect(parsedParameters).toBe('param1=value&param2=second parameter')
  })
})
