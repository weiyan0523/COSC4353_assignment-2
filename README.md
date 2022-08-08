# COSC4353 assignment 4


We use phpmyadmin to store client information
You can access phpmyadmin by using this link http://20.55.70.6:8080/phpmyadmin/ all the data are store under login_db


phpmyadmin username: root


phpmyadmin password: admin12345



Assignment 4

Datebase phpadmin, mysql

Backend
Python Django Framework


Assignment 3
- Login module
- Client Profile Management module
- Fuel Quote module, includes list of quote history for a client.

Backend
* Backend code should be covered by unit tests (coverage report greater than 80%)
https://stackify.com/code-coverage-tools/

* should have validations in place for required fields



use npm test to run the Unit test, a coverage report will be generated under coverage/lcov-report/index.html

To run unit test (MACOS)
1. open terminal
2. type npm init -y (this will create package.json)
3. open package.json set "test" jest --coverage
4. then type npm i -D jest to terminal
5. type npm test to run the unit test
6. a report will be generated under coverage file
