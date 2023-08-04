export const calcMoreToLoad = () => {
  let moreAmount;
  const windowWindth = document.documentElement.clientWidth;

  if (windowWindth >= 1280) {
    moreAmount = 4;
  }

  if (windowWindth < 1280) {
    moreAmount = 2;
  }

  if (windowWindth < 767) {
    moreAmount = 2;
  }

  return moreAmount
}