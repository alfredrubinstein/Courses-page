import express from 'express';
import { routers } from './routers';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', routers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
