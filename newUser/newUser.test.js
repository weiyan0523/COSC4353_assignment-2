const checkUser  = require('./newUser')

test('function with no error',()=>{
    expect(checkUser('','')).toBeDefined()
})

test('function with no error',()=>{
    expect(checkUser('hi','lol')).toBe(2)
})
test('function with no error',()=>{
    expect(checkUser('admin2','654321')).toBeTruthy()
})
