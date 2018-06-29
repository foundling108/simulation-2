module.exports = {
    
    create: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { id, name, address, city, state, zip} = req.body

        dbInstance.create_houses([ id, name, address, city, state, zip])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    },
   
    getHouses: ( req, res ) => {
        console.log('jmk,l.;/')
        const dbInstance = req.app.get('db');
        const {params} = req;
        
        dbInstance.get_houses([params.id])
        .then( (house) => res.status(200).send( house ) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    },

    update: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;
        
        dbInstance.update_houses([params.id, query.desc])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    },

    delete: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.delete_houses([params.id])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    }

    
}