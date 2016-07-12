

function makeAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args);
}

const first = {
  id: +new Date(),
  title: '我的笔记',
  content: '第一篇笔记内容'
};

// 模拟初始化数据
const initData = {
  events: [first],
  activeEvent: first,
  content:''

};


export const initStore = ({ dispatch }) => {
  dispatch('INIT_STORE', initData);
};
// 更新当前activeNote对象
export const updateActiveEvent = makeAction('SET_ACTIVE_EVENT');

export const newEvent = makeAction('NEW_EVENT');

// 删除一个note对象
export const deleteEvent = makeAction('DELETE_EVENT');

