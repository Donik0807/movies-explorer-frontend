export const calcMoreToLoad = () => {
  let moreAmount;
  const windowWidth = document.documentElement.clientWidth;

  if (windowWidth >= 1230) {
    moreAmount = 4;
  }

  if (windowWidth < 1230 && windowWidth >= 930) {
    moreAmount = 3;
  }

  if (windowWidth < 930 && windowWidth >= 590) {
    moreAmount = 2;
  }

  if (windowWidth < 590) {
    moreAmount = 2;
  }

  return moreAmount
}