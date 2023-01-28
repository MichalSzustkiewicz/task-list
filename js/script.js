{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({ content: newTaskContent });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);

        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;

        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    }

    const bindToggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };

    const render = () => {
        let tasksListHTML = "";

        for (const task of tasks) {
            tasksListHTML += `
               <li 
                 class="tasks__item js-task"
               >
                 <button class="tasks__button tasks__button--toggleDone js-toggleDone">
                    ${task.done ? "✓" : ""}
                 </button>
                 <span class="tasks__content${task.done ? " tasks__content--done" : ""}">
                    ${task.content}
                 </span>
                 <button class="tasks__button tasks__button--remove js-remove">
                    🗑
                 </button>
               </li>            
            `;
        }

        document.querySelector(".js-tasks").innerHTML = tasksListHTML;

        bindRemoveEvents();
        bindToggleDoneEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const formInput = document.querySelector(".js-newTask");
        const newTaskContent = formInput.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            formInput.value = "";
        }

        formInput.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}