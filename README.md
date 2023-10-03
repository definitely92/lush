### 러쉬 온라인 스토어

## 목적

러쉬의 온라인 스토어를 React 라이브러리 환경에서 구축을 하고 스타일은 기존의 사이트의 디자인을 최대한 구현하며 Scss를 사용합니다.
메인 페이지와 간단한 상세페이지를 만들고 장바구니 기능을 구현하기 입니다.
메인 페이지는 반응형으로 만들고 스크롤을 내릴 때 마다 각 UI에 애니메이션 효과를 주었습니다.
github 링크를 사용하여 배포하였습니다.

페이지의 UI를 각각 컴포넌트로 나누어 재사용성을 높여서 만드는 시간을 단축하였습니다.

Scss를 사용하여 기존의 css 보다 코드의 가독성을 높였고, 공통 되는 스타일들을 변수로 따로 지정 활 수 있어서
재활용성이 좀 더 높습니다.

감사합니다.

[포트폴리오 링크](https://definitely92.github.io/lush)

## 실행 방법

```
npm install

npm start
```

<br>

## 📁 폴더 구조

```
src
 ┣ components // 컴포넌트
 ┣ hooks // 커스텀 훅
 ┣ libs // 변수 관리
 ┣ store // 전역 상태 관리
 ┃ ┣ cartslice.js
 ┃ ┣ store.js
 ┣ pages // 페이지 관리
 ┣ assets //  CSS
 ┃ ┣ styles
 ┣ App.js // 라우터 관리
 ┗ index.js
```

<br>

## 🛠️ 기술 스택

<div align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=HTML5&logoColor=E34F26" />
<img src="https://img.shields.io/badge/SCSS-1572B6?style=plastic&logo=SCSs&logoColor=1572B6" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=F7DF1E" />
</div>

<div align="center">
<img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=plastic&logo=React&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/React Router-6.14.2-CA4245?style=plastic&logo=React Router&logoColor=CA4245" />
<img src="https://img.shields.io/badge/Redux toolkit-6.0.6-DB7093?style=plastic&logo=Redux toolkit&logoColor=DB7093" />
</div>

<div align="center">
<img src="https://img.shields.io/badge/Eslint-8.45.0-4B32C3?style=plastic&logo=Eslint&logoColor=4B32C3" />
<img src="https://img.shields.io/badge/Prettier-3.0.0-F7B93E?style=plastic&logo=Prettier&logoColor=#F7B93E" />
<img src="https://img.shields.io/badge/SVG-528DD7?style=plastic&logo=Font Awesome&logoColor=528DD7" />
</div>

<br>

## 🎆 주요 기능

<table>
  <tr>
    <td> 
    <p align="center">메인 PC</p>
    </td>
    <td>
    <p align="center">메인 Mobile</p>
    </td>
  </tr>
  <tr>
    <td>
      ![lush_shop_pc](https://github.com/definitely92/lush/assets/132203871/9b679202-094b-4804-9780-350508363450)
    </td>
    <td>![lush_shop_m](https://github.com/definitely92/lush/assets/132203871/924bc93b-5c9f-42ee-907b-b8e003d8d20b)</td>
  </tr>
 <tr>
    <td> 
    <p align="center">상품 상세</p>
    </td>
    <td>
    <p align="center">장바구니</p>
    </td>
  </tr>
   <tr>
    <td>
      ![lush_shop_2](https://github.com/definitely92/lush/assets/132203871/42d23423-7150-4883-9b9b-3dd541869a40)
    </td>
    <td>![lush_shop_3](https://github.com/definitely92/lush/assets/132203871/182238e3-8ffc-4b9e-a69b-018eebd32263)</td>
  </tr>
</table>

<br>

## 🎆 상세 내용

- react를 사용한 이유

  - 프로젝트를 계속 보완해나가면서 수정 및 추가를 효율적으로 유지 보수 하기 위해서 입니다.
  - 가상 dom을 사용하여 실제 dom을 최소화 시켜 dom 업데이트를 효율적으로 처리하여 페이지 업데이트를 부드럽게 하려고 했습니다.
  - 컴포넌트를 재사용하여 만드는 시간을 절약하기 위해서 사용했습니다.
  - 수정 및 추가가 필요한 경우 페이지 전체에서 찾기보다는 컴포넌트 별로 수정이 필요한 곳만 따로 관리 할 수 있어서 쉽게 업데이트가 가능합니다.

- 메인

  - 모바일 환경으로만 되어있는 러쉬 사이트를 피씨와 테블릿 에서 좀 더 보기 편한 화면을 제공하기 위해 반응형으로 바꾸었습니다.
  - 자바스크립트와 css를 이용하여 스크롤에 따라서 각 컴포넌트에 애니메이션이 동작하도록 하였습니다.
  - swiper 플러그인을 사용하여 슬라이더를 구현했습니다.

- 스타일

  - scss를 사용하여 작성하였고 이로 인해 코드의 가독성을 높였습니다. 또한 스타일 값에 변수를 정의하여 공통으로 적용되는 스타일을 관리 하기 쉽게 하였습니다.
  - 기존의 러쉬 사이트의 스타일과 디자인을 최대한 동일하게 구축하였습니다.

- 상품 상세 페이지

  - 페이지의 새로고침 없이 각 상품의 상세페이지로 이동 할 수 있습니다. 동적으로 변하는 URL의 id 파라미터 값을 추출 하여 상품 정보를 가져오고 렌더링 할 수 있어서 동적인 상세페이지를 간편하게 구현 가능 합니다.
  - reactRouter를 사용하여 브라우저의 url이 변경될 때 새로고침 하지 않고 url에 맞는 컴포넌트를 렌더링 하며 동적으로 url을 생성하고 처리하여 유동적인 데이터에 따라 다양한 화면을 보여주도록 하였습니다.

- 장바구니
  - 상품 상세페이지에서 장바구니 버튼을 클릭시 팝업 창이 노출 되어 장바구니로 이동할지 확인 합니다. 장바구니에는 기본적으로 상품 수량 1개가 등록 됩니다.
  - 장바구니에 있는 상품과 동일한 상품 상세 페이지에서 장바구니 클릭시 장바구니의 상품 수량이 추가 됩니다.
  - 장바구니에 없는 상품은 1개의 새로운 상품으로 장바구니에 추가 됩니다.
  - 수량을 더하고 뺄 수 있으며 수량에 따라 각 상품의 가격과 장바구니에 있는 전체 상품의 총 가격이 바로 확인 됩니다.
