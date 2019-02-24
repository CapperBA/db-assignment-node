const dbconnection = require('./databaseconnection')
const zipcode = require('./models/zipcodeModel')
const datacontent = require('./data-content')


function initialize() {

    // Connection to Database
    let connection = dbconnection.connect();

    // Checking if connection has been established
    connection.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database: ', err);
    });

    
    zipcode.initialize(connection, (zipcode) => {
        let zipcodeModel = zipcode;
        datacontent.getZipCodes((zipcodes) => {
            zipcodeModel.bulkCreate(zipcodes)
            .then(() => {
                console.log('ZIPCODE TABLE CREATED');
                connection.close(); // close connection after creation
            })
            .catch(err => {
                console.error('Something went wrong during the creation: ', err);
              });
        })
    });
}

initialize();
