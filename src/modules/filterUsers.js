import { render } from "./render"

export const filterUsers = () => {
    const btnIsChildren = document.getElementById('btn-isChildren')
    const btnIsPermissions = document.getElementById('btn-isPermissions')
    const btnIsAll = document.getElementById('btn-isAll')

    btnIsChildren.addEventListener('click', ()=> {
        userService.getFilterUsers('children').then(users => {
            render(users)
        })
    })

    btnIsPermissions.addEventListener('click', ()=> {
        userService.getFilterUsers('permissions').then(users => {
            render(users)
        })
    })

    btnIsAll.addEventListener('click', ()=> {
        userService.getUsers().then(users => {
            render(users)
        })
    })
}