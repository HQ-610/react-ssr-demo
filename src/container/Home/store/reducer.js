const defaultState = {
    name: 'houjinghuan',
    newsList: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'update_list': {
            return {
                ...state,
                list: action.list
            }
        }
        default:
            return state
    }
}
