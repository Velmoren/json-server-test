import { render } from "./render"

export const sortUsers = () => {
    const sortChildren = document.getElementById('sort-children')

    let isSort = false
    
    sortChildren.style.cursor = 'pointer'

    sortChildren.addEventListener('click', () => {
        isSort = !isSort

        userService.getSortUsers(isSort).then(users => {
            render(users);
        })
    })
}