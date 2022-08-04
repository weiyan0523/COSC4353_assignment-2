const updateInfo  = require('./afterlogin')

test('function with no error',()=>{
    expect(updateInfo('','')).toBeDefined()
})

test('testing',()=>{
    expect(updateInfo('','')).toBeTruthy()
})
test('function with no error',()=>{
    expect(updateInfo('wdauidhi','2138412','dwaad','dsads','fsrfsg','wei Yan')).toBe(0)
})
