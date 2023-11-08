export function correctPullDown(){
    const app = document.getElementById("app");
    let touchstartY;
    app.addEventListener("touchstart",function(event){
        const events = event.touches[0] || event;
        touchstartY=events.clientY;//获取触摸目标在视口中的y坐标
    },false);

    app.addEventListener("touchmove",function(event){
        const events = event.touches[0] || event;
        //注意document.body.scrollTop始终为0
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;//获取滚动部分的高度
        const clientHeight = document.documentElement.clientHeight;//获取手机屏幕高度（可视部分高度）
        const scrollHeight = document.body.scrollHeight;//所有内容的高度
        if(events.clientY>touchstartY&&scrollTop===0&&event.cancelable){
            event.preventDefault();//禁止到顶下拉
        }else if(scrollTop+clientHeight>scrollHeight&&event.cancelable){
            event.preventDefault();//禁止到底上拉
        }
    },false);

}




