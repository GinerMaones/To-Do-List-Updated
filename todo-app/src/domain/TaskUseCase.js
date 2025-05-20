import Task from './Task';

class TaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    addTask(title) {
        const task = new Task(Date.now(), title);
        this.taskRepository.add(task);
    }
    removeTask(id) {
        this.taskRepository.remove(id);
    }
    toggleTask(id) {
        this.taskRepository.toggle(id);
    }
    editTask(id, newTitle) {
        this.taskRepository.edit(id, newTitle);
    }
    getTasks() {
        return this.taskRepository.getAll();
    }
}


export default TaskUseCase;
