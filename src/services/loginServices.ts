import { API } from '@app/services/base.service';
import {LoginPayLoad} from '@app/core/types';
const LoginService = (payload : LoginPayLoad) => {
 return  API.post(
   'posts',
   payload
 )
}
export default LoginService;