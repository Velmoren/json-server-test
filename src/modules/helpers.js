export const debounce = (f, ms) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);

      timer = setTimeout(() => { f.apply(this, args); }, ms);
    };
}