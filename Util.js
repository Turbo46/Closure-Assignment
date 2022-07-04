export const cutFunc = function (num){
    const cutAvanger = function (avanger){
        if (num > 0){
        console.log(avanger.slice(0,num));
        }
        else {
            console.log(avanger.slice(num));
        }
    }
    return cutAvanger;
}