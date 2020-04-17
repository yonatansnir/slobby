export const tasksReducer = ( state = [], action) => {
   switch (action.type){
     case "ADD_TASK":
       return[...state, action.payload];

      case "DELETE_TASK":
        let afterDell = state.filter(x => x.id !== action.payload);
        return[...afterDell];

      case "MARK_COMPLETED":
        let arr = [...state];
        let i = arr.findIndex(x => x.id === action.payload);
        arr[i].completed = true;
        return [...arr];

      case "EDIT_TASK":
        let editTask = [...state];
        let i = editTask.findIndex(x => x.id === action.payload.id);
        editTask[i] = {...action.payload}
        return [...editTask];

       default:
        return state;
   }
}