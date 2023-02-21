class Splash {

  static #SPLASH_LIST = ["HIIIIIIISSS!", "Grrrrr...", "Full of stars!", "Ow!", "0% sugar!", "Yiiiiike!", "Eek!", "Haha, LOL!", "Woah.", "Whoops!", "Random splash!", "Khaaaaaaaaan!", "Ride the pig!", "Yaaay!", "90% bug free!", "Wow!", "Pumpkinhead!"]

  /**
   * Randomly pick up a splash.
   * 
   * @returns {string}
   */
  static pickSplash() {
    return Splash.#SPLASH_LIST[Math.floor(Math.random() * Splash.#SPLASH_LIST.length)]
  }
}