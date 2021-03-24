'use strict'
const Task = use('App/Models/Task')
class TaskController {

    async crear({ request, response }) {

        const nombre      = request.input('Nombre');
        const descripcion = request.input('Descripcion');
        const fechalimite = request.input('FechaLimite');
        const prioridad   = request.input('Prioridad');

        const u= await Task.create({
            nombre:nombre,
            descripcion:descripcion,
            fechalimite:fechalimite,
            prioridad:prioridad
        })
          return response.status(200).json(u);

    }

    async obtener({ request, response }) {
        const obtener = await Task.all();
        return response.status(200).json(obtener);

    }

    async actualizar({ request, params, response}) {
        
            const j = await Task.find(params.id)
            j.nombre=request.input('Nombre')
            j.descripcion=request.input('Descripcion')
            j.fechalimite=request.input('FechaLimite')
            j.prioridad=request.input('Prioridad')
            j.save();
            return response.status(200).json(j);
        }

    async obteneruno({ request, response,params }) {
        const uno = await Task.find(params.id)
        return response.status(200).json(uno);

    }

   

async eliminar({params, response }) {
    const post = await Task.find(params.id)
    await post.delete();
    return response.status(200).json(post);

}

  



}

module.exports = TaskController
