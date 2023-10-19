import Task from '../models/tasks.model.js';  // Asegúrate de que la ruta sea correcta

// Create - Crear una nueva tarea
export const createTask = async (req, res) => {

    const { title, description, date } = req.body;

    try {

        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id
        });

        const savedTask = await newTask.save();

        res.status(201).json(savedTask);

    } catch (error) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
}

// Read - Obtener todas las tareas
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id
        }).populate('user');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
}

// Read - Obtener una tarea por ID
export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            res.status(404).json({ error: 'Tarea no encontrada' });
            return;
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la tarea' });
    }
}

// Update - Actualizar una tarea por ID
export const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) {
            res.status(404).json({ error: 'Tarea no encontrada' });
            return;
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
}

// Delete - Eliminar una tarea por ID
export const deleteTask = async (req, res) => {
    try {

        const deletedTask = await Task.findByIdAndRemove(req.params.id);
        if (!deletedTask) {
            res.status(404).json({ error: 'Tarea no encontrada' });
            return;
        }
        res.status(204).send(); // Respuesta exitosa sin contenido
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
}
