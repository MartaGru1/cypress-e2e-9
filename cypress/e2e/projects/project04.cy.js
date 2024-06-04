/// <reference types="cypress" />

describe('Project 04', () => {

    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/project-6');
    })

    it('Test Case 01 - Todo-App Modal Verification', () => {
        /**
        * Confirm that the todo-app modal is visible with the title “My Tasks.”
        * Validate that the New todo input field is enabled for text entry.
        * Validate ADD button is enabled.
        * Validate Search field is enabled.
        * Validate that the task list is empty, displaying the message “No tasks found!”
         */

        cy.get('p.panel-heading').should('be.visible').and('have.text', 'My Tasks');
        cy.get('input#input-add').should('be.visible').and('be.enabled');
        cy.get('button#add-btn').should('be.visible').and('be.enabled');
        cy.get('input#search').should('be.visible').and('be.enabled');
        cy.get('div.panel-block.todo-item').should ('contain.text', 'No tasks found!');

    });

    it('Test Case 02 - Single Task Addition and Removal', () => {
        /**
        * Enter a new task in the todo input field and add it to the list.
        * Validate that the new task appears in the task list.
        * Validate that the number of tasks in the list is exactly one.
        * Mark the task as completed by clicking on it.
        * Validate item is marked as completed.
        * Click on the button to remove the item you have added.
        * Remove the completed task by clicking the designated removal button.
        * Validate that the task list is empty, displaying the message “No tasks found!”.
         */

        const newTask = 'New Task';

        cy.get('input#input-add').type(newTask);
        cy.get('button#add-btn').click();
        cy.get('div.panel-block.todo-item').should('contain.text', newTask);
        cy.get('div.panel-block.todo-item').should('have.length', 1);
        cy.get('div.panel-block.todo-item').click();
        cy.get('div.panel-block.todo-item svg[data-icon="circle-check"]').should('exist');
        cy.get('.has-text-danger.destroy').click();
        cy.get('div.panel-block').should('contain.text', 'No tasks found!');

    });

    it('Test Case 03 - Multiple Task Operations', () => {
        /**
        * Enter and add 5 to-do items individually.
        * Validate that all added items match the items displayed on the list.
        * Mark all the tasks as completed by clicking on them.
        * Click on the “Remove completed tasks!” button to clear them.
        * Validate that the task list is empty, displaying the message “No tasks found!”.
         */
        const todoItems = ['New Task1', 'New Task2', 'New Task3', 'New Task4', 'New Task5']
        todoItems.forEach(item => {
          cy.get('.input').eq(0).type(item).type('{enter}')
        })

        cy.get('.panel-block.todo-item').each(($item, index) => {
          cy.wrap($item).should('contain', todoItems[index])
        })

        cy.get('.toggle').click({ multiple: true })

        cy.get('.has-text-danger.destroy').should('be.visible')
        cy.get('.has-text-danger.destroy').each($btn => {
            cy.wrap($btn).click();
        })

        cy.get('.panel-block.todo-item').should('contain', 'No tasks found!')

    });

    it('Test Case 04 - Search and Filter Functionality in todo App', () => {
        /**
        * Enter and add 5 to-do items individually.
        * Validate that all added items match the items displayed on the list.
        * Enter the complete name of the previously added to-do item into the search bar.
        * Validate that the list is now filtered to show only the item you searched for.
        * Validate that the number of tasks visible in the list is exactly one.       * 
         */

        const toDoList = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];

        toDoList.forEach(item => {
            cy.get('input#input-add').type(item);
            cy.get('button#add-btn').click();
        });

        cy.get('.todo-item').should('have.length', 5).each(($el, index) => {
            cy.wrap($el).should('contain', toDoList[index]);
        });

        const searchItem = 'Task 2';
        toDoList.forEach(searchItem => {
        cy.get('input#search').clear().type(searchItem );
        }); 

        cy.get('.todo-item').should('have.length', 1).each(($el) => {
            cy.wrap($el).first().should('contain', searchItem);
        });

    });

    it('Test Case 05 - Verify the functionality of the "Clear All" button', () => {
        /**
        * Attempt to add an empty task to the to-do list.
        * Validate that the task list is empty, displaying the message “No task found!”.
        * Enter an item name exceeding 30 characters into the list.
        * Validate error message appears and says “Error: Todo cannot be more than 30 characters!”.
        * Add a valid item name to the list.
        * Validate that the active task count is exactly one.
        * Try to enter an item with the same name already present on the list.
        * Validate that an error message is displayed, indicating “Error: You already have {ITEM} in your todo list.”.
         */
    
        cy.get('#add-btn').click();
        cy.get('.todo-item').should('not.exist');
        cy.contains('No task found!').should('be.visible');

        const longItemName = 'Error: Todo cannot be more than 30 characters!';
        cy.get('#input-add').clear().type(longItemName);
        cy.get('#add-btn').click();

        cy.contains('Error: Todo cannot be more than 30 characters!').should('be.visible');

        const validItemName = 'Valid Item';
        cy.get('#input-add').clear().type(validItemName);
        cy.get('#add-btn').click();
        cy.get('.todo-item').should('have.length', 1).and('have.text', validItemName);
        cy.get('#input-add').clear().type(validItemName);
        cy.get('#add-btn').click();
        cy.contains(`Error: You already have ${validItemName} in your todo list.`).should('be.visible');

    });

































})