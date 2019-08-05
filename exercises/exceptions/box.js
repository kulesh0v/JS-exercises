const box = {
  locked: true,
  unlock: function () {
    this.locked = false;
  },
  lock: function () {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Заперто!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  box.unlock();
  try {
    body();
  } catch (e) {
    console.log(e.message);
  }
  box.lock();
}

withBoxUnlocked(function () {
  box.content.push("золотишко");
});

const boxWork = () => {
  try {
    withBoxUnlocked(function () {
      throw new Error("Пираты на горизонте! Отмена!");
    });
  } catch (e) {
    console.log("Произошла ошибка:", e);
  }
  return box.locked;
};

module.exports = boxWork;