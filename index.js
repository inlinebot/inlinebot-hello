'use strict';

const SDK = require('inline-sdk');
const CommandType = SDK.CommandType;

const inline = new SDK();

inline.onCommand((type, payload, context) => {
  const imageUrl = Math.random() * 2 > 1 ? 'http://glitter.mthai.com/wordpress/wp-content/uploads/2015/08/mthai_photo_editor-37.png' : 'http://jeedna.com/wp-content/uploads/2016/01/m5.jpg';

  context.sendImage(imageUrl, imageUrl);
});
