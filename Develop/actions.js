const actions = [
    {
      type: 'list',
      loop: false,
      name: 'choices',
      message: `What would you like to do?`,
      choices: ['View Departments', 'View Roles', 'View Employees', 'Add Employee', 'Add Department', 'Add Roles', 'Update Employee Roles', 'Quit']
    },
    {
      type: 'confirm',
      name: 'quit',
      message: 'Are you sure you want to quit the application?',
      default: false,
      when: (answers) => {
        return answers.choices === 'Quit';
      }
    }
  ];
  
  module.exports = actions;