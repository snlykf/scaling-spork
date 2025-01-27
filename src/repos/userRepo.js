const mockUsers = [
    {
        username: 'jdoe',
        firstName: 'John',
        lastName: 'Doe',
        password: '2ab96390c7dbe3439de74d0c9b0b1767'
    }
];

export function getLoginUser(username) {
    return new Promise((resolve, reject) => {
        const user = mockUsers.find(u => u.username === username);
        if(user) {
            resolve(user);
        } else {
            reject('User not found');
        }
    });
}