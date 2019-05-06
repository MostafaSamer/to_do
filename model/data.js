const md5 = require('md5');
const nodeCouchdb = require('node-couchdb');

const couch = new nodeCouchdb({
    auth:{
        user: 'admin',
        pass: 'root'
    }
})

const dbName = 'to_do';
const todo_view = "_design/todo/_view/todo-app";

const get_data = function(callback) {
    couch.get(dbName, todo_view).then(
        (data, headers, status)=> {
            callback(data.data);
        },
        (err)=> {
            console.log(err);
        }
    )
}

const insert_data = function(mess) {
    couch.uniqid().then(function(ids) {
        const id = ids[0];
        couch.insert(dbName, {
            _id: id,
            mess: mess
        })
    })
}

const delete_data = (id, rev)=> {
    couch.del(dbName, id, rev).then(
        (data, header, status)=> {

        },
        (err)=> {

        }
    )
}

module.exports = {
    get_data: get_data,
    delete_data: delete_data,
    insert_data: insert_data
}
