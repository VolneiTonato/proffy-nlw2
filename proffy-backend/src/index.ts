import app from './app';

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
}).on('error', () =>{
    console.log('error')
});
