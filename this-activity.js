
let photoSlideShow = {

    photoList :['house.jpg', 'house2.jpg', 'house3.jpg', 'house4.'],// An array called photoList that contains the names of the photos as strings
      
    currentPhotoIndex : 0, // An integer currentPhotoIndex that represents which photo in the photoList is currently displayed

    nextPhoto() {
        if (this.currentPhotoIndex < this.photoList.length - 1){
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);

        } else {
            console.log("End of slideshow.");
        }
    },

    previousPhoto() {
        if (this.currentPhotoIndex > 0){
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {    
            console.log("Beginning of slideshow.");
        }
    },
    getCurrentPhoto() {
        return this.photoList[this.currentPhotoIndex];
    }
}

console.log(photoSlideShow.getCurrentPhoto());

photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.previousPhoto();
photoSlideShow.previousPhoto();
photoSlideShow.previousPhoto();
photoSlideShow.previousPhoto();
photoSlideShow.nextPhoto();