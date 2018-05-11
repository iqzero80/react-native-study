### Improving User Experience
모바일 앱은 일반 웹과 다르게 사용성을 고려해야 한다.

- 텍스트 입력
  - 첫 번째 필드에 자동으로 포커스
  - placeholder 를 활용하여 어떤 데이터가 들어가는지 가이드
  - 자동 교정 기능을 사용 할것인지 말것이지 결정
  - 키보드 유형 설정(이메일, 숫자)

- 키보드 활성 레이아웃
  - 키보드에 덮일 수 있는 요소가 있다면 `KeyboardAvoidingView` 를 사용하여 확인.

- 터치 영역 크게 만들기
  - 터치 영역은 44x44 이상이 되도록 한다.

- Android Ripple 사용
  - Android 는 사용자가 화면을 터치할 때 `TouchableNativeFeedback` 을 이용하여 피드백을 제공한다.

- 화면 방향 전환 기능 잠금
  - 되도록이면 가로 또는 세로 방향으로 고정하는 것이 좋다.

### Timers

- Timer
  - `requestAnimationFrame()` 은 프레임이 flush 된 후 콜 됨.
  - `setTimeout()` 은 빠른 콜.

- InteractionManager
  - 애니메이션이 완료된 후 작업이 실행되도록 예약할 수 있다.
  ```
  InteractionManager.runAfterInteractions(() => {
    // ...long-running synchronous task...
  });
  ```
- TimerMixin
  - 마운트가 해제 된 후 타이머가 실행되면 크래시가 발생할 가능성이 있음.
  - 이를 해결하기 위해 `TimerMixin` 라이브러리를 설치한다.
  - 그리고 `this.setTimer()` 를 사용하면 마운트 해제 시 함께 정리가 된다.

### props, state
- props: 부모 컴포넌트가 자식 컴포넌트에게 주는 값.
- state: 컴포넌트 내부에서 선언하며 내부에서 값을 변경.(props 를 직접 수정 불가)

