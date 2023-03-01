# 서와실농원(쇼핑몰) 프로젝트 - 클라이언트

[묘목 판매 사이트: 서와실 농원](https://seowasil.shop/)입니다.

<div align="center">
  <img src="https://img.shields.io/badge/node-16.17.0-339933?logo=node.js"> 
   <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?logo=React"> 
  <img src="https://img.shields.io/badge/TypeScript-4.3.5-3178C6?logo=typescript"> 
  <img src="https://img.shields.io/badge/AWS_S3-white?logo=amazon"> 
  <img src="https://img.shields.io/badge/AWS_CloudFront-white?logo=amazon"> 
  <img src="https://img.shields.io/badge/redux-764ABC?style=flat&logo=Redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white"/><br>
</div>

## 소개

> 여러 묘목들을 판매하는 서와실 농원 Client입니다.

---

| 👉 목차                        |                                                                         |
| ------------------------------ | ----------------------------------------------------------------------- |
| [1. 서비스 개요](#서비스-개요) | 서비스 기능 설명 및 고려사항                                            |
| [2. 구현 사항](#구현-사항)     | API 구현 사항 간단 설명 (자세한 정보를 원하시면 넘어가셔도 무방합니다.) |
| [3. To Do](#to-do)             | 추후 구현 예정인 기능                                                   |
| [4. 배포 구조](#배포-구조)     | 배포 구조에 대한 이미지                                                 |
| [5. Usage](#usage)             | 서비스 설치-실행 및 테스트 방법 확인                                    |
| [6. 참조 문서](#참조-문서)     | 서비스 전반적인 문서 확인                                               |

---

# 서비스 개요

-   묘목 판매사이트 서와실 농원 입니다.

# 구현 사항

<details>
<summary>구현 페이지</summary>
<div markdown="1">
<br>

**메인 페이지**

**상품 페이지**

**문의사항 페이지**

**공지사항 페이지**

**회원가입 페이지**

-   react-daum-postcode를 사용한 간편한 주소 입력

**공지사항 페이지**

**관리자 페이지 (대시보드)**

-   관리자 권한을 가진 유저만 들어오도록 private route 처리
-   상품 등록
    </div>

    </details>

# TO DO

### 테스트 코드 작성

-   앱의 신뢰도를 높이기 위해 테스트 코드 구현 예정

# 배포 구조

<img width="785" alt="스크린샷 2022-09-01 오후 10 44 18" src="https://user-images.githubusercontent.com/54757435/222044619-a5c67076-9dda-413b-9564-1fce73a5038c.jpeg">
</br>

# Usage

### Create .env file

```
REACT_APP_MODE=development
REACT_APP_API_URL="https://seowasil.peacemarket.site/api/"

REACT_APP_AWS_URL=https://gyomdyung-bucket.s3.ap-northeast-2.amazonaws.com/​

```

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start
```

# 참조문서

## 📒 [노션](https://button-molybdenum-e50.notion.site/2de7d659faa046dc8649404dec1fc961)

## 📒 [API 명세서](https://button-molybdenum-e50.notion.site/4-API-e359ae588f6546108575c8d3e2bf3656)

## 📌 [개발 컨벤션](https://button-molybdenum-e50.notion.site/2-Convention-Code-727f64289f384a3bb909a43a1d016c74)

## 기술 특장점 🛠

<details>
<summary>🛠 프론트엔드 코드 품질을 유지 & 상향하기 위해 들인 노력</summary>
<br>

-   TypeScript를 사용하여 타입 검사하기: Props의 유형을 명확히하고 타입 오류를 미리 방지하기 위해 프로젝트 중간에 TypeScript로 마이그레이션.

-   ESLint와 Prettier를 사용하여 코드 스타일과 일관성 유지하기

-   별도의 instance 함수를 만들어 **API 요청에 대한 처리를 통일**시킴.

-   styled-components를 사용해 컴포넌트를 더욱 모듈화하고 재사용성을 높임.

-   react-daum-postcode 라이브러리를 이용한 주소검색
<img width="785" alt="스크린샷 2022-09-01 오후 10 44 18" src="https://user-images.githubusercontent.com/54757435/222031799-6324dd0c-6177-4e73-95fa-3fc2e9865383.gif">
</details>
