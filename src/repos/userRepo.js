const mockUsers = [
    {
        username: 'jdoe',
        firstName: 'John',
        lastName: 'Doe',
        password: '2ab96390c7dbe3439de74d0c9b0b1767'
    },
    {
        username: 'foo',
        firstName: 'John',
        lastName: 'Doe',
        password: '5f4dcc3b5aa765d61d8327deb882cf99'
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