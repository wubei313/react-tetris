var addTodo = (data) => {
    return {
        type: 'addTodo',
        data,
    }
}
store.dispatch(addTodo('Use Redux'))

// level 1

const action = addTodo('Use Redux')
console.log('dispatching', action)
store.dispatch(action)
//这里应该是把action传给了store后，store会自动更新
console.log('next state', store.getState())

// level 2

// use dispatchAndLog instead of store.dispatch
function dispatchAndLog(store, action) {
    console.log('dispatching', action)
    store.dispatch(action)
    console.log('next state', store,getState())
}

// level 3
//先把原生的store.dispatch赋值给next
//同样，上一层的middleware其实是写了一个新的store.dispatch
//每一个middleware都会执行一次next，也就是执行上一个middleware所改写的store.dispatch
//其实应该是执行上一个middleware本身
const next = store.dispatch
store.dispatch = function dispatchAndLog(store, action) {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store,getState())
    return result
}

// level 4

