var oracledb = require('oracledb');

var config = {
  user: "note", // [username]
  password: "notenote", // [password]
  host: 'oracle-instance1.cgubxlov7ebt.ap-southeast-1.rds.amazonaws.com',
  port: '1521',
  sid: 'ORCL'
}
// console.log(config.sid);


async function run() {
  let connection = await oracledb.getConnection({
    user: config.user,
    password: config.password,
    connectString: config.host + ':' + config.port + "/" + config.sid // [hostname]:[port]/[DB service name]
  });


  let d = await connection.execute("SELECT * FROM Customer");
  // console.log(d.rows[0]);
  let date = new Date();
  let n = date.getTime();
  let userId = n.toString().substring(4);
  // console.log(userId);
  // let firstname = 'ss',lastname = 'ss',email = 'ss',address = 'ss',username,password,customerid = 'ss'
  // let birthdate='12-12-1990'
  // let phone= '0817933333'
  // username = 'dd',
  // password = 'sss'



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
  let user_court = 'c103',
    user_date = '29-MAR-2019'


  // let showTimeSchedule = await connection.execute(`
  //   SELECT time_code,time_range FROM Time_Schedule
  // `);

  // let checkCourtAvailable = await connection.execute(`
  //   SELECT c.court_id,r.reserve_date,t.time_code,t.time_range
  //   FROM Reservation r
  //   LEFT JOIN Time_Schedule t
  //   ON r.reserve_time = t.time_code
  //   LEFT join Court c
  //   ON r.court_id =c.court_id
  //   WHERE r.court_id = '` + user_court +
  //   `' and trunc(r.reserve_date) = '` + user_date + `'
  // `);

  // let timecode = []
  // showTimeSchedule.rows.forEach(timeTable => {
  //   let checkChourt = 0
  //   checkCourtAvailable.rows.forEach(courtstatus => {
  //     if (courtstatus[2] == timeTable[0]) {
  //       checkChourt = 1;
  //       timecode.push({
  //         code: timeTable[0],
  //         range: timeTable[1],
  //         status: '1'
  //       })
  //     }
  //   })
  //   if (checkChourt != 1) {
  //     timecode.push({
  //       code: timeTable[0],
  //       range: timeTable[1],
  //       status: '0'
  //     })
  //   }
  // })


  // console.log(showTimeSchedule,checkCourtAvailable);
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

  // console.log(addReserve);

  // let courtno='110',price='199',courtid='c107';
  // let courttype='PVC',color='Green',status='0'


  let updateCourt = await connection.execute(`
    UPDATE Court
    SET court_no = '`+courtno+ `'  , price = '`+price+`',
      court_type = '`+courttype+ `', court_color = '`+color+`',
      status     = '`+status+ `'
    WHERE court_id = '`+courtid+`'
  `)

  let deleteCourt = await connection.execute(`
    DELETE FROM Court WHERE court_id = '`+courtid+`';
  `)

  console.log(updateCourt,deleteCourt);
  console.log(addReserve);

  // let listCourt = await connection.execute(`
  //   SELECT court_no, price, court_type, court_color, status FROM Court
  // `)

  // console.log(listCourt);

  // let showAllCourt = await connection.execute(`
  //   SELECT c.court_id,r.reserve_date,t.time_code,t.time_range
  //   FROM Reservation r
  //   LEFT JOIN Time_Schedule t
  //   ON r.reserve_time = t.time_code
  //   LEFT join Court c
  //   ON r.court_id =c.court_id
  //   WHERE TRUNC(r.reserve_date) = '`+user_date+`'
  //   AND r.court_id IN (SELECT court_id FROM court )
  // `);


  // console.log(showAllCourt);
  // await connection.execute("commit")

  // let showCustomerReserve = await connection.execute(`
  //   SELECT r.reserve_id,r.court_id,r.reserve_date,c.court_color,t.time_range
  //   FROM Reservation r
  //   JOIN Court c ON c.court_id = r.court_id
  //   JOIN Time_Schedule t ON t.time_code = r.reserve_time
  //   WHERE  customer_id = `+userid+`
  // `);

  // console.log(showCustomerReserve);
  // let inputcode = 'NEW20'


  // let checkPromotion = await connection.execute(`
  //     SELECT Code,Discount FROM Promotion
  //     WHERE Code = '` + inputcode + `'
  //     AND PRO_END > sysdate
  //   `)

  // let havePro = (checkPromotion.rows.length != 0) ? true : false;
  // let amount = 0;
  // price = 120, discount = 50;
  // let billId = 'b2',
  //   reserve_id = 'R0009'


  // if (havePro) {
  //   amount = price - discount
  // } else {
  //   amount = price
  // }
  // let addBill = await connection.execute(`
  //   INSERT INTO Billing VALUES (
  //     '` + billId + `',
  //     '` + reserve_id + `',
  //     sysdate,
  //     '` + inputcode + `',
  //     ` + amount + `,
  //     sysdate,
  //     sysdate)
  // `);



  // console.log(addBill);
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



