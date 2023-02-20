const fs = require('fs');

const getData = async (req, res) =>{
    var data = fs.readFileSync('./data/file.json', 'utf-8');
    if(!data){
        data = "No data"
    }
    res.send(data)
}

const saveData = (req, res) =>{
    var data = fs.readFileSync('./data/file.json', 'utf-8');
    if(!data)
        data = []
    else
        data = JSON.parse(data);
    data.push(req.body);
    data = JSON.stringify(data)
    fs.writeFile('./data/file.json', data, err=>{
        console.log(err)
    });
    res.send((data));
}

const updateData = (req, res) =>{
    var data = fs.readFileSync('./data/file.json', 'utf-8');
    var id = req.params.id;
    var updatedData = req.body;
    if(!data){
        res.send("Not valid id");
    }
    var result = JSON.parse(data);

    let filteredResult = result.filter((dat)=>{
        return dat.id !=  id;
    });
    filteredResult.push(updatedData);
    data = JSON.stringify(filteredResult);
    fs.writeFile('./data/file.json', data, err=>{
        console.log(err)
    });
    res.send((data));
}

const deleteData = (req, res) => {
    var data = fs.readFileSync('./data/file.json', 'utf-8');
    var id = req.params.id;
    if(!data){
        res.send("Not valid id");
    }
    var result = JSON.parse(data);

    let filteredResult = result.filter((dat)=>{
        return dat.id !=  id;
    });
    data = JSON.stringify(filteredResult);
    fs.writeFile('./data/file.json', data, err=>{
        console.log(err)
    });
    res.send((data));
}

module.exports = {getData, saveData, updateData, deleteData}