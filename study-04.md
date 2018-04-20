### Components and APIs

#### Basic Components
- View
  - UI를 구현하기 위한 가장 기보적인 컴포넌트
- Text
  - 텍스트 표시를 위한 컴포넌트
- Image
  - 이미지 표시를 위한 컴포넌트
- TextInput
  - 키보드를 통해 텍스트를 입력하기 윈한 컴포넌트
- ScrollView
  - 여러 컴포넌트 및 View를 묶을 수 있는 스크롤 컨테이너
- StyleSheet
  - CSS 스타일 시트와 유사한 추상 레이어

#### User Interface
- Button
  - 터치 처리를 위한 기본 버튼 컴포넌트
- Picker
  - 기본 셀렉트 박스 컴포넌트
- Slider
  - 범위 안에서 단일 선택 컴포넌트
- Switch
  - on/off 컴포넌트

#### List View
- FlatList
  - 활성화 영역만 렌디링하는 컴포넌트
- SectionList
  - FlatList와 같지만 Section이 있음

#### iOS Components and APIs
- ActionSheetIOS
  - 액션시트, 공유시트(이게 뭐지?)
- AlertIOS
  - 알림 대화상자 컴포넌트
- DatePickerIOS
  - 날짜/시간 컴포넌트
- ImagePickerIOS
  - 이미지 선택 컴포넌트
- NavigaterIOS
  - 탐색 컴포넌트(이게 뭐지?)
- ProgressViewIOS
  - UIProgressView 렌더링
- PushNotificationIOS
  - 아이콘 배지, 앱 푸시 권한 처리 컴포넌트
- SegmentedControlIOS
  - UISegmentedControl 렌더링
- TabBarIOS
  - UITabViewController 렌더링

#### Android Components and APIs
- BackHandler
  - 백버튼
- DatePickerAndroid
  - 표준 날짜 컴포넌트
- DrawerLayoutAndroid
  - DrawerLayout 렌더링
- PermissionsAndroid
  - 권한 모델 엑세스 제공
- ProgressBarAndroid
  - ProgressBar 렌더링
- TimePickerAndroid
  - 표준 시간 컴포넌트
- ToastAndroid
  - 알림 컴포넌트
- ToolbarAndroid
  - Toolbar 렌더링
- ViewPagerAndroid
  - 자식 View 간 좌/우를 바꿀 수있는 컴포넌트

#### Others
- ActivityIndicator
  - 로딩바 표시
- Alert
  - 경고 대화창
- Animated
  - 애니메이션 라이브러리
- CameraRoll
  - 카메라, 갤러리 접근 제공
- Clipboard
  - 클립보드 접근 인터페이스
- Dimensions
  - 장치의 크기 정보 인터페이스
- KeyboardAvoidingView
  - 키보드와 화면이 겹치지 않는 View
- Linking
  - 외부링크 인터페이스
- Modal
  - 
- PixelRatio
  - 해상도 밀도 정보 제공
- RefreshControl
  - ScrollView 새로고침
- StatusBar
  - 상태표시줄 제어 인터페이스
- WebView
  - 웹화면 렌더링 View

### Platform Specific Code
하나의 소스로 크로스 플랫폼을 모두 지원하고 싶겠지만 그렇지 않을 경우 구분하여 코드를 작성해야 한다.
플랫폼을 구분하는 방법은 크게 두가지가 있다.
- 구분 방법
  - Platform module을 이용하는 방법
  - dddd

- Platform module
  
  React Native는 플랫폼을 구분할 수 있는 모듈을 기본으로 제공함.
  - `Platform.OS`: 플랫폼 이름 반환
  - `Platform.select`: 플랫폼 별 사용 가능한 메소드

- Platform-specific extensions
  - 코드가 복잡한 경우 플랫폼 별로 파일을 구분하여 처리 할 수 있다.
  - 파일 확장자가 `.ios.`, `.android.`가 있는 경우 자동으로 감지하여 해당 플랫폼 파일을 로드한다.

### Navigating Between Screens
- 모바일앱은 한 화면으로 구성되기 때문에 화면을 표시하고 관리하는 navigator 가 필요하다.
- React에서 제공하는 navigator는 스택형태, 탭형태 모두 지원한다.

#### React Navigation
스택형태의 두개 화면을 등록하는 방법.
```
import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});
```

#### NavigatorIOS
> 이건 왜 따로 있는거야?