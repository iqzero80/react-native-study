### Images

- 정적 이미지 리소스
  - iOS와 Android는 이미지와 미디어 소스를 같은 방법으로 제공
  ```
  <Image source={require('./my-icon.png')} />
  ```

- 이미지 외 다른 리소스
  - mp3, wav, mp4, pdf 등 여러가지 미디어를 지원

- 하이브리드 앱의 이미지
  - 이미 번들로 제공된 이미지를 사용할 수 있음.
  - 확장자 없이 바로 이미지 이름만 사용.
  ```
  <Image source={{uri: 'app_icon'}} style={{width: 40, height: 40}} />
  <Image source={{uri: 'asset:/app_icon.png'}} style={{width: 40, height: 40}} /> // android asset폴더 이용
  ```

- 네트워크 이미지
  - 정적 리소스와 달리 이미지의 크기를 지정해줘야 한다.
  ```
  <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 400, height: 400}} />
  ```
  - 이미지 호출 시 header와 body를 지정할 수 있음.
  ```
  <Image
    source={{
        uri: 'https://facebook.github.io/react/logo-og.png',
        method: 'POST',
        headers: {
        Pragma: 'no-cache',
        },
        body: 'Your Body goes here',
    }}
    style={{width: 400, height: 400}}
    />
  ```

- URI 데이터 이미지
  - 인코딩 된 이미지 데이터를 가져올 수 있음
  ```
  <Image
    style={{
        width: 51,
        height: 51,
        resizeMode: Image.resizeMode.contain,
    }}
    source={{
        uri:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
    }}
    />
  ```

- 로컬 파일시스템 이미지
  - 카메라 롤 이미지를 가져올 수 있음.

### Animations

- Animated API
  - 가장 쉽게 애니메이션을 구현
  - 사용자 애니메이션 컴포넌트 생성은 `createAnimatedComponent()` 를 사용한다.
  - `timing()` 메소드를 이용하여 애니메이션 속도를 제어할 수 있다.

- LayoutAnimation API
  - 특정 속성을 측정하거나 계산하지 않아도 레이아웃 구성이 가능.
  - 레이아웃 변경이 상위 항목에 영향을 미칠 경우 유용.

### Accessibility
장애인을 위한 VoiceOver, TalkBack 같은 기능을 제공.

### LifeCycle API
- constructor(): 컴포넌트 생성자.
- componentWillMount(): 컴포넌트가 화면에 나타나기 직전에 호출되는 API.
- componentDidMount(): 컴포넌트가 화면에 나타났을 때 호출되는 API.
- componentWillReceiveProps(): 컴포넌트가 새로운 props 를 받게되었을 때 호출되는 API.
- getDerivedStateFromProps(): props 로 받아온 값을 state 로 동기화 하는 작업.
- shouldComponentUpdate(): 상황에 따라 랜더링하지 않게 설정할 수 있다.
- componentWillUpdate(): 위의 shouldComponentUpdate 에서 true 를 반환 했을때 호출 됨다.
- getSnapshotBeforeUpdate(): render(), getSanpshotBeforUpdate(), 실제 DOM 에 변화 발생, componentDidUpdate() 호출 발생 시 호출.
- componentDidUpdate(): render() 를 호출하고난 후 호출되는 API.
- componentWillUnmount(): 컴포넌트 제거 시 호출.
- componentDidCatch(): 에러가 발생하면 호출.