import app from './app';
import 'dotenv/config';

app.listen(process.env.PORT_HOST || 3333, () => {
  console.log('A API do send email está funcionando corretamente✅');
});
