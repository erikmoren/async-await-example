import { getDatastore } from './datastore.js';

// Need to wrap main in an async function to be able to call await
async function main() {

  const datastore = await getDatastore();
  console.log(datastore);



}

// Run our program
main();

