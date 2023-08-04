export const calcMoviesToRender = () => {
  let moviesToRender;
  const windowWindth = document.documentElement.clientWidth;

  if (windowWindth >= 1280) {
    moviesToRender = 16;
  }

  if (windowWindth < 1280) {
    moviesToRender = 8;
  }

  if (windowWindth < 767) {
    moviesToRender = 5;
  }

  return moviesToRender;
}