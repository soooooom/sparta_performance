import Performance from "../models/Prfm";

// 대분류 maxclassnm
// 이름 svcnm
// 접수상태 SVCSTATNM
// 금액 PAYATNM
// 대상 USETGTINFO
// 링크 SVCURL
// 번호 TELNO
// 지역 AREANM
// 이미지 IMGURL
export const home = async(req, res) => {    
    try {
        const prfms = await Performance.find({}).sort({ _id: -1 });
        res.render("home", { pageTitle: "Home", prfms });
      } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", prfms: [] });
      }
}
// 끝
export const search = async (req, res) => {
    const {
        query: { term: searchingFor }
      } = req;
      let prfms = [];
    try {
        prfms = await Performance.find({
        svcNm: { $regex: searchingFor, $options: "i" }
        });
    } catch (error) {
        console.log(error);
    }
    res.render("search", { pageTitle: "Search", searchingFor, prfms });
};
// 끝
export const prfmInfo = async(req,res) => {
    const {
        params: { id }
      } = req;
      try {
        const prfm = await Performance.findById(id);
        res.render("info", { pageTitle: prfm.svcNm, prfm });
      } catch (error) {
        console.log(error);
        res.redirect(routes.home);
      }
};