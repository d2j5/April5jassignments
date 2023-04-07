
let taskManager = (function () {
    // your code here
    let tasks = [];
    function addtask(description) {
        tasks.push(description)
        return addtask
    };

    function displayTasks(params) {
        for (index of tasks) {
            console.log(index)
        };
    }
    return { addtask: addtask, displayTasks: displayTasks };
})();

taskManager.addtask("copy");
taskManager.addtask('read');
taskManager.addtask('print');
taskManager.displayTasks();