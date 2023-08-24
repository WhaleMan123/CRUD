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

// const value = JSON.stringify([
//   {
//     uid: 1,
//     title: "제목입니다.",
//     writer: "작성자",
//     createdAt: "2023-08-23 15:03:45",
//     content: "글의 내용입니다.",
//     hit: 421,
//   },
// ]);

// localStorage.setItem("board", value);

// location.href = `/view/index.html?id=${view_i}`;

// --------------------------------------------------------------

const view_i = Number(location.href.split("=")[1]);
const view_objArr = JSON.parse(localStorage.getItem("board"));

for (let i = 0; i < view_objArr.length; i++) {
  if (view_objArr[i].uid === view_i) {
    const view_title = document.getElementById("view-title");
    const view_titleInput = view_objArr[i].title;
    view_title.innerText = view_titleInput;

    const view_writer = document.getElementById("view-writer");
    const view_writerInput = view_objArr[i].writer;
    view_writer.innerText = view_writerInput;

    const view_createdAt = document.getElementById("view-createdAt");
    const view_createdAtInput = view_objArr[i].createdAt;
    view_createdAt.innerText = view_createdAtInput;

    const view_content = document.getElementById("view-content");
    const view_contentInput = view_objArr[i].content;
    view_content.innerText = view_contentInput;

    break;
  }
}

// 삭제 버튼 구현
const view_deleteBtn = document.querySelector(".delete-btn");

function handelDeleteBtn() {
  for (let i = 0; i < view_objArr.length; i++) {
    if (view_objArr[i].uid === view_i) {
      const view_boardArray = JSON.parse(localStorage.getItem("board"));
      view_boardArray.splice(i, 1);
      const view_boardArrayStr = JSON.stringify(view_boardArray);
      localStorage.setItem("board", view_boardArrayStr);
      location.href = "../index.html";
      break;
    }
  }
}

view_deleteBtn.addEventListener("click", handelDeleteBtn);

const modify_btn = document.querySelector("#modify-btn");

modify_btn.addEventListener("click", () => {
  location.href = `../modify/index.html?id=${view_i}`;
});
