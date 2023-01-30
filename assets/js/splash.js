class Splash {

  /**
   * Randomly pick up a splash.
   * 
   * @returns {string}
   */
  static pickSplash() {
    return Splash.splashList[Math.floor(Math.random() * Splash.splashList.length)];
  }
}

Splash.splashList = ["HIIIIIIISSS!", "Grrrrr...", "Full of stars!", "Ow!", "0% sugar!", "Yiiiiike!", "Eek!", "Haha, LOL!", "Woah.", "Whoops!", "Random splash!", "Khaaaaaaaaan!", "Ride the pig!", "Yaaay!", "90% bug free!", "Wow!", "Pumpkinhead!"];