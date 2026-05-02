const app=require('express')();
const PORT=8080;

app.listen(PORT,()=>console.log(`it is alive on http://localhost:${PORT}`));
app.get('/tshirts',(req,res)=>{
 res.status(200).send({
    tshirt:'abc',
    size:'small'
 })
});
// updated config test