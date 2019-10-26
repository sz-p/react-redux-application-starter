/*

Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。

*/

import * as type from '../actions/actionType';

const initialState = {
  page: 'index'
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_CATEGORY:
      return Object.assign({}, state, {
        categoryList: action.payload
      });
    default:
      return state
  }
}

export default reducer