import { initialData } from './data';
import { UserModel } from './models/userModel';

const insertData = async () => {
  for (const user of initialData.users) {
    await UserModel.create(user);
  }
};

insertData().then(() => console.log('Data inserted'));
