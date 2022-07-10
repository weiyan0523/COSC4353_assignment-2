const checkUser  = require('./fuelQuoteForm')

test('function with no error',()=>{
    expect(checkUser('','')).toBeDefined()
})

test('function with no error',()=>{
    expect(checkUser('','')).toBeTruthy()
})

test('function with no error',()=>{
    expect(checkUser('','')).toBeFalsy()
})