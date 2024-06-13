import blogsDataf from "./blogsData.js";
import blogCartf from "./blogsCarts.js";
import setCart from "../setCarts.js";
function blogfunc (){
    const blogsData = blogsDataf ();
    const blogCardStr = blogCartf(blogsData);
    return setCart(".blogs",blogCardStr);
}
export default blogfunc;