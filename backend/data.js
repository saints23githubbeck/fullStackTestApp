
import bcrypt from 'bcryptjs';
const data = {
  clients:[
    {
      name: 'shdrack',
      email: 'arthurshdrack45@gmail.com',
      password: bcrypt.hashSync('password', 10),
     
    },

    {
      name: 'arthur',
      email: 'arthur@gmail.com',
      password: bcrypt.hashSync('password', 10),
     
    }
  ],

} ;

export default  data;