let tasks = JSON.parse(localStorage.getItem("tasks")) || []

displayTasks()

document.getElementById("addTaskBtn").addEventListener("click", addTask)

document.getElementById("filterBtn").addEventListener("click", filterTasks)

function addTask() {

    let name = document.getElementById("taskName").value
    let category = document.getElementById("taskCategory").value
    let deadline = document.getElementById("taskDeadline").value
    let status = document.getElementById("taskStatus").value

    if (name === "" || category === "" || deadline === "") {
        alert("Please fill in all fields")
        return
    }

    let task = {
        name: name,
        category: category,
        deadline: deadline,
        status: status
    }

    tasks.push(task)

    saveTasks()

    displayTasks()

    document.getElementById("taskName").value = ""
    document.getElementById("taskCategory").value = ""
    document.getElementById("taskDeadline").value = ""
}

function displayTasks(taskArray) {

    if (!taskArray) {
        taskArray = tasks
    }

    checkOverdue()

    let taskList = document.getElementById("taskList")

    taskList.innerHTML = ""

    taskArray.forEach(function(task, index) {

        let statusClass = ""

        if (task.status === "Overdue") {
            statusClass = "overdue"
        }

        let row = document.createElement("tr")

        row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.category}</td>
            <td>${task.deadline}</td>
            <td class="${statusClass}">
                ${task.status}
            </td>
            <td>
                <select onchange="updateStatus(${index}, this.value)">
                    <option value="In Progress" ${task.status === "In Progress" ? "selected" : ""}>
                        In Progress
                    </option>
                    <option value="Completed" ${task.status === "Completed" ? "selected" : ""}>
                        Completed
                    </option>
                </select>
            </td>
        `

        taskList.appendChild(row)
    })
}

function updateStatus(index, newStatus) {

    tasks[index].status = newStatus

    saveTasks()

    displayTasks()
}

function checkOverdue() {

    let today = new Date()

    tasks.forEach(function(task) {

        let deadlineDate = new Date(task.deadline)

        if (deadlineDate < today && task.status !== "Completed") {
            task.status = "Overdue"
        }
    })

    saveTasks()
}

function filterTasks() {

    let selectedStatus = document.getElementById("filterStatus").value

    let selectedCategory =
        document.getElementById("filterCategory").value.toLowerCase()

    let filteredTasks = tasks.filter(function(task) {

        let statusMatch =
            selectedStatus === "All" ||
            task.status === selectedStatus

        let categoryMatch =
            selectedCategory === "" ||
            task.category.toLowerCase().includes(selectedCategory)

        return statusMatch && categoryMatch
    })

    displayTasks(filteredTasks)
}

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    )

    console.log(tasks)
}