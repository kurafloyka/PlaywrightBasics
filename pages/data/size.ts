enum Sizes {
    Bordo,
    Haki,
    Bej,

  }
  
  function getRandomColor(): string {
    // returns the length
    const len = (Object.keys(Sizes).length / 2) - 1;
    // calculate random number
    const item = (Math.floor(Math.random() * len) + 0);
  
    return Sizes[item];
  }