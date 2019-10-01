var express = require("express");
const mysql = require("mysql");
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

app.post('/customer', function (req, res) {
    mysqlConnection.query("select c_name as name,c_id as id from customer where c_email=(select c_email from customer where c_active=1)", function (err, result, fields) {

        res.send(result);
    });
});

app.post('/customerlogininfo', function (req, res) {
    mysqlConnection.query("select c_name as name,c_id as id,c_email as email,c_contact as contact,category as catogory from customer where c_email=(select c_email from customer where c_active=1)", function (err, result, fields) {

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
    res.writeHead(200, { "Content-Type": "text/html" });
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var contact = req.body.contact;
    var usertypeval = req.body.usertype;
    var usertype;

    if (usertypeval == 1) {
        mysqlConnection.query("select count(*) as count from admin"
            ,
            function (terr, tresult1, tfields) {
                if (err) throw err;
                console.log(tresult1);
                var tstring = JSON.stringify(tresult1);
                var tjson = JSON.parse(tstring);

                console.log(
                    "Current status" + tjson[0].count
                );
                var id = 10000 + tjson[0].count + 1;

                mysqlConnection.query("insert into admin values(?,?,?,?)", [id, name, email, contact]
                    ,
                    function (err, result1, fields) {
                        if (err) throw err;
                        console.log(result1);
                        mysqlConnection.query("insert into usrpwd values(?,?)", [email, password]
                            ,
                            function (ierr, iresult1, ifields) {
                                if (err) throw err;
                                console.log(iresult1);
                                res.write("Submitted Succesfully");
                            }
                        );

                    }
                );
            }
        );
    }
    if (usertypeval == 2) {
        mysqlConnection.query("insert into customer values(?,?,?)", [name, email, contact]
            ,
            function (err, result1, fields) {
                if (err) throw err;
                console.log(result1);
                mysqlConnection.query("insert into usrpwd values(?,?)", [email, password]
                    ,
                    function (ierr, iresult1, ifields) {
                        if (err) throw err;
                        console.log(iresult1);
                        res.write("Submitted Succesfully");
                    }
                );

            }
        );
    }
    if (usertypeval == 3) {
        mysqlConnection.query("insert into owner values(?,?,?)", [name, email, contact]
            ,
            function (err, result1, fields) {
                if (err) throw err;
                console.log(result1);
                mysqlConnection.query("insert into usrpwd values(?,?)", [email, password]
                    ,
                    function (ierr, iresult1, ifields) {
                        if (err) throw err;
                        console.log(iresult1);
                        res.write("Submitted Succesfully");
                    }
                );

            }
        );
    }



});

app.listen(8001);
