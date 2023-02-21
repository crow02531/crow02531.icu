---
---

class Splash {

  static #SPLASH_LIST = ["{{ site.data.splash | join: '", "' }}"]

  /**
   * Randomly pick up a splash.
   * 
   * @returns {string}
   */
  static pickSplash() {
    return Splash.#SPLASH_LIST[Math.floor(Math.random() * Splash.#SPLASH_LIST.length)]
  }
}