var oracledb = require('oracledb');

var config = {
  user : "note", // [username]
  password : "notenote", // [password]
  host:'oracle-instance1.cgubxlov7ebt.ap-southeast-1.rds.amazonaws.com',
  port:'1521',
  sid:'ORCL'
}
console.log(config.sid);
  async function run() {
      let connection = await oracledb.getConnection( {
      user :config.user,
      password : config.password,
      connectString :config.host+':'+config.port+"/"+config.sid // [hostname]:[port]/[DB service name]
    });
    let result = await connection.execute( "SELECT 'Hello World!' FROM dual");
    console.log(result);
    let d = await connection.execute( "SELECT * FROM Customer");
    console.log(d.rows[0]);
    let date = new Date();
    let n = date.getTime();
    let userId = n.toString().substring(4);
    console.log(userId);
    let firstname = 'ss',
    lastname = 'ss',
    email = 'ss'
    ,address = 'ss',
    username,password,customerid = 'ss'
    let birthdate='12-12-1990'
    let phone= '0817933333'
    username = 'dd',
    password = 'sss'

    // let addUsers = await connection.execute(`
    //   INSERT INTO Users VALUES (
    //     '`+userId+`',
    //     '`+username+`',
    //     '`+password+`',
    //     '1'
    //   )
    // `);
    // let addCustomer = await connection.execute( `
    //   INSERT INTO Customer VALUES (
    //     '`+customerid+`',
    //     '`+firstname+`',
    //     '`+lastname+`',
    //     '`+phone+`',
    //     '`+email+`',
    //     '`+address+`',
    //     '`+birthdate+`',
    //     '`+userId+`'
    //   )
    // `);

    // console.log(addUsers,addCustomer);


    // let showCourt = await connection.execute(`
    //   SELECT * FROM Reservation r
    //   LEFT JOIN Time_Schedule t
    //   ON r.reserve_time = t.time_code
    //   LEFT JOIN Court c ON r.court_id = c.court_id
    // `);

    // if(timecode>2) loop query 
    // let addReserve = await connection.execute( `
    //   INSERT INTO Reservation VALUES (
    //     '`+reserveid+`',
    //     '`+customerid+`',
    //     '`+courtid+`',
    //     '`+datereserve+`',
    //     '`+time_code+`',
    //     '`+timestamp+`',
    //     '`+timestamp+`'
    //   )
    // `);
    let courtno, price, courtid;
    // let updateCourt = await connection.execute(
    // `
    //   UPDATE Court
    //   SET court_no = '`+courtno+ `', price = '`+value2+`'
    //   WHERE court_id = vid;
    // `)
    // let deleteCourt = await connection.execute(`
    //   DELETE FROM Court WHERE court_id = '`+courtid+`';
    // `)
    // console.log(addReserve);
    // await connection.execute("commit")
  
    // let reserve_id = 'R0005'
  
    // let searchReserve = await connection.execute(`
    //   SELECT cu.firstname, cu.lastname, co.court_no,
    //    t.time_range, r.reserve_date
    //   FROM reservation r
    //   LEFT JOIN customer cu ON r.customer_id = cu.customer_id
    //   LEFT JOIN court co ON r.court_id = co.court_id
    //   LEFT JOIN time_schedule t ON r.reserve_time = t.time_code
    //   WHERE r.reserve_id = '` + reserve_id + `';
    // `)
  
  
    // console.log(searchReserve);
    let reportYear = '2019',
      reportMonth = 'March'
    let reportPeriod = ''
  
    let getReportMonthly = await connection.execute(`
      SELECT count(r.court_id), c.court_no 
      FROM reservation r
      LEFT JOIN court c 
      ON c.court_id = r.court_id
      WHERE to_char(reserve_date, 'mm-yyyy') = '` + reportPeriod + `'
      GROUP BY (court_no)
      ORDER BY court_no;
    `)
  
    console.log(getReportMonthly);
  }
  
  run();