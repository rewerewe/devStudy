# React 

## Install
React 설치하는 두가지 방법: 
* Window : npm / Mac : yarn 명령어 사용
1. npm으로 모듈을 local computer에 설치하여 사용

```
npm global add create-react-app  
creat-react-app 프로젝트명
```  

2. npx로 global 모듈로 설치하여 사용   
(npx는 최신버전의 creat-react-app을 사용할 수 있다.  
사용이 끝나면 컴퓨터에서 삭제한다) 

```
npm global add npx   
npm i npx -g  
npx create-react-app 프로젝트명 
```
   

## Settings
- src > index.js 와 App.js 제외한 파일 삭제.
- public > index.html 와 manifest.json 제외한 파일 삭제.
- src 폴더 밖으로 .env 파일 생성 > NODE_PATH=src 추가   
(path 설정으로 src 내의 파일을 볼수 있다)


## Prop-types
```
npm add prop-types
```

## Router 
```
npm add react-router-dom
```

- React Router 간단한 컴포넌트 묶음. 
- 다른 컴포넌트를 가지고 있는데, 모든 Route는 컴포넌트가 된다. 

```
class App extends Component {
  render() {
    return <></>;
  }
}
```
- fragments 원하는 컴포넌트만큼 return 할수 있게 됨. 