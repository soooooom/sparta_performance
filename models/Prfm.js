import mongoose from "mongoose"

const PerformaceSchema = new mongoose.Schema({
    svcNm : {
        type: String
    },
    svcTime : {
        type: String,
        default : "10am - 8pm"
    },
    payatNm : {
        type: String,
        default : "무료"
    },
    svcURL : {
        type : String,
        default : "www.naver.com"
    },
    usetgtInfo : {
        type: String,
        default : "모든 연령"
    }, 
    telNo : {
        type: String
    },
    areaNm : {
        type: String,
    },
    imgUrl : {
        type : String,
        default : ""
    }

})

const model = mongoose.model("Performance", PerformaceSchema);
export default model;