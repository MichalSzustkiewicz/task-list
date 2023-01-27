{
    const tasks = [
        {
            content: "podlać kwiaty",
            done: false,
        },
        {
            content: "skosić trawę",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

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

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const render = () => {
        let taskListHTML = "";

        for (const task of tasks) {
            taskListHTML += `
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

        document.querySelector(".js-tasks").innerHTML = taskListHTML;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}