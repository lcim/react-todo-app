state = {
    todos: [
        {
            id: uuidv4(),
            title: 'Setup development environment',
            completed: true
        },
        {
            id: uuidv4(),
            title: 'Develop website and add content',
            completed: false
        },
        {
            id: uuidv4(),
            title: 'Deploy to live server',
            completed: false
        }
    ]
}
// was removed from TodoContainer so that data can be fetched from the server online