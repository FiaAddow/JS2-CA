import { setRegisterFormListener} from "./Handlers/Register.mjs";
import { setLoginFormListener} from "./Handlers/login.mjs";



const path = location.pathname;

if (path === '/Profile/login.htm') {
    setLoginFormListener()
} 
else if (path==='/profile/register.html') {
    setRegisterFormListener()
}