export const testService = {
    a
}

function a(test) {
    return new Promise((resolve, reject) => {
        localStorage.setItem('user', JSON.stringify(test))
        resolve(test)
    })
}