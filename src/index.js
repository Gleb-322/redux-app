import {createStore, bindActionCreators} from 'redux'
import reducer from './reducer'
import * as actions from './actions'

const store = createStore(reducer)
const {dispatch} = store

/* этот паттерн есть уже в redux */
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args))
// }

/* перепишем ниже bindActionCreators как положено в redux*/
// const incDispatch = bindActionCreators(inc, dispatch)
// const decDispatch = bindActionCreators(dec, dispatch)
// const rndDispatch = bindActionCreators(rnd, dispatch)

/* можно еще красивее сделать код */
// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators(
//     {
//         incDispatch: inc,
//         decDispatch: dec,
//         rndDispatch: rnd
//     }
//     , dispatch
// )

const {inc, dec, rnd} = bindActionCreators(actions, dispatch)

document.getElementById('inc').addEventListener('click', inc)
document.getElementById('dec').addEventListener('click', dec)
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10)
    rnd(value)
})

const update = () => {
    document.getElementById('counter').textContent = store.getState()
}

store.subscribe(update)

// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})
