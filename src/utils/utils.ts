export const sleep = async (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const isClient = () => typeof window !== "undefined";

export const isInViewport = function (elem: Element) {
//   setTimeout(() => {
    if(!isClient()) return
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
//   }, 300);
};
