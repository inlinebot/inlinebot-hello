'use strict';

const SDK = require('inline-sdk');
const CommandType = SDK.CommandType;

const inline = new SDK();

inline.onCommand((type, payload, context) => {
  const imageUrl1 = 'https://lh3.ggpht.com/qeItSe5LmBKPuTlr5g8eNgNoss1Qvh4GQRM0QG7AYrknUDE-ayl4l7owjaIj9YcSmLc=h900';
  const imageUrl2 = 'http://glitter.mthai.com/wordpress/wp-content/uploads/2015/09/วันอาทิตย์.jpg';
  const imageUrl3 = 'https://www.e-toyotaclub.net/site/Portals/0/Webboard/upload_image/Img073507.jpg';

  const random = Math.random() * 2;

  if (random < 0) {
    context.sendImage(imageUrl, imageUrl1);
  } else if (random < 1) {
    context.sendImage(imageUrl, imageUrl2);
  } else {
    context.sendImage(imageUrl, imageUrl3);
  }
});
