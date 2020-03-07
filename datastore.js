async function getDatastore() {
    const response = await fetch('datastore.json');
    const json = await response.json();
    return json;
}

export  { getDatastore };