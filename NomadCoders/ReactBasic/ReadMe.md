# React 

## Install
 
#### Window : npm / Mac : yarn 명령어 사용

React 설치하는 두가지 방법:
1. npm으로 local computer에 설치하여 사용

<code>
npm global add create-react-app  

creat-react-app 프로젝트명
</code> 

2. npx로 global 모듈로 설치하여 사용   
-- npx는 최신버전의 creat-react-app을 사용할 수 있음  
-- 사용이 끝나면 컴퓨터에서 삭제함

<code>
npm global add npx   

npm i npx -g  

npx create-react-app 프로젝트명 
</code>

   

## Settings
- src >> index.js 와 App.js 제외한 파일 삭제.
- public >> index.html 와 manifest.json 제외한 파일 삭제.
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

#### Fragments
```
class App extends Component {
  render() {
    return <></>;
  }
}
```
- fragments 원하는 컴포넌트만큼 return 할수 있게 됨. 


#### Composition
- 두개의 Route를 동시에 랜더링 하는 방식
- Route path에 /about 있다면 둘 다 랜더링 함. 

#### Redirect

<code>
  Redirect from="*" to="/"
</code>

- Route의 path 중 일치하는 것이 없다면, "/"로 보내줌. 
- 두 개의 Route를 같이 Render할 때 에러가 발생하는데, Switch를 써주어야 한다. 

#### Switch 
- 한 번에 오직 하나의 Route만 Render하는 역할을 함.

