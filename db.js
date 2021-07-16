import mongoose from "mongoose"
import dotenv from "dotenv"
import request from "request";
import Performance from "./models/Prfm";
const convert = require('xml-js');


//const SERVICEKEY = '774d6e4874736d313838416b686f4a'
//const requestUrl = `http://openapi.seoul.go.kr:8088/${SERVICEKEY}/xml/ListPublicReservationCulture/1/25/`
const requestJSUrl = 'http://openapi.seoul.go.kr:8088/504d534746736d3135326b53474348/xml/ListExhibitionOfSeoulMOAInfo/1/13/'
const requestSJUrl = 'http://openapi.seoul.go.kr:8088/5052784542736d3135307a7943766b/xml/SJWPerform/1/10'
const requestPHUrl = 'http://openapi.seoul.go.kr:8088/5050754756736d3138335155717164/xml/SeoulPhilPblprfr/1/10/'
dotenv.config();
 
mongoose.connect(
    process.env.MONGOURL, 
    {
    useNewUrlParser: true,
    useFindAndModify : false
    }
);

const db = mongoose.connection;
//new connection

const handleOpen =() => console.log("Connected to DB");
const handleError = error => console.log(`Error on DB Connection : ${error}`);

db.once("open", handleOpen);
//1번만 실행하므로
db.on("error", handleError);
/*
request.get(requestSJUrl, async (err,res,body) =>{
    if(err){
        console.log(`err => ${err}`)
    }
    else {
        if(res.statusCode == 200){
            var result = body
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 20});
            const parsedData = JSON.parse(xmlToJson);
            const parsedRow = parsedData.SJWPerform.row;
            for (var i=1;i<parsedRow.length; i++) {
                // console.log(parsedRow[i].SVCID._text);
                const newPerformance = await Performance.create({
                    svcNm : parsedRow[i].TITLE._text,
                    payatNm : parsedRow[i].TICKET_INFO._text,
                    usetgtInfo : parsedRow[i].AGE._text,
                    telNo : parsedRow[i].INQUIRY_PHONE._text,
                    svcURL : "https://www.sejongpac.or.kr/portal/main/contents.do?menuNo=200085",
                    areaNm : parsedRow[i].PLACE_NAME._text,
                    svcTime : parsedRow[i].PLAY_TIME._text,
                    imgUrl : "https://brand.seoul.go.kr/data/2019/mgdat/BK014/kor/BK014_1571034844790.png"
                    }); 
                console.log(newPerformance);
             }
        }

    }
})

request.get(requestPHUrl, async (err,res,body) =>{
    if(err){
        console.log(`err => ${err}`)
    }
    else {
        if(res.statusCode == 200){
            var result = body
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 20});
            const parsedData = JSON.parse(xmlToJson);
            const parsedRow = parsedData.SeoulPhilPblprfr.row;
            for (var i=1;i<parsedRow.length; i++) {
                // console.log(parsedRow[i].SVCID._text);
                const newPerformance = await Performance.create({
                    svcNm : parsedRow[i].PBLPRFR_NM._text, // PBLPRFR_NM
                    svcTime : parsedRow[i].PBLPRFR_TM._text, //
                    payatNm : parsedRow[i].TICKET_PC._text, //TICKET_PC 
                    svcURL : "https://www.seoulphil.or.kr/perf/ticketingGuide?langCd=ko&menuFlag=MFLG0001",
                    telNo : "1588-1210",
                    areaNm : parsedRow[i].PBLPRFR_PLACE._text, //PBLPRFR_PLACE
                    imgUrl: "https://brand.seoul.go.kr/data/2019/mgdat/BK014/kor/BK014_1571038683381.png"//PBLPRFR_IMAGE_URL
                    });
                console.log(newPerformance);
             }
        }

    }
})

request.get(requestJSUrl, async (err,res,body) =>{
    if(err){
        console.log(`err => ${err}`)
    }
    else { 
        if(res.statusCode == 200){
            var result = body
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 20});
            const parsedData = JSON.parse(xmlToJson);
            const parsedRow = parsedData.ListExhibitionOfSeoulMOAInfo.row;
            for (var i=1;i<parsedRow.length; i++) {
                // console.log(parsedRow[i].SVCID._text);
                const newPerformance = await Performance.create({
                    svcNm : parsedRow[i].DP_NAME._text,
                    payatNm : "무료",
                    svcURL : "http://sema.seoul.go.kr",
                    telNo : "02-2124-8800",
                    areaNm : parsedRow[i].DP_PLACE._text,
                    imgUrl: parsedRow[i].DP_MAIN_IMG._text
                    });
                console.log(newPerformance);
             }
        }

    }
})
*/
/*
request.get(requestJSUrl, async (err,res,body) =>{
    if(err){
        console.log(`err => ${err}`)
    }
    else { 
        if(res.statusCode == 200){
            var result = body
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 20});
            const parsedData = JSON.parse(xmlToJson);
            const parsedRow = parsedData.ListExhibitionOfSeoulMOAInfo.row;
            for (var i=1;i<parsedRow.length; i++) {
                // console.log(parsedRow[i].SVCID._text);
                const newPerformance = await Performance.create({
                    svcNm : parsedRow[i].DP_NAME._text,
                    payatNm : "무료",
                    svcURL : "http://sema.seoul.go.kr",
                    telNo : "02-2124-8800",
                    areaNm : parsedRow[i].DP_PLACE._text,
                    imgUrl: parsedRow[i].DP_MAIN_IMG._text
                    });
                console.log(newPerformance);
             } 
        }

    }
})*/