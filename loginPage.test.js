const checkUser  = require('./loginPage')

test('function with no error',()=>{
    expect(checkUser('','')).toBeDefined()
})

test('function with no error',()=>{
    expect(checkUser('12','')).toBeTruthy()
})