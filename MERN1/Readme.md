# MERN stack application documentation

## APIs

### /user

#### verb - get
/ - for getting all users
/:id - for getting specific user

#### verb - post
/ - for storing a user

#### verb - put
/:id - for updating specific user

#### verb - delete
/:id - for deleting a user

<!-- Validations -->

## Validations

### name
1. Not empty
2. No special characters

### Email
1. Not empty
2. Should be a valid email

### password
1. Not empty
2. Should have an uppercase character
2. Should have a lowercase character
2. Should have a special character
2. Should have a number
2. Should have a minimum of 8 length