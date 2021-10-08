var express = require("express");
const mysql = require("mysql");
var mydate = require('current-date');
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var mysqlConnection = mysql.createConnection({
    host: "34.67.1.64",
    user: "kavin",
    password: "dbms",
    database: "kesh"
});
app.use(cors());

mysqlConnection.connect(err => {
    if (!err) console.log("Connection succeeded.");
    else
        console.log("Unsuccessful \n Error : " + JSON.stringify(err, undefined, 2));
});

app.post('/logout', function (req, res) {
    console.log("logout");
    mysqlConnection.query("update admin set a_active=0");
    mysqlConnection.query("update owner set o_active=0");
    mysqlConnection.query("update customer set c_active=0");
})

app.get('/displaypaintingsforhire', (req, res) => {
    console.log("displaypaintingsforhire");
    mysqlConnection.query("select p_id as pid,p_name as pname from painting where p_id not in (select p_id from hire_history);", function (err, result, fields) {
        if (!err) {
            for (let i = 0; i < result.length; i++) {
                console.log(
                    result[i].pid + " " + result[i].pname
                );
                res.write(
                    "<!DOCTYPE html> <head></head> <body> <h1> Entry No : " +
                    (i + 1) +
                    " </h1> <h1> Painting Name : </h1> <h3>" +
                    result[i].pname +
                    "</h3> <h1>  Painting ID : </h1> <h3>" +
                    result[i].pid +
                    "</h3>   <a href='http://localhost:3000/HirePainting'> Back To Hire Painting Page . . .</a><hr> </body>"
                );
            }
            res.end();
        } else {
            console.log(err);
            res.end();
        }
    });
    console.log("GET METHOD");
});

app.post('/customerreturnpainting', function (req, res) {
    var pid = req.body.pid;
    mysqlConnection.query("delete from hire_history where p_id=?", [pid], function (err, result, fields) {
        res.send(result);
    });

});

app.get('/hirehistorydisplay', (req, res) => {
    mysqlConnection.query("select r_id as rid,p_id as pid,hiredate as hiredate from request where c_id = (select c_id from customer where c_active=1);", function (err, result, fields) {
        if (!err) {
            for (let i = 0; i < result.length; i++) {
                console.log(
                    result[i].pid + " " + result[i].rid
                );
                res.write(
                    "<!DOCTYPE html> <head></head> <body> <h1> Entry No : " +
                    (i + 1) +
                    " </h1> <h1> Request ID : </h1> <h3>" +
                    result[i].rid +
                    "</h3> <h1>  Painting ID: </h1> <h3>" +
                    result[i].pid +
                    "</h3> <h1>  Hire Date: </h1> <h3>" +
                    result[i].hiredate +
                    " </h3>   <a href='http://localhost:3000/HireHistory'> Back To Hire History Page . . .</a><hr> </body>"
                );
            }
            res.end();
        } else {
            console.log(err);
            res.end();
        }
    });
});

app.get('/hirehistorydisplaynow', (req, res) => {
    mysqlConnection.query("select p_id as pid,hiredate as hiredate from hire_history where c_id = (select c_id from customer where c_active=1);", function (err, result, fields) {
        if (!err) {
            for (let i = 0; i < result.length; i++) {
                console.log(
                    result[i].pid
                );
                res.write(
                    "<!DOCTYPE html> <head></head> <body> <h1> Entry No : " +
                    (i + 1) +
                    " </h1> <h1> Painting ID : </h1> <h3>" +
                    result[i].pid +
                    "</h3> <h1>  Hire Date: </h1> <h3>" +
                    result[i].hiredate +
                    " </h3>   <a href='http://localhost:3000/ReturnPainting'> Back To Return Painting Page . . .</a><hr> </body>"
                );
            }
            res.end();
        } else {
            console.log(err);
            res.end();
        }
    });
});

app.post('/customerhirepainting', function (req, res) {
    var pid = req.body.pid;
    var rid = Math.floor(Math.random() * 100);
    console.log(pid);

    mysqlConnection.query("select c_id as cid from customer where c_active=1", function (ierr, iresult, ifields) {
        console.log("this");
        mysqlConnection.query("insert into hire_history values(?,?,?)", [iresult[0].cid, pid, mydate('date')], function (err, result, fields) {
            // mysqlConnection.query("insert into hire_history values(r_id=?,c_id=?,p_id=?)", [rid, iresult[0].cid, pid]);
            // res.send(result);
            console.log("that");
            mysqlConnection.query("select count(r_id) as count from request where r_id=?", [rid], function (perr, presult, pfields) {
                if (presult[0].count <= 0) {
                    console.log("2");
                    console.log(rid + " " + iresult[0].cid + " " + pid + " ");
                    mysqlConnection.query("insert into request values(?,?,?,?)", [rid, iresult[0].cid, pid, mydate('date')]);
                    mysqlConnection.query("insert into resubmit_last_hired values(?,?)", [pid, mydate('date')]);
                    mysqlConnection.query("select rent as price from painting where p_id=?", [pid], function (lerr, lresult, lfields) {
                        mysqlConnection.query("select amount as amount from customer where c_id=?", [iresult[0].cid], function (aerr, aresult, afields) {


                            mysqlConnection.query("update customer set amount=? where c_id=?", [aresult[0].amount + lresult[0].price, iresult[0].cid]);
                        });
                    });

                    res.send(presult[0]);
                }
                else {
                    console.log("1");
                    rid = Math.floor(Math.random() * 200);
                    mysqlConnection.query("insert into request values(?,?,?,?)", [rid, iresult[0].cid, pid, mydate('date')]);
                    mysqlConnection.query("insert into resubmit_last_hired values(?,?)", [pid, mydate('date')]);
                    mysqlConnection.query("select rent as price from painting where p_id=?", [pid], function (lerr, lresult, lfields) {
                        mysqlConnection.query("select amount as amount from customer where c_id=?", [iresult[0].cid], function (aerr, aresult, afields) {


                            mysqlConnection.query("update customer set amount=? where c_id=?", [aresult[0].amount + lresult[0].price, iresult[0].cid]);
                        });
                    });
                    res.send(presult[0]);
                }
            });
        });

    });


});


app.post('/customer', function (req, res) {
    mysqlConnection.query("select c_name as name,c_id as id,amount as price from customer where c_email=(select c_email from customer where c_active=1)", function (err, result, fields) {

        res.send(result);
    });
});

app.post('/admin', function (req, res) {
    mysqlConnection.query("select a_name as name,a_id as id from admin where a_email=(select a_email from admin where a_active=1)", function (err, result, fields) {

        res.send(result);
    });
});

app.post('/customerlogininfo', function (req, res) {
    mysqlConnection.query("select c_name as name,c_id as id,c_email as email,c_contact as contact,category as catogory from customer where c_email=(select c_email from customer where c_active=1)", function (err, result, fields) {

        res.send(result);
    });
});

app.post('/adminlogininfo', function (req, res) {
    mysqlConnection.query("select a_name as name,a_id as id,a_email as email,a_contact as contact from admin where a_email=(select a_email from admin where a_active=1)", function (err, result, fields) {

        res.send(result);
    });
});

app.post('/ownerviewpainting', function (req, res) {
    mysqlConnection.query("select p_id as id,p_name as name,theme as ptheme,rent as rent from painting where o_id=(select o_id from owner where o_active=1)", function (err, result, fields) {
        console.log(result[0].name);
        res.send(result);
    });
});

app.post('/ownersubmitpainting', function (req, res) {
    var name = req.body.name;
    var theme = req.body.theme;
    var rent = req.body.rent;

    var pid = Math.floor(Math.random() * 100);
    console.log(pid);
    mysqlConnection.query("select o_id as id from owner where o_email=(select o_email from owner where o_active=1)", function (err, result, fields) {
        mysqlConnection.query("insert into painting values(?,?,?,?,?)", [pid, name, theme, result[0].id, rent], function (ierr, iresult, ifields) {
            mysqlConnection.query("insert into resubmit_status values(?,?)", [pid, 0]);
            mysqlConnection.query("insert into resubmit_last_hired values(?,?)", [pid, mydate('date')]);
            mysqlConnection.query("select 1 as submitted from dual", function (rerr, rresult, rfields) {

                res.send(rresult);


            });
        });
    });


});


app.post('/home', function (req, res) {

    var email = req.body.email;
    var password = req.body.password;
    var usertypeval = req.body.usertype;

    if (usertypeval == 1) {

        mysqlConnection.query("select count(*) as count from admin where a_email=? and a_password=?", [email, password], function (ierr, iresult, ifields) {
            console.log(iresult[0].count)
            if (iresult[0].count == 1) {
                mysqlConnection.query("update admin set a_active=1 where a_email=?", [email]);
                mysqlConnection.query("select 1 as usertype from dual", function (rerr, rresult, rfields) {

                    res.send(rresult);


                });
            }

        });
    }
    if (usertypeval == 2) {
        mysqlConnection.query("select count(*) as count from customer where c_email=? and c_password=?", [email, password], function (ierr, iresult, ifields) {
            console.log(iresult[0].count)
            if (iresult[0].count == 1) {
                mysqlConnection.query("update customer set c_active=1 where c_email=?", [email]);
                mysqlConnection.query("select 2 as usertype from dual", function (rerr, rresult, rfields) {

                    res.send(rresult);


                });
            }

        });
    }
    if (usertypeval == 3) {
        mysqlConnection.query("select count(*) as count from owner where o_email=? and o_password=?", [email, password], function (ierr, iresult, ifields) {
            console.log(iresult[0].count)
            if (iresult[0].count == 1) {
                mysqlConnection.query("update owner set o_active=1 where o_email=?", [email]);
                mysqlConnection.query("select 3 as usertype from dual", function (rerr, rresult, rfields) {

                    res.send(rresult);


                });
            }

        });
    }

    // console.log(req.body)
    // mysqlConnection.query("select count(*) as count from admin", function (ierr, iresult, ifields) {
    //     console.log(iresult[0].count)
    //     res.send(iresult);
    // });


});


app.post("/signup", function (req, res) {
    //res.writeHead(200, { "Content-Type": "text/html" });
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var contact = req.body.contact;
    var usertypeval = req.body.usertype;
    var category = "Bronze";
    var bonus = 0;
    var active = 1;
    var o_id = Math.floor(Math.random() * 200);
    var a_id = Math.floor(Math.random() * 300);
    var c_id = Math.floor(Math.random() * 700);
    console.log("inside the server");

    if (usertypeval == 1) {
        mysqlConnection.query("update admin set a_active=1 where a_email=?", [email]);
        mysqlConnection.query("insert into admin values(?,?,?,?,?,?)", [a_id, name, email, contact, password, active]
            ,
            function (err, result1, fields) {
                if (err) throw err;
                console.log(result1);
                mysqlConnection.query("update admin set a_active=1 where a_email=?", [email]);
                mysqlConnection.query("select 1 as usertype from dual"
                    ,
                    function (ierr, iresult1, ifields) {

                        if (err) throw err;
                        res.send(iresult1);

                    }
                );

            }

        );
    }
    if (usertypeval == 2) {
        mysqlConnection.query("insert into customer values(?,?,?,?,?,?,?)", [c_id, name, email, contact, category, password, active]
            ,
            function (err, result1, fields) {
                if (err) throw err;
                console.log(result1);

                mysqlConnection.query("update customer set c_active=1 where c_email=?", [email]);
                mysqlConnection.query("select 2 as usertype from dual"
                    ,
                    function (ierr, iresult1, ifields) {

                        if (err) throw err;
                        res.send(iresult1);

                    }
                );

            }
        );
    }
    if (usertypeval == 3) {
        mysqlConnection.query("insert into owner values(?,?,?,?,?,?,?)", [o_id, name, email, contact, bonus, password, active]
            ,
            function (err, result1, fields) {
                if (err) throw err;
                console.log(result1);

                mysqlConnection.query("update owner set o_active=1 where o_email=?", [email]);
                mysqlConnection.query("select 3 as usertype from dual"
                    ,
                    function (ierr, iresult1, ifields) {

                        if (err) throw err;
                        res.send(iresult1);

                    }
                );

            }
        );
    }





});

app.listen(8001);
