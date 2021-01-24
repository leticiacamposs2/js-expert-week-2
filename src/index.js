// const EntityBase = require('./entityBase')
const assert = require('assert')
const Employee = require('./employee')

const GENDER = {
    male: 'male',
    female: 'female'
}

// criando dessa forma eu indico que o que está dentro de { } é um contexto
{
    const employee = new Employee({
        name: 'XuxaDaSilva',
        gender: GENDER.female
    })

    assert.throws(() => employee.birthYear, { message: 'you must define age first!!' }) //teste unitário
}

{
    const employee = new Employee({
        name: 'Joaozinho',
        age: 20,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, 'Mr. Joaozinho') //teste unitário
    assert.deepStrictEqual(employee.age, undefined) //teste unitário
    assert.deepStrictEqual(employee.gender, undefined) //teste unitário
    assert.deepStrictEqual(employee.grossPay, 0) //teste unitário
}


// console.log(new EntityBase({
    //     name: 'Leticia',
    //     gender: 'female'
    // }).name)
    
    // console.log(new EntityBase({
    //     name: 'Erick',
    //     gender: 'male'
    // }).name)
