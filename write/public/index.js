class Write_localStorage {
  constructor() {}

  write_createStorage = (write_board) => {
    const board = JSON.stringify(write_board);
    localStorage.setItem("board", board);
  };
}

class Board {
  uid;
  title;
  writer;
  content;
  createdAt;
  hit;

  constructor(write_tempObj) {
    this.uid = 0;
    this.title = write_tempObj.title;
    this.writer = write_tempObj.writer;
    this.content = write_tempObj.content;
    this.createdAt = new Date();
    this.hit = 0;
  }
}

function write_formClick() {
  let write_formSubmit = document.getElementsByClassName("write-form");
  const write_localStorage = new Write_localStorage();

  write_formSubmit[0].addEventListener("submit", (e) => {
    e.preventDefault();

    const write_tempObj = {
      writer: e.target[0].value,
      title: e.target[1].value,
      content: e.target[2].value,
    };

    const write_board = new Board(write_tempObj);

    write_localStorage.write_createStorage(write_board);
  });
}

function write_init() {
  write_formClick();
}

write_init();
