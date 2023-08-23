// const boardValue = [{
//     uid:1,
//     title:"제목입니다.",
//     writer:"작성자",
//     createdAt: "2023-08-23",
//     hit: 0},
//     {
//     uid:1,
//     title:"제목입니다.",
//     writer:"작성자",
//     createdAt: "2023-08-23",
//     hit: 0},
//     {
//     uid:1,
//     title:"제목입니다.",
//     writer:"작성자",
//     createdAt: "2023-08-23",
//     hit: 0},
// ]

// localStorage.setItem("board",JSON.stringify(boardValue))
const list_board = localStorage.getItem("board")
  ? JSON.parse(localStorage.getItem("board"))
  : [];
const list_tbody = document.querySelector("tbody");

for (let i = 0; i < list_board.length; i++) {
  const list_tableRow = () => `
    <tr>
        <td>${list_board[i].uid}</td>
        <td><a href="../view/index.html?uid=${list_board[i].uid}">${list_board[i].title}</a></td>
        <td>${list_board[i].writer}</td>
        <td>${list_board[i].createdAt}</td>
        <td>${list_board[i].hit}</td>
    </tr>
    `;
  list_tbody.innerHTML += list_tableRow();
}
