export = function(err:any, req:any, res:any, next:any) {

    //log the exception
    console.log(err.message);

    res.status(500).send('Something Failed. Try Again');
    
}