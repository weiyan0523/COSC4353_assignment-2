const updateInfo  = require('./afterlogin')

test('function with no error',()=>{
    expect(checkUser('','')).toBeDefined()
})

test('testing',()=>{
    expect(checkUser('','')).toBeTruthy()
})
test('function with no error',()=>{
    expect(checkUser('wdauidhi','2138412','dwaad','dsads','fsrfsg','wei Yan')).toBe(0)
})
