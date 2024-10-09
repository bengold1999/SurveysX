export const userService = {
    login
}

async function login(email: string, password: string) {
    const users = _loadFromStorage();
    const user = users.find(user => user.email === email && user.password === password);
    return user;
}