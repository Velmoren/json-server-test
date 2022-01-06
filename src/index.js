import { render } from "./modules/render";
import { addUsers } from "./modules/addUsers";
import { UserService } from "./modules/userService"
import { removeUsers } from "./modules/removeUsers"
import { changePermissions } from './modules/changePermissions'
import { editUsers } from './modules/editUsers'
import { filterUsers } from './modules/filterUsers'
import { searchUsers } from './modules/searchUsers'
import { sortUsers } from './modules/sortUsers'

window.userService = new UserService

userService.getUsers().then(data => {
    render(data)
})

addUsers()
removeUsers()
changePermissions()
editUsers()
filterUsers()
searchUsers()
sortUsers()