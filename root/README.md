# {%= title || name %}

{%= description %}

## Getting Started
Download [videojs](http://www.videojs.com/)

In your web page:

```html
<video id="video" src="movie.mp4" controls></video>
<script src="video.js"></script>
<script src="dist/{%= name %}.min.js"></script>
<script>
videojs('video', {}, function() {
  var player = this;
  player.awesome(); // "awesome"
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
