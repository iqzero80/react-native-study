### Networking
- 네트워크 통신을 위한 방법으로 일반적인 `XMLHttpRequest`보다 강력한 `Fetch API`를 제공
- 간단한 호출 방법
	
	```
	fetch('https://mywebsite.com/mydata.json');
	```
	
- POST 호출

	```
	fetch('https://mywebsite.com/endpoint/', {
	  method: 'POST',
	  headers: {
	    Accept: 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    firstParam: 'yourValue',
	    secondParam: 'yourOtherValue',
	  }),
	});
	```
	
- 통신의 기본은 비동기로 처리가 되며 `Promise`객체를 반환한다.(Promise 는 비동기 처리의 최종 결과를 갖고 있는 객체)
- React Native에서 제안한 `async`, `await`을 사용할 수 있다.
> async, await 이 뭐지?

- 예외처리는 잊지 말고 처리한다.

	```
	componentDidMount(){
	  return fetch('https://facebook.github.io/react-native/movies.json') 	    .then((response) => response.json())
	    .then((responseJson) => {
	      this.setState({
	        isLoading: false,
	        dataSource: responseJson.movies,
	      }, function(){
		
	      });
		
	    })
	    .catch((error) =>{
	      console.error(error);
	    });
	}
	```

- iOS는 SSL 암호화되지 않은 요청을 차단하므로 일반 `http` 방식 호출을 하기 위해서는 App Transport Security 예외를 등록하여 사용을 한다.
- `XMLHttpRequest` 기본 API도 지원
- `WebSocket`도 지원

### More Resources

- Redux 라이브러리를 이용하자
- React Native를 이용한 앱은 여기서 구경해라
  - https://github.com/ReactNativeNews/React-Native-Apps

