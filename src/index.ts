import express,  {Express,Request, Response} from 'express';


const app:Express = express();


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});


app.get('/hello4', (req: Request, res: Response) => {
    res.send('Hello page4');
});
// app.get('/hello', (req, res) => {
//     res.send('Hello i am kugatheesan');
// });

// app.get('/uki', (req, res) => {
//     res.send('Hello uki');
// });

app.listen(3000, () => {
    console.log('Hello this server');
});