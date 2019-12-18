# 💯💜🎉

> This package is probably not a safe way to generate IDs in production

This package generates unique identifiers, but the identifiers are a string of emoji.

```javascript
import getId from 'emoji-uid'

const id = getId();
// id of 💯💜🎉 or similar
```

If you want to specify the ID length, you can provide that as an argument:

```javascript
import getId from 'emoji-uid'

const id = getId(5);
// id of 💯💜🎉🏳️‍🌈🔑 or similar
```

This library includes 858 emojis, or more than 631 million possible unique ids,

Some emojis have been removed from the set for not working on my machine, implying negative sentiment, or my personal preference.

This project inspired by human-readable-ids, but with more troll.
