const menu = {
   btn: document.querySelector('.menu'),
   sectionsPage: [
      document.querySelector('.menu'),
      document.querySelector('.navbar'),
      ...Array.from(document.querySelectorAll('.section')),
   ],
   clickEvt: function () {
      this.btn.addEventListener('click', e => {
         this.sectionsPage.forEach(element => {
            element.classList.toggle('menu--change');
         });
      });
   },
};

const video = {
   container: document.querySelector('.video-gallery__grid '),
   videos: Array.from(document.querySelectorAll('.video-gallery__video')),
   selected: null,
   playPause: function () {
      this.container.addEventListener('mouseover', e => {
         if (e.target.nodeName === 'VIDEO') {
            this.selected = e.target;
            e.target.play();
         }
      });

      this.container.addEventListener('mouseout', e => {
         if (e.target.nodeName === 'VIDEO') {
            this.selected.pause();
         }
      });
   },
};

menu.clickEvt();
document.querySelectorAll('.container').forEach(element => {
   element.addEventListener('click', () => {
      menu.sectionsPage.forEach(item => {
         item.classList.remove('menu--change');
      });
   });
});
video.playPause();
