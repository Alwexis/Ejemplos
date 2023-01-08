First thing u need to do, is to add the init() function inside the component's file, since every component has a different view.
Then, u must add the 'detectTouch=true' attribute to the element u want to detect the touch moves. I highly recommend to bind it to the content or main one.

For example:
```
<ion-content detectTouch="true" detectTouchX="true"></ion-content>
```

And there u are. Now you can detect horizontal touch moves (or scroll) on ionic.
