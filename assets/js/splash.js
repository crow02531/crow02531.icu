---
---

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

Splash.splashList = ["{{ site.data.splash | join: '", "' }}"];