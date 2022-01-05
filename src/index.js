import { render } from "./modules/render";
import { addUsers } from "./modules/addUsers";
import { UserService } from "./modules/userService"
import { removeUsers } from "./modules/removeUsers"
import { changePermissions } from './modules/changePermissions'
import { editUsers } from './modules/editUsers'

window.userService = new UserService

userService.getUsers().then(data => {
    render(data)
})

addUsers()
removeUsers()
changePermissions()
editUsers()