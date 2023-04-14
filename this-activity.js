
let photoSlideShow = {

    photoList :['house1.jpg', 'house2.jpg', 'house3.jpg', 'house4.jpg'],// An array called photoList that contains the names of the photos as strings
      
    currentPhotoIndex : 0, // An integer currentPhotoIndex that represents which photo in the photoList is currently displayed

    // A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and:
    nextPhoto() {
        if (this.currentPhotoIndex < this.photoList.length - 1){
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);

        } else {
            console.log("End of slideshow.");
        }
    },

    // A prevPhoto() function that does the same thing, but backwards.
    previousPhoto() {
        if (this.currentPhotoIndex >= 0){
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
           
        } else {    
            console.log("Beginning of slideshow.");
        }
    },
   
    // A function getCurrentPhoto() that returns the current photo from the list.
    getCurrentPhoto() {
        return this.photoList[this.currentPhotoIndex];
    }
}

console.log(photoSlideShow.getCurrentPhoto());

photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();


photoSlideShow.previousPhoto();
photoSlideShow.previousPhoto();

console.log('current photo '+photoSlideShow.getCurrentPhoto());