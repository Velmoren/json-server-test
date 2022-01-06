export class UserService {
    getUsers() {
        return fetch('http://localhost:4545/users').then(res => res.json())
    }

    addUser(user) {
        return fetch('http://localhost:4545/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
    }

    removeUser(id) {
        return fetch(`http://localhost:4545/users/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
    }

    changeUser(id, data) {
        return fetch(`http://localhost:4545/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => res.json())
    }

    getUser(id) {
        return fetch(`http://localhost:4545/users/${id}`).then(res => res.json())
    }

    editUser(id, user) {
        return fetch(`http://localhost:4545/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => res.json())
    }

    getFilterUsers(filterOption) {
        return fetch(`http://localhost:4545/users?${filterOption}=true`).then(res => res.json())
    }

    getSearchUsers(value) {
        return fetch(`http://localhost:4545/users?${value !== '' ? `name_like=${value}` : ''}`).then(res => res.json())
    }
    getSortUsers(sortOption) {
        return fetch(`http://localhost:4545/users?_sort=children&_order=${sortOption ? 'asc' : 'desc'}`).then(res => res.json())
    }

}