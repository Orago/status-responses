# @orago/status

### Usage:
```js
import { success, err } from '@orago/status';

success('Everything works!', { cat: 'meow' });
// Result =>
{
	response: 'Everything works!',
	status: true,
	cat: 'meow'
}



err('Something went wrong!', { userID: 5 }); 
// Result =>
{
	response: 'Something went wrong!',
	status: false,
	userID: 5
}

success({ something: 'random' }, { dog: 'woof' });
// Result =>
{
	response: { something: 'random' },
	status: true,
	dog: 'woof'
}
```