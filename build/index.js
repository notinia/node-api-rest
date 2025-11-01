import express from "express";
/* Simple express server */
const app = express();
app.use(express.json()); //middleware que ==> req.body -> json
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('Pingeado papu :V');
    res.send('Pong');
});
app.listen(PORT, () => {
    console.log(`Server corriendo en ${PORT}`);
});
//# sourceMappingURL=index.js.map