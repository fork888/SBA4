# Task Management App

## Overview

This Task Management App allows users to create and manage tasks. Users can add tasks with a name, category, deadline, and status. Tasks are displayed in a table and can be updated as work progresses.

## Features

- Add new tasks
- Store task information using objects and arrays
- Display tasks dynamically using DOM manipulation
- Update task status (In Progress or Completed)
- Automatically mark tasks as Overdue when the deadline has passed
- Filter tasks by status
- Filter tasks by category
- Save tasks using local storage so they remain after refreshing the page

## How the App Works

1. Enter a task name, category, deadline, and status.
2. Click the **Add Task** button to add the task.
3. The task is stored in an array and displayed in the table.
4. Update a task's status using the dropdown menu.
5. Use the filter options to view tasks by status or category.
6. Tasks are automatically saved in local storage and loaded when the page is refreshed.

## Additional Features

- Automatic overdue task detection
- Task filtering by both status and category
- Local storage for data persistence

---

# Reflection

One challenge I faced during this project was making sure tasks were displayed correctly after being added to the array. I also had to figure out how to update task statuses and automatically mark tasks as overdue when the deadline passed. Another challenge was saving task data so it would remain available after refreshing the page.

To solve these challenges, I worked on the project one feature at a time. First, I created the task objects and stored them in an array. Then I used DOM manipulation to display the tasks on the page. After that, I added status updates, overdue checking, filtering, and local storage. Testing each feature individually helped me find and fix errors more easily.

If I had more time, I would improve the design by adding more styling and a better layout. I would also add a delete task feature and an edit task feature so users could make changes to existing tasks.
