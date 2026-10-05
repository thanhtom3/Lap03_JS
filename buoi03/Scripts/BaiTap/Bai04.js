function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }

    var ul = document.getElementById("taskList");

    var li = document.createElement("li");

    var label = document.createElement("label");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        toggleTask(this);
    };

    var span = document.createElement("span");
    span.innerText = " " + taskValue;

    label.appendChild(checkbox);
    label.appendChild(span);

    // Ghép label vào li
    li.appendChild(label);

    var closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = function () {
        var liToRemove = this.parentElement;
        liToRemove.remove();
    };
    li.appendChild(closeBtn);

    ul.appendChild(li);

    taskInput.value = "";
}

function toggleTask(checkbox) {
    var span = checkbox.nextElementSibling;
    if (checkbox.checked) {
        span.classList.add("completed");
    } else {
        span.classList.remove("completed");
    }
}

window.onload = function () {
    var taskInput = document.getElementById("taskInput");
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
};