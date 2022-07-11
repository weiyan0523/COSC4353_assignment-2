const checkUser  = require('./loginPage')

test('function with no error',()=>{
    expect(checkUser('','')).toBeDefined()
})

test('function with no error',()=>{
    expect(checkUser('12','d')).toBe(2)
})
test('function with no error',()=>{
    expect(checkUser('admin1','123456')).toBe(0)
})

