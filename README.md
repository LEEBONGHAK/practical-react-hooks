# practical-react-hooks

Learn by Building 10 Hooks  
react hook을 만들고, npm pakage에 등록하는 강의  
  
강의 url : https://nomadcoders.co/react-hooks-introduction  
publishing to NPM : https://www.npmjs.com/org/practical-react-hooks?tab=packages
  
how to npm publish?
 - @(npm name) is like a scop on NPM so need to make an organization
 - ```npm login```
 - ```npm publish --access public```
  
---  
## React Hooks?
  
functional component에서 state를 가질 수 있게 해준다. 즉, functional programming 을 가능하게 해준다.  
react hook은 recompose라는 라이브러리에서 시작되었고, 이 라이브러리가 react 팀에 인수 되면서 hook으로 발전했다.  
  
---
Collection of sexy React Hooks ready to install with NPM
  
  
  - [x] useInput : input을 업데이트
  - [x] useTabs : website에 메뉴 또는 무엇이든지 tab을 사용하기 쉽게 만들어 주는 것
  - [x] useTitle : react document의 title을 몇개의 hooks와 함께 바꾸는 것
  - [x] useClick : 어떤 element를 클릭하는 시점을 발견하고 함수 실행
  - [x] useHover : 어떤 element에 마우스를 올렸을 때의 시점을 발견하고 함수 실행
  - [x] useConfirm : 어떤 기능을 확인
  - [x] usePreventLeave : 유저가 변경사항이나 어떤 것을 저장하지 않고 페이지를 벗어나길 원할 때 확인
  - [x] useBeforeLeave : 마우스가 page screen를 벗어나는 시점을 발견하고 함수 실행
  - [x] useFadeIn : 어떤 element든지 상관없이 애니메이션을 fade in
  - [x] useFadeOut : 어떤 element든지 상관없이 애니메이션을 fade out
  - [x] useNetwork : Online또는 Offline으로 바뀔 때 함수 호출
  - [x] useScroll : scroll을 사용할 때를 감지하여 알려줌
  - [x] useFullscreen : 어떤 element든지 fullscreen(전체화면)으로 만들거나 일반 화면으로 돌아가게 만듬
  - [x] useNotification : notification API를 사용해 유저에게 알림을 보냄
  - [x] useAxios : HTTP requests client axios를 위한 wrapper