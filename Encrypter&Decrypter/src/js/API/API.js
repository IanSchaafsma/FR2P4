class API{ // hier haal je het json bestandje op
    async getData(url){
        let dataToBeReturned = {};
       await fetch(url).then(
            (response) => {
                return response.json();
            }
        ).then( (data) => {
            dataToBeReturned = data.data;
        });
        return dataToBeReturned;
    }
}
