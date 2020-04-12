const INITIAL_STATE = {id: 1, name: "ADMIN", email: "admin@admin.com", password: "123456"}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
}