const appointment = require('../models/Appointment');
const mongoose = require('mongoose');

const appo = mongoose.model('Appointment', appointment);

class AppointmentService {
    async Create(name, email, cpf, description, date, time){
        var newAppo = new appo({
            name,
            email,
            cpf,
            description,
            date,
            time,
            finished: false
        })

        try {
            await newAppo.save();
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async GetAll(showFinished){
        if(showFinished){
            return await appo.find();
        }else{
            return await appo.find({finished: false});
        }
    }
};

module.exports = new AppointmentService();