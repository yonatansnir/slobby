export const userLogin = (user, password, dispatch) => {
    if (user === "admin" && password === "123456"){
        let userObj = {id: 1, name: "ADMIN", email: "admin@admin.com", password: "123456"}
        dispatch({ type: "LOGIN", payload: userObj })
        return true;
    }
    return false;
}