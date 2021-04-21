import listData from '../../../../mock/list.json'

export const getList = () => {
    return (dispatch, getState, apiBaseUrl) => {
        return Promise.resolve(listData).then(res => dispatch({
            type: 'update_list',
            list: res
        }))
    }
}
