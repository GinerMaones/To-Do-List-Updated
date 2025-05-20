class LocalStorageRepository {
    constructor() {
        this.storageKey = 'tasks';
    }
    getAll() {
        return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    }
    add(task) {
        const tasks = this.getAll();
        tasks.push(task);
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }
    remove(id) {
        const tasks = this.getAll().filter(task => task.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }
    toggle(id) {
        const tasks = this.getAll().map(task => {
            if (task.id === id) task.completed = !task.completed;
            return task;
        });
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }
    edit(id, newTitle) {
        const tasks = this.getAll().map(task => {
            if (task.id === id) task.title = newTitle;
            return task;
        });
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }
}


export default LocalStorageRepository;
