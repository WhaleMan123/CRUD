# CRUD

## 역할 분담

### 황현준

write

### 임태훈

view

### 이선균

modify

### 김보람

list

## html 구조

### list

/index.html

/public/index.js

/public/index.css

### write

/write/index.html

/write/public/index.js

/write/public/index.css

### modify

/modify/index.html

/modify/public/index.js

/modify/public/index.css

### view

/view/index.html

/view/public/index.js

/view/public/index.css

## 데이터

### 구조체

[{
  uid: ,
  title: ,
  writer: ,
  createdAt: ,
  content: ,
  hit: ,
}, ]

### localStorage 명칭

게시글 객체 배열: "board"

### URL 값 전달 형식

ex) ../write/uid?=1

## 코드 컨벤션

프리티어 사용

### css

[역할]-명칭

kebab-case 사용

ex) .list-content-wrapper

### js 변수 

[역할]_명칭

camelCase 사용

ex) list_objArr

## 커밋 컨벤션

### branch 명칭

[역할]

ex) list

### feature

"feat: [역할] 작성 중 / [기능] 구현 완료"

"feat: [역할] 작성 완료"

"feat: [역할] 수정 중 / [기능] 수정 완료"

"feat: [역할] 수정 완료"

### main

"merge [브랜치 명] 작성 완료"
