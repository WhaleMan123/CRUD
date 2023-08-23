class Write_localStorage {
  constructor() {}

  write_getStorage = () => {
    const board = localStorage.getItem("board");

    if (board != null) {
      return JSON.parse(board);
    } else if (board == null) {
      return new Array();
    }
  };

  write_createStorage = (write_board) => {
    const board = JSON.stringify(write_board);

    const write_boardData = this.write_getStorage();

    write_boardData.push(write_board);

    localStorage.setItem("board", JSON.stringify(write_boardData));
  };

  write_getUid() {
    const boardData = this.write_getStorage();

    if (boardData.length == 0) return 1;

    const uid = boardData[boardData.length - 1].uid + 1;

    return uid;
  }
}

class Board {
  uid;
  title;
  writer;
  content;
  createdAt;
  hit;

  constructor(write_tempObj, write_localStorage) {
    this.uid = write_localStorage.write_getUid();
    this.title = write_tempObj.title;
    this.writer = write_tempObj.writer;
    this.content = write_tempObj.content;
    this.createdAt = new Date();
    this.hit = 0;
  }
}

function write_formClick(write_localStorage) {
  let write_formSubmit = document.getElementsByClassName("write-form");

  write_formSubmit[0].addEventListener("submit", (e) => {
    e.preventDefault();

    const write_tempObj = {
      writer: e.target[0].value,
      title: e.target[1].value,
      content: e.target[2].value,
    };

    const write_board = new Board(write_tempObj, write_localStorage);

    write_localStorage.write_createStorage(write_board);

    location.href = "../view/index.html?uid=" + write_board.uid;
  });
}

function write_init() {
  const write_localStorage = new Write_localStorage();
  write_formClick(write_localStorage);
}

write_init();
