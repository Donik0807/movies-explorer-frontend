const moviesToRender = {
  
}

export const calcMoviesToRender = () => {
  let moviesToRender;
  const windowWidth = document.documentElement.clientWidth;

  if (windowWidth >= 1230) {
    moviesToRender = 16;
  }

  if (windowWidth < 1230 && windowWidth >= 930) {
    moviesToRender = 12;
  }

  if (windowWidth < 930 && windowWidth >= 590) {
    moviesToRender = 8;
  }

  if (windowWidth < 590) {
    moviesToRender = 5;
  }

  return moviesToRender;
}