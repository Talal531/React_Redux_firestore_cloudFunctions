const initState = {
    projects: [
        {id: '1', title: '2help me find peach', content: 'blah blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah blah'},
        {id: '3', title: '3help me find peach', content: 'blah blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("created peoject", action.project);
            return state;
        
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;

        default:
            return state;
    }
}
export default projectReducer;