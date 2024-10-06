export const debounce = (fn, ms) => {
    let timer;
    return function(...arg){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, ms)
    }
}