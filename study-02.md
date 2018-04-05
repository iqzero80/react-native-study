### Style
- 스타일을 정의할 때 다른 언어를 사용하지 않고 자바스크립트 내에서 스타일을 정의한다
- CSS 정의가 비슷하지만 카멜케이스을 이용하여 작성한다
  - bacgroud-color => backgroudColor
- 스타일은 배열로 지정이 가능하며 마지막 스타일이 우선 순위가 높다

```
<Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
```
- 스타일이 복잡한 경우 따로 정의하여 사용한다

```
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
```

### Height and Width
- 고정 치수 (fiexd)
  - React Native의 모든 치수는 단위가 없으며 pixel을 의미한다

```
<View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
```

- 유동 치수 (flex)
  - `flex : 1`은 모든 공간을 채우도록 한다
  - 형제 노드가 존재하는 경우 flex 비율에 맞게 공간을 차지한다

```
<View style={{flex: 1}}>
  <View style={{flex: 1, backgroundColor: 'powderblue'}} />
  <View style={{flex: 2, backgroundColor: 'skyblue'}} />
  <View style={{flex: 3, backgroundColor: 'steelblue'}} />
</View>
```
> 상위 노드가 0인 경우는 무슨 말이지?

### Layout with Flexbox
- flexDirection
  - 기본 축을 결정한다
  - 자식노드를 가로(row), 또는 세로(column) 방향으로 정렬한다 (default : column)

```
<View style={{flex: 1, flexDirection: 'row'}}>
  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
  <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
</View>
```

- justifyContent
  - 주 축을 따라 자식 노드를 정렬

```
<View style={{
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
}}>
  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
  <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
</View>
```  

- alignItems
  - 보조 축을 따라 자식 노드를 정렬

```
<View style={{
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}}>
  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
  <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
</View>
```

### Handling Text Input
- `TextInput` 컴포넌트는 사용자가 입력하는 기본 컴포넌트
- `onChangeText` prop은 텍스트가 변경할 때마다 호출할 함수 지정
- `onSubmitEditing` prop은 submit 할 때 호출할 함수 지정

```
<View style={{padding: 10}}>
<TextInput
  style={{height: 40}}
  placeholder="Type here to translate!"
  onChangeText={(text) => this.setState({text})}
/>
<Text style={{padding: 10, fontSize: 42}}>
  {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
</Text>
</View>
```

### Handling Touches
- 사용자와 상호 작용하는 가장 기본은 'Button' 컴포넌트
- `onPress` prop은 버튼을 터치 했을 때 호출할 함수 지정

```
<View style={styles.buttonContainer}>
  <Button
    onPress={this._onPressButton}
    title="Press Me"
  />
</View>
```
> style이 `Button`이 아닌 `View`에 들어가네?

- 추가 터치 옵션
  - `TouchableHighlight` : 사용자가 누르면 배경이 어두어지는 효과
  - `TouchableNativeFeedback` : Android에서 사용자가 누르면 물결 효과
  - `TouchableOpacity` : 사용자가 누르면 불투명 효과
  - `TouchableWithoutFeedback` : 효과 제거

### Using a ScrollView
- `ScrollView`는 일반적인 스크롤 컨테이너
- `pagingEnabled` 컴포넌트와 스와이프 제스처를 이용해 페이징 규현이 가능
- `maximumZoomScale`, `minimumZoomScale` prop을 이용해 확대/축소 기능 가능
- 데이터가 많은 목록을 표시할 경우 보이는 부분만 렌더링하는 `FlatList`를 이용하여 구현한다

### Using List Views
- FlatList
  - 보다 많은 데이터 목록을 표현하기 위해 보이는 부분만 렌더링한다
- SectionList
  - 섹션 헤더와 논리적 섹션을 분리하여 논리적 섹션을 렌더링한다

