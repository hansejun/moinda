# 📚 MOINDA

효율적인 시간관리! 스터디 모집 및 스터디 기록을 제공하는 서비스 

### [모인다 서비스 이용하기](https://moinda.vercel.app/)
<br/>

<img src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/-React_Query-ff2660?style=flat-square&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"/> <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"/> <img src="https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white"/> <img src="https://img.shields.io/badge/-Prisma-1B222D?style=flat-square&logo=prisma&logoColor=white"/> <img src="https://img.shields.io/badge/-PlanetScale-0078D4?style=flat-square&logo=planetscale&logoColor=white"/>

<br/>

## 프로젝트 개발기간 
- 초안 : 2022년 1월 16일 ~ 2월 14일 [초안](https://github.com/M0INDA/Frontend)
- 마무리 : 2022년 2월 15일 ~ 3월 7일 

## 페이지 소개 

>

1. 메인 페이지 
- 카테고리 별 인기스터디 노출
- 새로 생긴 스터디 노출 
- 현재 참여중인 스터디 노출
<br/>
<img src="https://user-images.githubusercontent.com/86880916/232047604-ea401139-b378-4300-807b-402882167478.gif" width="700px"/>
1. 여행 상품 리스트의 가격(`price`), 공간(`spaceCategory`) 필터 기능을 만들어주세요.
   - 예시) 0 - 1000, 1500 - 3000 가격
   - 예시) 서울, 부산 공간
   - 개별 필터링과, 다중 필터링이 모두 가능하도록 구현해주세요
1. 여행 상품 장바구니 (/reservations)를 만들어주세요.
   - 저장한 여행 상품의 리스트를 보여주고 삭제가 가능할 수 있도록 구성해주세요.
   - 여행 상품의 구매 수량을 변경 가능할 수 있도록 해주세요.
   - 장바구니에 있는 여행 상품의 총 결제액 수를 계산하여 표시해주세요

<br/>

## 🌟 최종 결과

<br/>
예약 및 모달 기능 
<img src="https://user-images.githubusercontent.com/86880916/224321973-32aa063d-f024-4052-a15c-93f87244d5a3.gif" width="500px"/>
<br/>
가격 및 지역 필터링 기능
<img src="https://user-images.githubusercontent.com/86880916/224322115-b3d492c5-61a4-4cd2-b13f-3081c69eaf30.gif" width="500px"/>
수량 변경 및 총액 계산 기능
<br/>
<img src="https://user-images.githubusercontent.com/86880916/224322169-1fc9d429-6a8c-4a65-a92a-dce6ac951aa2.gif" width="500px"/> 
<br/>

## **작업 방식 안내**

1. 각 요구사항마다 이슈를 생성합니다.
2. 요구사항에 해당하는 작업이 완료되면, 해당 이슈에 대한 커밋을 작성합니다.
3. 작성한 코드에 대해 리뷰를 진행합니다.
4. 각 요구사항에 대해 Best Practice를 선정하고, 개선사항을 토론합니다.
5. 개선사항에 맞게 코드를 수정합니다.
6. 모든 작업이 완료되면 최종 결과물을 도출합니다.

<br/>

## 개선사항

1. 데이터 로딩 시 skeleton ui 사용

- 로딩 중일 때 사용자에게 시각적인 피드백을 제공하기 위해 skeleton ui를 사용. 사용자는 페이지가 로드되는 동안 콘텐츠의 완전한 형태를 볼 수 없지만, skeleton ui는 로딩 중인 콘텐츠를 시각적으로 표시해 사용자에게 로딩 중임을 알리는 역할을 한다.

2. 장바구니 새로고침 시 데이터 유지

- 사용자가 장바구니를 새로고침하면 장바구니의 내용이 사라지는 것을 방지하기 위해 `sessionStorageMiddleware`라는 미들웨어를 추가.이 미들웨어는 Redux Store가 dispatch되기 전에 실행되며, 상태를 sessionStorage에 저장한다. 이를 통해 사용자가 새로고침하거나 브라우저를 닫았을 때 상태가 유지되도록 한다.

3. ChakraUi의 Toast alert 사용

- 사용자의 행동에 대한 결과를 시각적으로 전달함으로써 사용자 경험을 개선시킬 수 있다.

4. 메인 페이지에서 상품이 장바구니에 담기면 예약버튼 비활성화

- 장바구니에 상품을 추가할 때, 예약 버튼이 비활성화되면 사용자가 장바구니에 무엇이 들어있는지 쉽게 파악할 수 있고, 장바구니와 관련된 작업을 진행할 때 사용자의 실수를 방지할 수 있다.

5. ChakraUi의 <NumberInput/> 사용해서 장바구니 수량 변경

- 수량 버튼에 아무것도 입력하지 않으면, 해당 값이 `undefined`로 전달되어 `NaN`이 발생. 잘못된 값이 들어왔을 경우 1로 처리

6. 장바구니 수량 및 총 금액 계산 방식

- 장바구니에 담긴 상품의 수량을 효율적으로 관리하기 위해 redux state를 사용.
- 총 금액은 예약 상품 변경시마다 reduce()로 계산

7. 장바구니 개별 상품의 수량에 따른 가격 변동도 확인할 수 있도록 유틸 함수 구현

- 장바구니에 담긴 상품의 수량이 변경될 때마다, 해당 상품의 가격도 변동. 이를 효율적으로 처리하기 위해 유틸 함수를 구현

8. 배포는 public에 json파일을 두고 fetch `baseURL: '/mock/mock_data.json` 을 통해 데이터 조회

<br/>

## convention

### **git Flow**

- branch : 기능별 작업
- main(master) : 최종 배포
  <img src="https://user-images.githubusercontent.com/80516736/221170041-8b7d3762-1152-4407-a600-d9fe1e87e08d.png" width="500px">

<br/>

## **Commit Message Pre-fix**

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 내부 문서 추가/수정
- style: 코드 스타일 수정
- refactor: 코드 리팩토링
- test: 테스트 추가/수정
- chore: 빌드 관련 코드 수정
- env: 초기 세팅

<br/>

## 회고 및 회의록

[회고](https://solwork.notion.site/2-59373cd4edb94b02ae54c352caaaaedc) <br/>
[회의록](https://solwork.notion.site/cfbf7c8530ab43f29695dcac5923fd1c)<br/>
[기술 및 기능 리뷰](https://github.com/wanted-pre-7/pre-onboarding-9th-2-7/wiki)

<br/>

## 팀원

<table>
<tbody>
<tr>
<td align="center"><a href="[https://github.com/hansejun](https://github.com/hansejun)"><img src="https://avatars.githubusercontent.com/u/86880916?v=4" width="100px;" alt=""/><br /><sub><b>한세준</b></sub></a><br /></td>
<tr/>
</tbody>
</table>

