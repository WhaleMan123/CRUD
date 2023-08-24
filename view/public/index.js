// const array = [
//   {
//     uid: 1,
//     title: "제목입니다.",
//     writer: "작성자",
//     createdAt: "2023-08-23 15:03:45",
//     content: "글의 내용입니다.",
//     hit: 421,
//   },
// ];

const value = JSON.stringify([
  {
    uid: 1,
    title: "제목입니다.",
    writer: "작성자",
    createdAt: "2023-08-23 15:03:45",
    content: "글의 내용입니다.",
    hit: 421,
  },
]);

localStorage.setItem("board", value);
// location.href = `/view/index.html?id=${view_i}`;

// --------------------------------------------------------------

const view_i = Number(location.href.split("=")[1]);

const view_title = document.getElementById("view-title");
const view_titleInput = JSON.parse(localStorage.getItem("board"))[view_i].title;
view_title.innerText = view_titleInput;

const view_writer = document.getElementById("view-writer");
const view_writerInput = JSON.parse(localStorage.getItem("board"))[view_i]
  .writer;
view_writer.innerText = view_writerInput;

const view_createdAt = document.getElementById("view-createdAt");
const view_createdAtInput = JSON.parse(localStorage.getItem("board"))[view_i]
  .createdAt;
view_createdAt.innerText = view_createdAtInput;

const view_content = document.getElementById("view-content");
const view_contentInput = JSON.parse(localStorage.getItem("board"))[view_i]
  .content;
view_content.innerText = view_contentInput;
