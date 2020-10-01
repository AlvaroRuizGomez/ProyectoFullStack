const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');



module.exports = function() {
    // Agregar nuevos pacientes via POST
    router.post('/pacientes',  
        pacienteController.nuevoCliente
    );

    // Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes', 
        pacienteController.obtenerPacientes
    );

    // Obtiene un paciente específico (ID)
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    // Actualizar un registro con un ID específico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    // Elimina un paciente por su ID
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );

    return router;
}
