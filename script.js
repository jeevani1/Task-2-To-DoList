const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message").value.trim();

    if (username === "" || email === "" || password === "" || message === "") {

        alert("Please fill in all fields.");

    } else {

        alert("Form submitted successfully!");

    }

});
const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function() {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;
  const checkbox=document.createElement("input");
checkbox.type="checkbox";
 const taskText=document.createElement("span");
taskText.textcontent=task;
checkbox.addEventListener("change" ,function(){
taskText.classList.toggle("completed");
});


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function() {
        li.remove();
    });
     

      li.appendChild(checkbox);
     li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
});

    