const createAnimal = require('./createAnimal')
const changeName = require('./changeName')
const changeYear = require('./changeYear')

describe('users', () => {
  const user = createAnimal(2, 'Panda', 25)

  test('creating animal', () => {
    expect(user).toStrictEqual({ id: 2, name: 'Panda', year: 25 })
  })

  test('changing animal name', () => {
    expect(changeName(user, 'Lion')).toStrictEqual({
      id: 2,
      name: 'Lion',
      year: 25,
    })
  })

  test('changing animal year', () => {
    expect(changeYear(user, 27)).toStrictEqual({
      id: 2,
      name: 'Lion',
      year: 27,
    })
  })
})
