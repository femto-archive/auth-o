export const userService = {
    login,
    logout,
    register
}

function register(username, password) {
    return new Promise((resolve, reject) => {
        localStorage.setItem('user', JSON.stringify({ username, password }))
        resolve(username)
    })
}

function login(username, password) {
    return new Promise((resolve, reject) => {
        localStorage.setItem('user', JSON.stringify({ username, password }))
        resolve(username)
    })
}

function logout() {
    return new Promise((resolve, reject) => {
        localStorage.setItem('user', undefined)
        resolve()
    })
}