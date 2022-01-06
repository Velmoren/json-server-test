import { render } from "./render"
import { debounce } from "./helpers"

export const searchUsers = () => {
    const inputSearch = document.getElementById('search-input')

    const debounceSearch = debounce(() => {
        userService.getSearchUsers(inputSearch.value).then(users => {
            render(users)
        })
    }, 300)

    inputSearch.addEventListener('input', debounceSearch)
}