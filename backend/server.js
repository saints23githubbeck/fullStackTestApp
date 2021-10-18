const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const clientRouter = require("./routers/clients");
const providerRouter = require("./routers/providers");
const YAML = require("yamljs")
const path = require('path');
const yamlFile  =  path.resolve(__dirname,'./swagger/swagger.yaml');
const swagerDocs = YAML.load(yamlFile)
// console.log(yamlFile);  
// const specs = require("./swagger/sheader.json")
// const specs = require("./swagger/swaggerDescription")
                                                                                                                   
   
const app = express();
         
app.use(express.json());            
app.use(cors());
app.use(bodyParser.json())                
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/DBclients", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(conn => {
  console.log("MongoDB Database Connected !");
}).catch((err) => {
  console.error("Error: Database Fail Connection... " + err);
});


           

app.use("/api/docs", swaggerUI.serve,swaggerUI.setup(swagerDocs)); 

app.use("/api/clients", clientRouter);

app.use("/api/providers", providerRouter);


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
  
const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Serve at http://localhost:${PORT}`);
  });  


          
                     
                 
       