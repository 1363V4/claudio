# Claudio.js

A lightweight JavaScript library to easily add sound effects to your web elements.

```html
<div cl-audio="bell.ogg"></div>
```

## Demo

[See a live demo here.](https://1363v4.github.io/claudio/)

## Installation

1. Download the `claudio.js` file and include it in your project.
2. Add the following script tag to your HTML file:
   ```html
   <script src="path/to/claudio.js"></script>
   ```
3. Create a folder named `claudio` inside your static assets directory to store your sound files.

## Usage

### Attributes

🎵 `a-sound`: Specifies the sound file to play.  
🎵 `a-on`: Defines the event that triggers the sound.

### Syntax

🎵 `soundname:` Name of your sound file.  
🎵 `event:` JavaScript event that triggers the sound. Defaults to click.  
```html
<element a-sound="soundname" a-on="event"></element>
```

---

## Contributing

Please use this repository for requests, issues, and pull requests.
