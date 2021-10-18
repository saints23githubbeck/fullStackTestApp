
import bcrypt from 'bcryptjs';
const data = {
  users:[
    {
      name: 'shdrack',
      email: 'arthurshdrack45@gmail.com',
      password: bcrypt.hashSync('saints23reactbeck', 10),
      isAdmin: true,
    },

    {
      name: 'arthur',
      email: 'arthur@gmail.com',
      password: bcrypt.hashSync('saints23reactbeck', 10),
      isAdmin: false,
    }
  ],

} ;

export default  data;