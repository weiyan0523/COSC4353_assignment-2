const checkUser  = require('./fuelQuoteForm')

test('function with no error',()=>{
    expect(checkUser('','')).toBeDefined()
})

test('testing',()=>{
    expect(checkUser('','')).toBeTruthy()
})
test('function with no error',()=>{
    expect(checkUser('wdauidhi','2138412')).toBe(0)
})
