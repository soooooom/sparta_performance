const HOME = "/";
const SEARCH = "/search";
const INFO = "/:id";

const routes ={
    home: HOME,
    search: SEARCH,
    info : id =>{
        if(id){
            return `/${id}`;
        }
        else{
            return INFO;
        }
    }
}
export default routes;