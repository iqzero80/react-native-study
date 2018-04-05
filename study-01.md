### 라이브러리 설치

```
npm install -g create-react-native-app
```

### 프로젝트 생성

```
create-react-native-app HelloProject
```

### 개발 환경 실행

```
cd HelloProject
npm start
```

### 애플리케이션 실행
- iOS, Android 폰에 expo 클라이언트 설치
- 애물레이터 실행

```
npm run android
npm run ios
```
  
- React Native API 에 정의된 API 만 사용할 수 있고 다른 네이티브 모듈을 포함하여 개발할 수 없다.

### JSX
  - JavaScript 안에서 XML 문법을 사용할 수 있도록 해주는 것

### Props
  - 컴포넌트에서 사용 할 데이터 중 변동되지 않는 데이터를 다룰 때 사용
  - parent 컴포넌트에서 child 컴포넌트로 데이터를 전달할 때 사용

### state
  - 컴포넌트에서 유동적인 데이터를 다룰 때 사용
  - 상태를 관리하는 Redux? 이용하여 데이터 흐름을 제어할 수도 있다