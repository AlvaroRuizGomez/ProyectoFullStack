const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');


// crear el servidor
const app = express();



// Habilitar Cors
// const corsOptions = {

//     origin: (origin, callback) => {
//         const existe = whitelist.some( dominio => dominio === origin);
//         if ( existe ) {
//             callback(null, true)            
//         } else {
//             callback(new Error('No Permitido por CORS'))
//         }
//     }
// } 

// tocaria hacerlo con process.env.PORT
const PORT = 4000;
    
// habilitar Cors
// app.use( cors(corsOptions) );
// app.use(cors());

var whitelist = ['http://localhost:' + PORT.toString()]

app.use(cors({
    origin: function (origin, callback) 
    {
        //origin no definido porque se llama desde local
        if (!origin) return callback(null, true);

        //si no esta en la lista whitelist... error
        if (whitelist.indexOf(origin) === -1) 
        {
            callback(new Error('No Permitido por CORS'))
        }
        return callback(null, true);
    }
}));


// Conectar a mongo db
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/veterinaria', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// });

// habilitar el body-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar routing
app.use('/', routes())

//-------- Test---------
app.get('/', function (req, res) {
    res.json({ msg: 'Cors enabled.' })
})


// puerto y arrancar el servidor
app.listen(PORT, () => {
    console.log('Servidor funcionando')
})