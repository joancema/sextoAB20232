//cuarto
const getPokemonById = require('./cuarto');


getPokemonById(4)
  .then( ( pokemon ) => console.log({ pokemon }) )
  .catch( ( err ) => console.log( err ) )
  .finally( () => console.log('Finalmente') );



//tercero

// const { getAge, getUUID } = require('./plugins');
// const { buildMakePerson } = require('./tercero');
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'John', birthdate: '1985-10-21' };
// const john = makePerson( obj );
// console.log({ john });

//segundo
// const { getUserById } = require('./segundo');
// getUserById( 1, ( err, user ) => {
//     if( err ) {
//         return console.log( err );
//     }
//     console.log( user );
// });

//primero
// const { getUserById } = require('./primero');


// getUserById( 1, ( err, user ) => {
//     if( err ) {
//         return console.log( err );
//     }
//     console.log( user );
// });

