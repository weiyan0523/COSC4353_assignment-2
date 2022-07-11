const checkUser  = require('./fuelQuoteForm')

test('function with no error',()=>{
    expect(checkUser('','')).toBeDefined()
})

test('testing',()=>{
    expect(checkUser('','')).toBeTruthy()
})
