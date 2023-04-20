# 📚 MOINDA

효율적인 시간관리! 스터디 모집 및 스터디 기록을 제공하는 서비스 

### [모인다 서비스 이용하기](https://moinda.vercel.app/)
<br/>

<img src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/-React_Query-ff2660?style=flat-square&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"/> <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"/> <img src="https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white"/> <img src="https://img.shields.io/badge/-Prisma-1B222D?style=flat-square&logo=prisma&logoColor=white"/> <img src="https://img.shields.io/badge/-PlanetScale-0078D4?style=flat-square&logo=planetscale&logoColor=white"/>

<br/>

## 프로젝트 개발기간 
2022년 2월 15일 ~ 3월 7일 

## 주요 기능 소개 

>

### 메인 페이지 
- 카테고리 별 인기스터디 
- 새로 생긴 스터디
- 현재 참여중인 스터디
<img src="https://user-images.githubusercontent.com/86880916/232049663-259fbef6-2317-4207-a045-999cacdaaa56.gif" width="700"/>


### 스터디 등록  
- 대표 아이콘 설정 
- 해시태그 
- 스터디 시작일 설정 (react-calendar)
<img src="https://user-images.githubusercontent.com/86880916/232050722-0c7a220b-efbd-44c2-ad47-13e73ea1b0bf.gif" width="700"/>

### 출석체크 
- 하루 목표시간 설정 
- 출석 체크 및 체크 아웃 (브라우저를 닫아도 출석 유지)
- 체크 아웃 시에 공부시간 저장 
- 05시마다 출석 정보 초기화  
<img src="https://user-images.githubusercontent.com/86880916/233287289-589333ab-7c5b-43da-81b1-c541ff7225fd.gif" width="700"/>
<img src="https://user-images.githubusercontent.com/86880916/233288006-beb73d88-ab78-4080-9fb8-cb657169128e.gif" width="700"/>

### 스터디 페이지
- 그룹 목표 스터디 시간 설정
- 그룹 상태 설정  (모집중, 진행중, 완료)
- 해당 스터디 구성원들의 출석시간
- 그룹 채팅 
<img src="https://user-images.githubusercontent.com/86880916/233289500-70518110-4d22-4b8b-be69-d579344641e1.gif" width="700"/>

### 뽀모도로 
- 공부시간, 휴식시간 설정 
- 공부시간 / 쉬는 시간으로 4사이클 후 종료
- 새로고침 및 브라우저 종료에도 데이터 유지 
<img src="https://user-images.githubusercontent.com/86880916/233290940-2add7d07-952b-4ac8-8bad-a6fdb4f19ef7.gif" width="700"/>
<img src="https://user-images.githubusercontent.com/86880916/233291062-65679f5a-9c84-4a43-9e4d-9db640bc7c88.gif" width="700"/>


<br/>

## 개선사항

1. 데이터 로딩 시 skeleton ui 사용

- 로딩 중일 때 사용자에게 시각적인 피드백을 제공하기 위해 skeleton ui를 사용. 사용자는 페이지가 로드되는 동안 콘텐츠의 완전한 형태를 볼 수 없지만, skeleton ui는 로딩 중인 콘텐츠를 시각적으로 표시해 사용자에게 로딩 중임을 알리는 역할을 한다.

2. 뽀모도로 시간 데이터 유지 

- 사용자가 뽀모도로 사용중에 새로고침하면 데이터가 사라지는 것을 방지하기 위해 `localStroage`를 사용. useSetTimeout hook을 만들어 1초마다 시간이 차감되도록 설정. 

3. Firebase의 실시간 데이터베이스 기능을 통한 채팅 구현 

- Firebase의 실시간 데이터베이스를 통해 서버와 클라이언트 간의 데이터를 실시간으로 동기화하여 채팅 구현.

4. 정해진 시간마다 출석데이터 초기화 

- vercel에서 제공하는 `Cron Jobs`를 통해 05시마다 출석 데이터를 초기화. 





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

## 회고
[회고](https://solwork.notion.site/2-59373cd4edb94b02ae54c352caaaaedc) <br/>

<br/>

## 팀원

<table>
<tbody>
<tr>
<td align="center"><a href="[https://github.com/hansejun](https://github.com/hansejun)"><img src="https://avatars.githubusercontent.com/u/86880916?v=4" width="100px;" alt=""/><br /><sub><b>한세준</b></sub></a><br /></td>
<tr/>
</tbody>
</table>

