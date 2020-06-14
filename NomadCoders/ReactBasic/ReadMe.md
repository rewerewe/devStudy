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

## styled-components (Local)

<code>
  npm add styled-components
</code>

```

  import styled from "styled-components";

  const Header = styled.header``;
  const List = styled.ul`
	display: flex;
	&:hover {
		background-color: lightpink;
	}
`;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (
	<Header>
		<List>
			<Item>
				<SLink to="/">Movies</SLink>
			</Item>
    <List>
  <Header>
```

- style이 있는 컴포넌트를 생성할 수 있도록 만들어 주고,
- component 안에서 styling 할 수 있다. (Local Style)

## styled-components (Global)

<code>
npm add styled-reset
</code>

- 사이트 폰트 설정, SC 설치 등 전반적인 설정 시 유용 (Global Style)

## withRouter

- Header에 어떤 Route에 있는지 알 수 있음.
- props.current 속성으로 true/false를 파악함.
- Header component와 연결하기 위해서 withRounter 사용함.
- withRouter는 다른 컴포넌트를 감싸는 컴포넌트로 Router 정보를 가지고 있음.
- props.location.pathname으로 현재 헤더가 위치한 곳을 알 수 있음.

## Networing

- API로 데이터 받아오는 방법
- API URL은 사이트 주소 + key + encoding 등 중복되므로 Api.js 파일로 관리
- api.js로 작업하기 위해 Axios 활용
- append_to_response를 제공함: 비디오나 이미지 같은 것을 덧붙이면 관련된 항목을 가져올 수 있다.
- ex) append_to_response를 사용하면 MovieAPI에서 예고편, 관련된 비디오 리스트 가져올 수 있음

#### Axios Instances

<code>
npm add Axios
</code>

- [공식문서] https://github.com/axios/axios
- Axios는 request와 작업하기 좋음
- Axios의 좋은 점은 Axios 인스턴스를 설정해줄 수 있다는 점.

  즉, baseURL, Header, timeout 등을 한 파일에 설정해둘 수 있어 여러곳에서 반복해서 작성하지 않아도 됨.

## Container Present Pattern (React Component Coding Pattern)

- API verb, functions을 화면 안에 넣는 작업 중 하나.

  [작동원리]

- container = data (state 값 있음) -> api 호출 -> 로직 처리
- presenter = style (state 값 없음) -> 데이터 보여줌 (API 모르고, 클래스 없고, 그냥 함수형 컴포넌트임)

  [사용법]

- Router 폴더 하위에 메뉴에 맞는 폴더 생성
- index.js 항상 생성 (모든 폴터, 모든 곳에서 사용 => export container 한다)
- component가 마운트 되면 state 값을 찾아서 설정해줌 => 에러 있으면 loading:false로 변경

  [처리방법]

- 1. 전체 API요청을 Container에서 할 수 있다.
- 2. 각각의 요청을 분리된 함수로 만들어서 따로 요청할 수 있다.
     ex) getNowPlaying(), getUpcoming(), getPopular()
     데이터가 크지 않을 경우 componentDidMount() 에서 한다.

## Presenter Structure
